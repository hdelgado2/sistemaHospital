<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class admisionController extends Controller
{
    //

    public function store(Request $request)
    {
        // code

        return response()->json([
            "message" => "Paciente registrado exitosamente",
        ]);
    }
}
