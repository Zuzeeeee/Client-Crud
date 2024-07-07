<?php

use App\Http\Controllers\CardController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;


Route::get('/users', [UserController::class, 'index']);
Route::get('/user/{id}', [UserController::class, 'show']);
Route::post('/user', [UserController::class, 'store']);
Route::put('/user/{id}', [UserController::class, 'update']);
Route::delete('/user/{id}', [UserController::class, 'destroy']);

Route::get('/card/{id}', [CardController::class, 'index']);
Route::post('/card/{id}', [CardController::class, 'store']);
// Route::put('/card/{id}', [CardController::class, 'update']);
Route::delete('/card/{id}', [CardController::class, 'destroy']);