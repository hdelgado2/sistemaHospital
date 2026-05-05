<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;


Route::get('/admision/registro_nuevos_pacientes', function () {
    
    return Inertia::render('Admision/index');
})->name('admision');



?>