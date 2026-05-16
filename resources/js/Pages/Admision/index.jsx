import Table from "@/Components/Table";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import React, { useState } from "react";

const index = ({ admisions }) => {
    const [columna, setcolumna] = useState(Object.keys(admisions.data[0]));

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
                        columnas={columna}
                        data={admisions.data.map((admision) => ({
                            col1: admision.n,
                            col2: admision.Nombre,
                            col3: admision["Fecha de Nacimiento"],
                            col4: admision.DNI,
                            col5: admision.Celular,
                            col6: admision.Email,
                        }))}
                    />
                </div>
            </AuthenticatedLayout>
        </>
    );
};

export default index;
