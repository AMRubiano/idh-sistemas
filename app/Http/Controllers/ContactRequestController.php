<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreContactRequest;
use App\Models\ContactRequest;
use Illuminate\Http\RedirectResponse;

class ContactRequestController extends Controller
{
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
}