<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;


Route::get('/admision', function () {
    
    return Inertia::render('Admision/index');
})->name('admision');



?>