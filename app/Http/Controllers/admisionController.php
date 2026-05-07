<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class admisionController extends Controller
{
    //

    public function store(Request $request)
    {
        $request->validate([
            "nombre_completo" => "required|string|max:255|min:3",
            "documento" => "required|string|max:255|unique:admisions",
            "fecha_nacimiento" => "required|date",
            "genero" => "required|string|max:50",
            "direccion" => "required|string|max:255",
            "telefono" => "required|string|max:20",
            "email" => "required|string|email|max:255|unique:admisions",
            "estado_civil" => "required|string|max:50",
            "ocupacion" => "required|string|max:100",
            "nivel_educativo" => "required|string|max:100",
            "etnia_religion" => "required|string|max:100",
            "entidad_aseguradora" => "required|string|max:255",
            "tipo_plan" => "required|string|max:255",
            "numero_poliza" => "required|string|max:255|unique:admisions",
            "responsable_nombre" => "required|string|max:255",
            "responsable_parentesco" => "required|string|max:50",
            "responsable_telefono" => "required|string|max:20",
        ]);

        try {
        } catch (\Exception $e) {
            \Log::error("Error al registrar el paciente: " . $e->getMessage());
            return response()->json(
                [
                    "message" => "Error al registrar el paciente",
                    "error" => $e->getMessage(),
                ],
                500,
            );
        }

        return response()->json([
            "message" => "Paciente registrado exitosamente",
        ]);
    }
}
