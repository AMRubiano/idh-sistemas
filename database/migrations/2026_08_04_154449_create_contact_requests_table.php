<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('contact_requests', function (Blueprint $table) {
            $table->id();

            $table->string('name', 120);
            $table->string('organization', 160)->nullable();
            $table->string('position', 120)->nullable();
            $table->string('email', 254);
            $table->string('phone', 40)->nullable();

            $table->string('service', 80);
            $table->text('message');

            $table->string('status', 30)->default('new');
            $table->timestamp('privacy_accepted_at');

            $table->string('source', 50)->default('website');

            $table->timestamp('responded_at')->nullable();
            $table->timestamp('closed_at')->nullable();

            $table->timestamps();

            $table->index('status');
            $table->index('created_at');
            $table->index('email');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('contact_requests');
    }
};