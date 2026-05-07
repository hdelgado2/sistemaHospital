<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::connection("pgsql")->create("admisions", function (
            Blueprint $table,
        ) {
            $table->id();
            $table->string("nombre_completo");
            $table->string("documento")->unique();
            $table->date("fecha_nacimiento");
            $table->string("genero");
            $table->string("direccion");
            $table->string("telefono");
            $table->string("email")->unique();
            $table->string("estado_civil");
            $table->string("ocupacion");
            $table->string("nivel_educativo");
            $table->string("etnia_religion");
            $table->string("entidad_aseguradora");
            $table->string("tipo_plan");
            $table->string("numero_poliza")->unique();
            $table->string("responsable_nombre");
            $table->string("responsable_parentesco");
            $table->string("responsable_telefono");
            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists("admisions");
    }
};
