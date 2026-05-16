<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Http\Controllers\admisionController;
use App\Models\admision;
use Illuminate\Support\Facades\Schema;

Route::middleware(["auth", "verified"])->group(function () {
    Route::get("/admision", function () {
        $admisions = admision::select([
            "id as n",
            "nombre_completo as Nombre",
            "fecha_nacimiento as Fecha de Nacimiento",
            "documento as DNI",
            "telefono as Celular",
            "email as Email",
        ])->paginate(10);

        return Inertia::render("Admision/index", [
            "admisions" => $admisions,
        ]);
    })->name("admision");

    Route::get("/admision/registrar", function () {
        return Inertia::render("Admision/Registrar");
    })->name("admision.registrar");

    Route::post("/admision/registrar", [
        admisionController::class,
        "store",
    ])->name("admision.registrar.post");
});

?>
