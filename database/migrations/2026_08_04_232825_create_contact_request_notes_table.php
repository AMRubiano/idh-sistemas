<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Ejecuta la migración.
     */
    public function up(): void
    {
        Schema::create('contact_request_notes', function (Blueprint $table) {
            $table->id();

            $table
                ->foreignId('contact_request_id')
                ->constrained()
                ->cascadeOnDelete();

            $table
                ->foreignId('user_id')
                ->constrained()
                ->restrictOnDelete();

            $table->text('content');

            $table->timestamps();

            $table->index([
                'contact_request_id',
                'created_at',
            ]);
        });
    }

    /**
     * Revierte la migración.
     */
    public function down(): void
    {
        Schema::dropIfExists('contact_request_notes');
    }
};