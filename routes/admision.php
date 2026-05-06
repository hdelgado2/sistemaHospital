<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Http\Controllers\admisionController;
Route::middleware(["auth", "verified"])->group(function () {
    Route::get("/admision", function () {
        return Inertia::render("Admision/index");
    })->name("admision");

    Route::get("/admision/registrar", function () {
        return Inertia::render("Admision/Registrar");
    })->name("admision.registrar");

    Route::post("/admision/registrar", [
        admisionController::class
        "store",
        
    ])->name("admision.registrar.post");
});

?>
