<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class admision extends Model
{
    protected $table = "admision";

    protected $fillable = [
        "nombre_completo",
        "documento",
        "fecha_nacimiento",
        "genero",
        "direccion",
        "telefono",
        "email",
        "estado_civil",
        "ocupacion",
        "nivel_educativo",
        "etnia_religion",
        "entidad_aseguradora",
        "tipo_plan",
        "numero_poliza",
        "responsable_nombre",
        "responsable_parentesco",
        "responsable_telefono",
    ];
}
