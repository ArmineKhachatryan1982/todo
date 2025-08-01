<?php

use App\Http\Controllers\FrontendController;
use Illuminate\Support\Facades\Route;


Route::get('/', function () {
    return redirect()->route('todo.list');
});

 Route::prefix('todo')->group(function () {

    Route::get('/list',[FrontendController::class,'index'])->name('todo.list');
    Route::get('/create',[FrontendController::class,'create'])->name('todo.create');

  });


