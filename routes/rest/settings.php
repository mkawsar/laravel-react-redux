<?php

use App\Http\Controllers\Api\Settings\UserController;
use Illuminate\Support\Facades\Route;

Route::prefix('settings')->middleware('auth:sanctum')->name('settings.')->group(function () {
    Route::prefix('user')->name('user.')->group(function () {
        Route::get('list', [UserController::class, 'list'])->name('list');
    });
});
