<?php

use App\Http\Controllers\ContactRequestController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\Teams\TeamInvitationController;
use App\Http\Middleware\EnsureTeamMembership;
use Illuminate\Support\Facades\Route;

Route::inertia('/', 'welcome')->name('home');

Route::post('/contact', [ContactRequestController::class, 'store'])
    ->middleware('throttle:5,1')
    ->name('contact.store');

Route::prefix('{current_team}')
    ->middleware(['auth', 'verified', EnsureTeamMembership::class])
    ->group(function () {
        Route::get('dashboard', DashboardController::class)
            ->name('dashboard');

        Route::get(
            'contact-requests',
            [ContactRequestController::class, 'index'],
        )->name('contact-requests.index');
        Route::get(
            'contact-requests/{contactRequest}',
            [ContactRequestController::class, 'show'],
        )->name('contact-requests.show');

        Route::patch(
            'contact-requests/{contactRequest}/status',
            [ContactRequestController::class, 'updateStatus'],
        )->name('contact-requests.update-status');
        Route::post(
            'contact-requests/{contactRequest}/notes',
            [ContactRequestController::class, 'storeNote'],
        )->name('contact-requests.notes.store');
    });

Route::middleware(['auth'])->group(function () {
    Route::get(
        'invitations/{invitation}/accept',
        [TeamInvitationController::class, 'accept'],
    )->name('invitations.accept');

    Route::delete(
        'invitations/{invitation}',
        [TeamInvitationController::class, 'decline'],
    )->name('invitations.decline');
});

require __DIR__.'/settings.php';