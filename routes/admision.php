<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Http\Controllers\admisionController;
use App\Models\admision;

Route::middleware(["auth", "verified"])->group(function () {
    Route::get("/admision", function () {
        $admisions = admision::paginate(10);

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
