<?php

namespace App\Http\Controllers\Api\Settings;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\JsonResponse;

class UserController extends Controller
{
    public function list(): JsonResponse
    {
        $users = User::all();

        return response()->json(['data' => $users]);
    }
}
