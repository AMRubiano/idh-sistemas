<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreContactRequestNote extends FormRequest
{
    /**
     * La ruta estará protegida por autenticación, verificación
     * y pertenencia al equipo actual.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Reglas para guardar una nota interna.
     *
     * @return array<string, mixed>
     */
    public function rules(): array
    {
        return [
            'content' => [
                'required',
                'string',
                'min:3',
                'max:5000',
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
            'content.required' => 'Escribe el contenido de la nota.',
            'content.min' => 'La nota debe contener al menos 3 caracteres.',
            'content.max' => 'La nota no puede superar los 5.000 caracteres.',
        ];
    }

    /**
     * Nombre legible del campo.
     *
     * @return array<string, string>
     */
    public function attributes(): array
    {
        return [
            'content' => 'nota interna',
        ];
    }
}