<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class ContactRequestNote extends Model
{
    use HasFactory;

    /**
     * Atributos asignables de forma masiva.
     */
    protected $fillable = [
        'contact_request_id',
        'user_id',
        'content',
    ];

    /**
     * Solicitud a la que pertenece la nota.
     */
    public function contactRequest(): BelongsTo
    {
        return $this->belongsTo(ContactRequest::class);
    }

    /**
     * Usuario que creó la nota.
     */
    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }
}