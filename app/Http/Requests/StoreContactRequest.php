<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class StoreContactRequest extends FormRequest
{
    /**
     * El formulario es público.
     *
     * La autorización específica se aplicará en acciones privadas
     * o administrativas futuras.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Reglas de validación del formulario.
     *
     * @return array<string, mixed>
     */
    public function rules(): array
    {
        return [
            'name' => [
                'required',
                'string',
                'min:2',
                'max:120',
            ],

            'organization' => [
                'nullable',
                'string',
                'max:160',
            ],

            'position' => [
                'nullable',
                'string',
                'max:120',
            ],

            'email' => [
                'required',
                'string',
                'email:rfc',
                'max:254',
            ],

            'phone' => [
                'nullable',
                'string',
                'max:40',
                'regex:/^[0-9+\s().-]+$/',
            ],

            'service' => [
                'required',
                'string',
                Rule::in([
                    'management-systems',
                    'audits',
                    'training',
                    'consulting',
                    'risk-management',
                    'other',
                ]),
            ],

            'message' => [
                'required',
                'string',
                'min:10',
                'max:2000',
            ],

            'privacy_accepted' => [
                'required',
                'accepted',
            ],

            /*
             * Campo honeypot.
             *
             * Las personas usuarias no lo verán. Los bots suelen
             * rellenarlo automáticamente y la validación lo rechazará.
             */
            'website' => [
                'nullable',
                'string',
                'max:0',
            ],
        ];
    }

    /**
     * Mensajes de validación mostrados al visitante.
     *
     * @return array<string, string>
     */
    public function messages(): array
    {
        return [
            'name.required' => 'Indica tu nombre.',
            'name.min' => 'El nombre debe tener al menos 2 caracteres.',
            'name.max' => 'El nombre no puede superar los 120 caracteres.',

            'organization.max' => 'La organización no puede superar los 160 caracteres.',

            'position.max' => 'El cargo no puede superar los 120 caracteres.',

            'email.required' => 'Indica tu correo electrónico.',
            'email.email' => 'Introduce un correo electrónico válido.',
            'email.max' => 'El correo electrónico no puede superar los 254 caracteres.',

            'phone.max' => 'El teléfono no puede superar los 40 caracteres.',
            'phone.regex' => 'Introduce un número de teléfono válido.',

            'service.required' => 'Selecciona el servicio que te interesa.',
            'service.in' => 'El servicio seleccionado no es válido.',

            'message.required' => 'Escribe tu consulta.',
            'message.min' => 'La consulta debe tener al menos 10 caracteres.',
            'message.max' => 'La consulta no puede superar los 2.000 caracteres.',

            'privacy_accepted.required' => 'Debes aceptar la política de privacidad.',
            'privacy_accepted.accepted' => 'Debes aceptar la política de privacidad.',

            'website.max' => 'No se ha podido enviar el formulario.',
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
            'name' => 'nombre',
            'organization' => 'organización',
            'position' => 'cargo',
            'email' => 'correo electrónico',
            'phone' => 'teléfono',
            'service' => 'servicio',
            'message' => 'consulta',
            'privacy_accepted' => 'aceptación de privacidad',
        ];
    }

    /**
     * Normaliza únicamente campos de texto simples antes de validarlos.
     */
    protected function prepareForValidation(): void
    {
        $this->merge([
            'name' => $this->trimString($this->input('name')),
            'organization' => $this->trimNullableString(
                $this->input('organization'),
            ),
            'position' => $this->trimNullableString(
                $this->input('position'),
            ),
            'email' => $this->normalizeEmail($this->input('email')),
            'phone' => $this->trimNullableString(
                $this->input('phone'),
            ),
            'message' => $this->trimString($this->input('message')),
        ]);
    }

    private function trimString(mixed $value): mixed
    {
        return is_string($value) ? trim($value) : $value;
    }

    private function trimNullableString(mixed $value): mixed
    {
        if (! is_string($value)) {
            return $value;
        }

        $value = trim($value);

        return $value === '' ? null : $value;
    }

    private function normalizeEmail(mixed $value): mixed
    {
        return is_string($value)
            ? mb_strtolower(trim($value))
            : $value;
    }
}