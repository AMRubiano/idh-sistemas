<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreContactRequest;
use App\Http\Requests\UpdateContactRequestStatus;
use App\Models\ContactRequest;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;
use App\Http\Requests\StoreContactRequestNote;

class ContactRequestController extends Controller
{
    /**
     * Muestra la bandeja privada de solicitudes de contacto.
     */
    public function index(Request $request): Response
    {
        $search = trim((string) $request->query('search', ''));
        $status = trim((string) $request->query('status', ''));

        $contactRequests = ContactRequest::query()
            ->when(
                $search !== '',
                function ($query) use ($search): void {
                    $query->where(function ($query) use ($search): void {
                        $query
                            ->where('name', 'like', "%{$search}%")
                            ->orWhere('organization', 'like', "%{$search}%")
                            ->orWhere('email', 'like', "%{$search}%")
                            ->orWhere('phone', 'like', "%{$search}%")
                            ->orWhere('message', 'like', "%{$search}%");
                    });
                },
            )
            ->when(
                array_key_exists($status, ContactRequest::statuses()),
                fn ($query) => $query->where('status', $status),
            )
            ->latest()
            ->paginate(20)
            ->withQueryString()
            ->through(fn (ContactRequest $contactRequest): array => [
                'id' => $contactRequest->id,
                'name' => $contactRequest->name,
                'organization' => $contactRequest->organization,
                'position' => $contactRequest->position,
                'email' => $contactRequest->email,
                'phone' => $contactRequest->phone,
                'service' => $contactRequest->service,
                'service_label' => $this->serviceLabel(
                    $contactRequest->service,
                ),
                'message' => $contactRequest->message,
                'status' => $contactRequest->status,
                'status_label' => ContactRequest::statuses()[
                    $contactRequest->status
                ] ?? $contactRequest->status,
                'source' => $contactRequest->source,
                'privacy_accepted_at' => $contactRequest
                    ->privacy_accepted_at
                    ?->toISOString(),
                'responded_at' => $contactRequest
                    ->responded_at
                    ?->toISOString(),
                'closed_at' => $contactRequest
                    ->closed_at
                    ?->toISOString(),
                'created_at' => $contactRequest
                    ->created_at
                    ?->toISOString(),
                'updated_at' => $contactRequest
                    ->updated_at
                    ?->toISOString(),
            ]);

        return Inertia::render('contact-requests/index', [
            'contactRequests' => $contactRequests,

            'filters' => [
                'search' => $search,
                'status' => $status,
            ],

            'statuses' => ContactRequest::statuses(),

            'summary' => [
                'total' => ContactRequest::query()->count(),

                'new' => ContactRequest::query()
                    ->where('status', ContactRequest::STATUS_NEW)
                    ->count(),

                'pending' => ContactRequest::query()
                    ->where('status', ContactRequest::STATUS_PENDING)
                    ->count(),

                'in_progress' => ContactRequest::query()
                    ->where('status', ContactRequest::STATUS_IN_PROGRESS)
                    ->count(),

                'responded' => ContactRequest::query()
                    ->where('status', ContactRequest::STATUS_RESPONDED)
                    ->count(),

                'closed' => ContactRequest::query()
                    ->where('status', ContactRequest::STATUS_CLOSED)
                    ->count(),
            ],
        ]);
    }

    /**
     * Muestra la ficha privada de una solicitud.
     */
    public function show(
        string $current_team,
        ContactRequest $contactRequest,
    ): Response {
        $contactRequest->load('notes.user');
        return Inertia::render('contact-requests/show', [
            'contactRequest' => [
                'id' => $contactRequest->id,
                'name' => $contactRequest->name,
                'organization' => $contactRequest->organization,
                'position' => $contactRequest->position,
                'email' => $contactRequest->email,
                'phone' => $contactRequest->phone,
                'service' => $contactRequest->service,
                'service_label' => $this->serviceLabel(
                    $contactRequest->service,
                ),
                'message' => $contactRequest->message,
                'status' => $contactRequest->status,
                'notes' => $contactRequest->notes->map(
                    fn ($note) => [
                        'id' => $note->id,
                        'content' => $note->content,
                        'created_at' => $note->created_at?->toISOString(),
                        'user' => [
                            'id' => $note->user->id,
                            'name' => $note->user->name,
                        ],
                    ],
                ),
                'status_label' => ContactRequest::statuses()[
                    $contactRequest->status
                ] ?? $contactRequest->status,
                'source' => $contactRequest->source,
                'privacy_accepted_at' => $contactRequest
                    ->privacy_accepted_at
                    ?->toISOString(),
                'responded_at' => $contactRequest
                    ->responded_at
                    ?->toISOString(),
                'closed_at' => $contactRequest
                    ->closed_at
                    ?->toISOString(),
                'created_at' => $contactRequest
                    ->created_at
                    ?->toISOString(),
                'updated_at' => $contactRequest
                    ->updated_at
                    ?->toISOString(),
            ],

            'statuses' => ContactRequest::statuses(),
        ]);
    }

    /**
     * Guarda una nueva solicitud de contacto pública.
     */
    public function store(StoreContactRequest $request): RedirectResponse
    {
        $validated = $request->validated();

        ContactRequest::create([
            'name' => $validated['name'],
            'organization' => $validated['organization'] ?? null,
            'position' => $validated['position'] ?? null,
            'email' => $validated['email'],
            'phone' => $validated['phone'] ?? null,
            'service' => $validated['service'],
            'message' => $validated['message'],
            'status' => ContactRequest::STATUS_NEW,
            'privacy_accepted_at' => now(),
            'source' => 'website',
        ]);

        return back()->with(
            'success',
            'Hemos recibido tu consulta correctamente. El equipo de IDH se pondrá en contacto contigo.',
        );
    }

    /**
     * Actualiza el estado de una solicitud.
     */
    public function updateStatus(
        UpdateContactRequestStatus $request,
        string $current_team,
        ContactRequest $contactRequest,
    ): RedirectResponse {
        $status = $request->validated()['status'];

        $contactRequest->status = $status;

        if (
            $status === ContactRequest::STATUS_RESPONDED &&
            $contactRequest->responded_at === null
        ) {
            $contactRequest->responded_at = now();
        }

        if (
            $status === ContactRequest::STATUS_CLOSED &&
            $contactRequest->closed_at === null
        ) {
            $contactRequest->closed_at = now();
        }

        $contactRequest->save();

        return back()->with(
            'success',
            'Estado actualizado correctamente.',
        );
    }
    /**
    * Guarda una nota interna asociada a una solicitud.
    */
    public function storeNote(
        StoreContactRequestNote $request,
        string $current_team,
        ContactRequest $contactRequest,
    ): RedirectResponse {
        $contactRequest->notes()->create([
            'user_id' => $request->user()->id,
            'content' => $request->validated()['content'],
        ]);

        return back()->with(
            'success',
            'Nota interna añadida correctamente.',
        );
    }

    /**
     * Devuelve el nombre legible de un servicio.
     */
    private function serviceLabel(string $service): string
    {
        return match ($service) {
                'management-systems' => 'Sistemas de gestión',
                'audits' => 'Auditoría y evaluación',
                'training' => 'Formación',
                'consulting' => 'Consultoría',
                'risk-management' => 'Gestión del riesgo',
                'other' => 'Otro servicio',
            default => $service,
        };
    }
}