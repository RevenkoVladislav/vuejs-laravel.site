<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Person as Person;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::prefix('people')->name('people.')->group(function () {
    Route::get('/', Person\IndexController::class)->name('index');
    Route::post('/store', Person\StoreController::class)->name('store');
    Route::get('/{person}', Person\ShowController::class)->name('show');
    Route::patch('/{person}', Person\UpdateController::class)->name('update');
    Route::delete('/{person}', Person\DeleteController::class)->name('delete');
});
