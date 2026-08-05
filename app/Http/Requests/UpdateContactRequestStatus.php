<?php

namespace App\Http\Requests;

use App\Models\ContactRequest;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class UpdateContactRequestStatus extends FormRequest
{
    /**
     * La ruta ya está protegida por autenticación, verificación
     * y pertenencia al equipo actual.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Reglas para actualizar el estado de una solicitud.
     *
     * @return array<string, mixed>
     */
    public function rules(): array
    {
        return [
            'status' => [
                'required',
                'string',
                Rule::in(array_keys(ContactRequest::statuses())),
            ],
        ];
    }

    /**
     * Mensajes de validación.
     *
     * @return array<string, string>
     */
    public function messages(): array
    {
        return [
            'status.required' => 'Selecciona un estado.',
            'status.in' => 'El estado seleccionado no es válido.',
        ];
    }

    /**
     * Nombres legibles de los campos.
     *
     * @return array<string, string>
     */
    public function attributes(): array
    {
        return [
            'status' => 'estado',
        ];
    }
}