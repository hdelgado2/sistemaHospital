<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::middleware(['auth','verified'])->group(function () {


Route::get('/admision', function () {
    
    return Inertia::render('Admision/index');
})->name('admision');

Route::get('/admision/registrar', function () {
    
    return Inertia::render('Admision/Registrar');
})->name('admision.registrar');

});

?> 