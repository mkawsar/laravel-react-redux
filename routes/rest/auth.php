<?php

use App\Http\Controllers\Api\Authentication\AuthController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::prefix('auth')->name('auth.')->group(function () {
    Route::post('/register', [AuthController::class, 'register'])->name('register');
    Route::post('/login', [AuthController::class, 'authenticate'])->name('login');
    Route::group(['middleware' => 'auth:sanctum'], function() {
        Route::get('user', function (Request $request) {
            return ['data' => $request->user()];
        })->name('user');
        Route::delete('/logout', [AuthController::class, 'logout'])->name('logout');
    });
});
