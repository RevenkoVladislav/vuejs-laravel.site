<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\IndexController;

Auth::routes();

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');

Route::get('/{page}', IndexController::class)->where('page', '.*');

