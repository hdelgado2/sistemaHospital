import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Link, useForm } from "@inertiajs/react";
import React from "react";

const Registrar = () => {
    const { data, setData, post, errors, clearErrors, processing } = useForm({
        nombre_completo: "",
        documento: "",
        fecha_nacimiento: "",
        genero: "",
        direccion: "",
        telefono: "",
        email: "",
        estado_civil: "",
        ocupacion: "",
        nivel_educativo: "",
        etnia_religion: "",
        entidad_aseguradora: "",
        tipo_plan: "",
        numero_poliza: "",
        responsable_nombre: "",
        responsable_parentesco: "",
        responsable_telefono: "",
    });

    const submit = (e) => {
        e.preventDefault();
        clearErrors();
        post(route("admision.registrar.post"), {
            preserveScroll: true,
            onBefore: () => {
                // Aquí puedes agregar lógica antes de enviar el formulario, como mostrar un spinner o deshabilitar el botón de envío
                //
            },
        });
    };

    return (
        <>
            <AuthenticatedLayout>
                <div className="max-w-4xl mx-auto bg-white dark:bg-slate-900 shadow-md rounded-lg overflow-hidden border border-transparent dark:border-slate-800 mt-8 mb-8">
                    {/* Encabezado del Formulario */}
                    <div className="bg-blue-600 dark:bg-blue-700 p-4">
                        <h2 className="text-white text-xl font-bold flex items-center">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6 mr-2"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                                />
                            </svg>
                            Registro de Nuevo Paciente
                        </h2>
                    </div>
                    <form className="p-6 space-y-8" onSubmit={submit}>
                        {/* 1. DATOS IDENTIFICATIVOS */}
                        <section>
                            <h3 className="text-lg font-semibold text-gray-700 dark:text-slate-200 border-b dark:border-slate-700 pb-2 mb-4">
                                1. Datos Identificativos
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                                <div className="md:col-span-2">
                                    <label className="block text-sm font-medium text-gray-600 dark:text-slate-400">
                                        Nombre Completo
                                    </label>
                                    <input
                                        type="text"
                                        value={data.nombre_completo}
                                        onChange={(e) =>
                                            setData(
                                                "nombre_completo",
                                                e.target.value,
                                            )
                                        }
                                        className={`mt-1 block w-full rounded-md shadow-sm p-2 border transition-colors ${
                                            errors.nombre_completo
                                                ? "border-red-500 focus:ring-red-500 focus:border-red-500"
                                                : "border-gray-300 dark:border-slate-700 focus:ring-blue-500 focus:border-blue-500"
                                        } dark:bg-slate-800 dark:text-white`}
                                        placeholder="Ej. Juan Pérez García"
                                    />
                                    {errors.nombre_completo && (
                                        <p className="mt-1 text-sm text-red-600 dark:text-red-400">
                                            {errors.nombre_completo}
                                        </p>
                                    )}
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-600 dark:text-slate-400">
                                        Documento (DNI/Cédula)
                                    </label>
                                    <input
                                        type="text"
                                        value={data.documento}
                                        onChange={(e) =>
                                            setData("documento", e.target.value)
                                        }
                                        className={`mt-1 block w-full rounded-md shadow-sm p-2 border transition-colors ${
                                            errors.documento
                                                ? "border-red-500 focus:ring-red-500 focus:border-red-500"
                                                : "border-gray-300 dark:border-slate-700 focus:ring-blue-500 focus:border-blue-500"
                                        } dark:bg-slate-800 dark:text-white`}
                                    />
                                    {errors.documento && (
                                        <p className="mt-1 text-sm text-red-600 dark:text-red-400">
                                            {errors.documento}
                                        </p>
                                    )}
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-600 dark:text-slate-400">
                                        Fecha de Nacimiento
                                    </label>
                                    <input
                                        type="date"
                                        value={data.fecha_nacimiento}
                                        onChange={(e) =>
                                            setData(
                                                "fecha_nacimiento",
                                                e.target.value,
                                            )
                                        }
                                        className={`mt-1 block w-full rounded-md shadow-sm p-2 border transition-colors ${
                                            errors.fecha_nacimiento
                                                ? "border-red-500 focus:ring-red-500 focus:border-red-500"
                                                : "border-gray-300 dark:border-slate-700 focus:ring-blue-500 focus:border-blue-500"
                                        } dark:bg-slate-800 dark:text-white`}
                                    />
                                    {errors.fecha_nacimiento && (
                                        <p className="mt-1 text-sm text-red-600 dark:text-red-400">
                                            {errors.fecha_nacimiento}
                                        </p>
                                    )}
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-600 dark:text-slate-400">
                                        Sexo/Género
                                    </label>
                                    <select
                                        value={data.genero}
                                        onChange={(e) =>
                                            setData("genero", e.target.value)
                                        }
                                        className={`mt-1 block w-full rounded-md shadow-sm p-2 border transition-colors ${
                                            errors.genero
                                                ? "border-red-500 focus:ring-red-500 focus:border-red-500"
                                                : "border-gray-300 dark:border-slate-700 focus:ring-blue-500 focus:border-blue-500"
                                        } dark:bg-slate-800 dark:text-white`}
                                    >
                                        <option value="">Seleccione</option>
                                        <option value="Masculino">
                                            Masculino
                                        </option>
                                        <option value="Femenino">
                                            Femenino
                                        </option>
                                        <option value="Otro">Otro</option>
                                    </select>
                                    {errors.genero && (
                                        <p className="mt-1 text-sm text-red-600 dark:text-red-400">
                                            {errors.genero}
                                        </p>
                                    )}
                                </div>
                            </div>
                        </section>
                        {/* 2. CONTACTO Y UBICACIÓN */}
                        <section>
                            <h3 className="text-lg font-semibold text-gray-700 dark:text-slate-200 border-b dark:border-slate-700 pb-2 mb-4">
                                2. Datos de Contacto
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                <div className="md:col-span-2">
                                    <label className="block text-sm font-medium text-gray-600 dark:text-slate-400">
                                        Dirección de Residencia
                                    </label>
                                    <input
                                        type="text"
                                        value={data.direccion}
                                        onChange={(e) =>
                                            setData("direccion", e.target.value)
                                        }
                                        className={`mt-1 block w-full rounded-md shadow-sm p-2 border transition-colors ${
                                            errors.direccion
                                                ? "border-red-500 focus:ring-red-500 focus:border-red-500"
                                                : "border-gray-300 dark:border-slate-700 focus:ring-blue-500 focus:border-blue-500"
                                        } dark:bg-slate-800 dark:text-white`}
                                    />
                                    {errors.direccion && (
                                        <p className="mt-1 text-sm text-red-600 dark:text-red-400">
                                            {errors.direccion}
                                        </p>
                                    )}
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-600 dark:text-slate-400">
                                        Teléfono Móvil
                                    </label>
                                    <input
                                        type="tel"
                                        value={data.telefono}
                                        onChange={(e) =>
                                            setData("telefono", e.target.value)
                                        }
                                        className={`mt-1 block w-full rounded-md shadow-sm p-2 border transition-colors ${
                                            errors.telefono
                                                ? "border-red-500 focus:ring-red-500 focus:border-red-500"
                                                : "border-gray-300 dark:border-slate-700 focus:ring-blue-500 focus:border-blue-500"
                                        } dark:bg-slate-800 dark:text-white`}
                                    />
                                    {errors.telefono && (
                                        <p className="mt-1 text-sm text-red-600 dark:text-red-400">
                                            {errors.telefono}
                                        </p>
                                    )}
                                </div>
                                <div className="md:col-span-3">
                                    <label className="block text-sm font-medium text-gray-600 dark:text-slate-400">
                                        Correo Electrónico
                                    </label>
                                    <input
                                        type="email"
                                        value={data.email}
                                        onChange={(e) =>
                                            setData("email", e.target.value)
                                        }
                                        className={`mt-1 block w-full rounded-md shadow-sm p-2 border transition-colors ${
                                            errors.email
                                                ? "border-red-500 focus:ring-red-500 focus:border-red-500"
                                                : "border-gray-300 dark:border-slate-700 focus:ring-blue-500 focus:border-blue-500"
                                        } dark:bg-slate-800 dark:text-white`}
                                        placeholder="paciente@ejemplo.com"
                                    />
                                    {errors.email && (
                                        <p className="mt-1 text-sm text-red-600 dark:text-red-400">
                                            {errors.email}
                                        </p>
                                    )}
                                </div>
                            </div>
                        </section>
                        {/* 3. SOCIO-DEMOGRÁFICA */}
                        <section>
                            <h3 className="text-lg font-semibold text-gray-700 dark:text-slate-200 border-b dark:border-slate-700 pb-2 mb-4">
                                3. Información Socio-demográfica
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-600 dark:text-slate-400">
                                        Estado Civil
                                    </label>
                                    <select
                                        value={data.estado_civil}
                                        onChange={(e) =>
                                            setData(
                                                "estado_civil",
                                                e.target.value,
                                            )
                                        }
                                        className={`mt-1 block w-full rounded-md shadow-sm p-2 border transition-colors ${
                                            errors.estado_civil
                                                ? "border-red-500 focus:ring-red-500 focus:border-red-500"
                                                : "border-gray-300 dark:border-slate-700 focus:ring-blue-500 focus:border-blue-500"
                                        } dark:bg-slate-800 dark:text-white`}
                                    >
                                        <option value="">Seleccione</option>
                                        <option value="Soltero/a">
                                            Soltero/a
                                        </option>
                                        <option value="Casado/a">
                                            Casado/a
                                        </option>
                                        <option value="Divorciado/a">
                                            Divorciado/a
                                        </option>
                                        <option value="Viudo/a">Viudo/a</option>
                                    </select>

                                    {errors.estado_civil && (
                                        <p className="mt-1 text-sm text-red-600 dark:text-red-400">
                                            {errors.estado_civil}
                                        </p>
                                    )}
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-600 dark:text-slate-400">
                                        Ocupación
                                    </label>
                                    <input
                                        type="text"
                                        value={data.ocupacion}
                                        onChange={(e) =>
                                            setData("ocupacion", e.target.value)
                                        }
                                        className={`mt-1 block w-full rounded-md shadow-sm p-2 border transition-colors ${
                                            errors.ocupacion
                                                ? "border-red-500 focus:ring-red-500 focus:border-red-500"
                                                : "border-gray-300 dark:border-slate-700 focus:ring-blue-500 focus:border-blue-500"
                                        } dark:bg-slate-800 dark:text-white`}
                                    />

                                    {errors.ocupacion && (
                                        <p className="mt-1 text-sm text-red-600 dark:text-red-400">
                                            {errors.ocupacion}
                                        </p>
                                    )}
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-600 dark:text-slate-400">
                                        Nivel Educativo
                                    </label>
                                    <select
                                        value={data.nivel_educativo}
                                        onChange={(e) =>
                                            setData(
                                                "nivel_educativo",
                                                e.target.value,
                                            )
                                        }
                                        className={`mt-1 block w-full rounded-md shadow-sm p-2 border transition-colors ${
                                            errors.nivel_educativo
                                                ? "border-red-500 focus:ring-red-500 focus:border-red-500"
                                                : "border-gray-300 dark:border-slate-700 focus:ring-blue-500 focus:border-blue-500"
                                        } dark:bg-slate-800 dark:text-white`}
                                    >
                                        <option value="">Seleccione</option>
                                        <option value="Primaria">
                                            Primaria
                                        </option>
                                        <option value="Secundaria">
                                            Secundaria
                                        </option>
                                        <option value="Universitario">
                                            Universitario
                                        </option>
                                        <option value="Postgrado">
                                            Postgrado
                                        </option>
                                    </select>
                                    {errors.nivel_educativo && (
                                        <p className="mt-1 text-sm text-red-600 dark:text-red-400">
                                            {errors.nivel_educativo}
                                        </p>
                                    )}
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-600 dark:text-slate-400">
                                        Etnia / Religión
                                    </label>
                                    <input
                                        type="text"
                                        value={data.etnia_religion}
                                        onChange={(e) =>
                                            setData(
                                                "etnia_religion",
                                                e.target.value,
                                            )
                                        }
                                        className={`mt-1 block w-full rounded-md shadow-sm p-2 border transition-colors ${
                                            errors.nivel_educativo
                                                ? "border-red-500 focus:ring-red-500 focus:border-red-500"
                                                : "border-gray-300 dark:border-slate-700 focus:ring-blue-500 focus:border-blue-500"
                                        } dark:bg-slate-800 dark:text-white`}
                                    />

                                    {errors.etnia_religion && (
                                        <p className="mt-1 text-sm text-red-600 dark:text-red-400">
                                            {errors.nivel_educativo}
                                        </p>
                                    )}
                                </div>
                            </div>
                        </section>
                        {/* 4. ASEGURAMIENTO */}
                        <section className="bg-blue-50 dark:bg-slate-800/50 p-4 rounded-lg">
                            <h3 className="text-lg font-semibold text-blue-800 dark:text-blue-400 border-b border-blue-200 dark:border-slate-700 pb-2 mb-4">
                                4. Aseguramiento y Finanzas
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-600 dark:text-slate-400">
                                        Entidad (Aseguradora/EPS)
                                    </label>
                                    <input
                                        type="text"
                                        value={data.entidad_aseguradora}
                                        onChange={(e) =>
                                            setData(
                                                "entidad_aseguradora",
                                                e.target.value,
                                            )
                                        }
                                        className={`mt-1 block w-full rounded-md shadow-sm p-2 border transition-colors ${
                                            errors.entidad_aseguradora
                                                ? "border-red-500 focus:ring-red-500 focus:border-red-500"
                                                : "border-gray-300 dark:border-slate-700 focus:ring-blue-500 focus:border-blue-500"
                                        } dark:bg-slate-800 dark:text-white`}
                                    />

                                    {errors.entidad_aseguradora && (
                                        <p className="mt-1 text-sm text-red-600 dark:text-red-400">
                                            {errors.entidad_aseguradora}
                                        </p>
                                    )}
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-600 dark:text-slate-400">
                                        Tipo de Plan
                                    </label>
                                    <select
                                        value={data.tipo_plan}
                                        onChange={(e) =>
                                            setData("tipo_plan", e.target.value)
                                        }
                                        className={`mt-1 block w-full rounded-md shadow-sm p-2 border transition-colors ${
                                            errors.tipo_plan
                                                ? "border-red-500 focus:ring-red-500 focus:border-red-500"
                                                : "border-gray-300 dark:border-slate-700 focus:ring-blue-500 focus:border-blue-500"
                                        } dark:bg-slate-800 dark:text-white`}
                                    >
                                        <option value="">Seleccione</option>
                                        <option value="Contributivo">
                                            Contributivo
                                        </option>
                                        <option value="Subsidiado">
                                            Subsidiado
                                        </option>
                                        <option value="Particular">
                                            Particular
                                        </option>
                                    </select>

                                    {errors.tipo_plan && (
                                        <p className="mt-1 text-sm text-red-600 dark:text-red-400">
                                            {errors.tipo_plan}
                                        </p>
                                    )}
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-600 dark:text-slate-400">
                                        Nº de Póliza / Carné
                                    </label>
                                    <input
                                        type="text"
                                        value={data.numero_poliza}
                                        onChange={(e) =>
                                            setData(
                                                "numero_poliza",
                                                e.target.value,
                                            )
                                        }
                                        className={`mt-1 block w-full rounded-md shadow-sm p-2 border transition-colors ${
                                            errors.nivel_educativo
                                                ? "border-red-500 focus:ring-red-500 focus:border-red-500"
                                                : "border-gray-300 dark:border-slate-700 focus:ring-blue-500 focus:border-blue-500"
                                        } dark:bg-slate-800 dark:text-white`}
                                    />

                                    {errors.numero_poliza && (
                                        <p className="mt-1 text-sm text-red-600 dark:text-red-400">
                                            {errors.numero_poliza}
                                        </p>
                                    )}
                                </div>
                            </div>
                        </section>
                        {/* 5. CONTACTO DE EMERGENCIA */}
                        <section>
                            <h3 className="text-lg font-semibold text-red-700 dark:text-red-400 border-b dark:border-slate-700 pb-2 mb-4">
                                5. Contacto de Emergencia
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-600 dark:text-slate-400">
                                        Nombre del Responsable
                                    </label>
                                    <input
                                        type="text"
                                        value={data.responsable_nombre}
                                        onChange={(e) =>
                                            setData(
                                                "responsable_nombre",
                                                e.target.value,
                                            )
                                        }
                                        className={`mt-1 block w-full rounded-md shadow-sm p-2 border transition-colors ${
                                            errors.responsable_nombre
                                                ? "border-red-500 focus:ring-red-500 focus:border-red-500"
                                                : "border-gray-300 dark:border-slate-700 focus:ring-blue-500 focus:border-blue-500"
                                        } dark:bg-slate-800 dark:text-white`}
                                    />

                                    {errors.responsable_nombre && (
                                        <p className="mt-1 text-sm text-red-600 dark:text-red-400">
                                            {errors.responsable_nombre}
                                        </p>
                                    )}
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-600 dark:text-slate-400">
                                        Parentesco
                                    </label>
                                    <input
                                        type="text"
                                        value={data.responsable_parentesco}
                                        onChange={(e) =>
                                            setData(
                                                "responsable_parentesco",
                                                e.target.value,
                                            )
                                        }
                                        className={`mt-1 block w-full rounded-md shadow-sm p-2 border transition-colors ${
                                            errors.nivel_educativo
                                                ? "border-red-500 focus:ring-red-500 focus:border-red-500"
                                                : "border-gray-300 dark:border-slate-700 focus:ring-blue-500 focus:border-blue-500"
                                        } dark:bg-slate-800 dark:text-white`}
                                        placeholder="Ej. Padre, Esposa..."
                                    />

                                    {errors.responsable_parentesco && (
                                        <p className="mt-1 text-sm text-red-600 dark:text-red-400">
                                            {errors.responsable_parentesco}
                                        </p>
                                    )}
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-600 dark:text-slate-400">
                                        Teléfono Urgencias
                                    </label>
                                    <input
                                        type="tel"
                                        value={data.responsable_telefono}
                                        onChange={(e) =>
                                            setData(
                                                "responsable_telefono",
                                                e.target.value,
                                            )
                                        }
                                        className={`mt-1 block w-full rounded-md shadow-sm p-2 border transition-colors ${
                                            errors.nivel_educativo
                                                ? "border-red-500 focus:ring-red-500 focus:border-red-500"
                                                : "border-gray-300 dark:border-slate-700 focus:ring-blue-500 focus:border-blue-500"
                                        } dark:bg-slate-800 dark:text-white`}
                                    />
                                    {errors.responsable_telefono && (
                                        <p className="mt-1 text-sm text-red-600 dark:text-red-400">
                                            {errors.responsable_telefono}
                                        </p>
                                    )}
                                </div>
                            </div>
                        </section>
                        {/* BOTONES DE ACCIÓN */}
                        <div className="flex justify-end space-x-4 pt-6 border-t dark:border-slate-700">
                            <Link
                                href={route("admision")}
                                className="px-6 py-2 bg-gray-200 dark:bg-slate-700 text-gray-700 dark:text-slate-300 rounded-md hover:bg-gray-300 dark:hover:bg-slate-600 font-medium transition"
                            >
                                Volver
                            </Link>
                            {(processing && (
                                <button
                                    type="button"
                                    className="bg-indigo-500"
                                    disabled
                                >
                                    <svg
                                        className="mr-3 size-5 mi-spinner"
                                        viewBox="0 0 24 24"
                                    ></svg>
                                    Processing…
                                </button>
                            )) || (
                                <button
                                    type="submit"
                                    className="px-6 py-2 bg-blue-600 dark:bg-blue-600 text-white rounded-md hover:bg-blue-700 dark:hover:bg-blue-500 font-medium shadow-lg transition"
                                >
                                    Guardar Paciente
                                </button>
                            )}
                        </div>
                    </form>
                </div>
            </AuthenticatedLayout>
        </>
    );
};

export default Registrar;
