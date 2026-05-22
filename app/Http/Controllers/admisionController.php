<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\admision;
use Inertia\Inertia;
use Inertia\Response;

class admisionController extends Controller
{
    public function filter(Request $request): Response
    {
        $search = $request->input("search");
       
        $admision = admision::select([
            "id as n",
            "nombre_completo as Nombre",
            "fecha_nacimiento as Fecha de Nacimiento",
            "documento as DNI",
            "telefono as Celular",
            "email as Email",
        ])
            ->when($search != "", function ($query) use ($search) {
                return $query->where("documento", "like", "%{$search}%");
            })
            ->paginate(10)
            ->withQueryString();

        return Inertia::render("Admision/index", [
            "admisions" => $admision,
        ]);
    }

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
            $admisions = admision::create([
                "nombre_completo" => $request->nombre_completo,
                "documento" => $request->documento,
                "fecha_nacimiento" => $request->fecha_nacimiento,
                "genero" => $request->genero,
                "direccion" => $request->direccion,
                "telefono" => $request->telefono,
                "email" => $request->email,
                "estado_civil" => $request->estado_civil,
                "ocupacion" => $request->ocupacion,
                "nivel_educativo" => $request->nivel_educativo,
                "etnia_religion" => $request->etnia_religion,
                "entidad_aseguradora" => $request->entidad_aseguradora,
                "tipo_plan" => $request->tipo_plan,
                "numero_poliza" => $request->numero_poliza,
                "responsable_nombre" => $request->responsable_nombre,
                "responsable_parentesco" => $request->responsable_parentesco,
                "responsable_telefono" => $request->responsable_telefono,
            ]);

            return response()->json([
                "message" => "Paciente registrado exitosamente",
            ]);
        } catch (\Exception $e) {
            \Log::error("Error al registrar el paciente: " . $e->getMessage());
            return response()->json(
                [
                    "message" =>
                        "Error al registrar el paciente: " . $e->getMessage(),
                ],
                500,
            );
        }
    }
}
