import Table from "@/Components/Table";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import React from "react";

const index = ({ admisions }) => {
    console.log(admisions.data);
    return (
        <>
            <AuthenticatedLayout
                header={
                    <h2 className="text-xl font-semibold leading-tight text-gray-800">
                        Admisión
                    </h2>
                }
            >
                <div className="w-full p-6">
                    <Table
                        ruta="admision.registrar"
                        titulo="Registro de Pacientes"
                        columnas={[
                            "n",
                            "Nombre",
                            "Fecha de Nacimiento",
                            "DNI",
                            "Celular",
                            "Email",
                            "Acciones",
                        ]}
                        data={admisions.data.map((admision) => ({
                            col1: admision.id,
                            col2: admision.nombre_completo,
                            col3: admision.fecha_nacimiento,
                            col4: admision.documento,
                            col5: admision.telefono,
                            col6: admision.email,
                        }))}
                    />
                </div>
            </AuthenticatedLayout>
        </>
    );
};

export default index;
