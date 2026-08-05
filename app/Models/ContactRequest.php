<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ContactRequest extends Model
{
    use HasFactory;

    /**
     * Estados permitidos para una solicitud de contacto.
     */
    public const STATUS_NEW = 'new';

    public const STATUS_PENDING = 'pending';

    public const STATUS_IN_PROGRESS = 'in_progress';

    public const STATUS_RESPONDED = 'responded';

    public const STATUS_CLOSED = 'closed';

    /**
     * Atributos que pueden asignarse de forma masiva.
     */
    protected $fillable = [
        'name',
        'organization',
        'position',
        'email',
        'phone',
        'service',
        'message',
        'status',
        'privacy_accepted_at',
        'source',
        'responded_at',
        'closed_at',
    ];

    /**
     * Conversiones automáticas de tipos.
     */
    protected function casts(): array
    {
        return [
            'privacy_accepted_at' => 'datetime',
            'responded_at' => 'datetime',
            'closed_at' => 'datetime',
        ];
    }

    /**
     * Estados disponibles para seguimiento.
     *
     * @return array<string, string>
     */
    public static function statuses(): array
    {
        return [
            self::STATUS_NEW => 'Nueva',
            self::STATUS_PENDING => 'Pendiente',
            self::STATUS_IN_PROGRESS => 'En proceso',
            self::STATUS_RESPONDED => 'Respondida',
            self::STATUS_CLOSED => 'Cerrada',
        ];
    }
    /**
    * Notas internas asociadas a la solicitud.
    */
    public function notes(): HasMany
    {
        return $this->hasMany(ContactRequestNote::class)
        ->latest();
}
}