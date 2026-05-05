import Table from '@/Components/Table'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout'
import React from 'react'

const index = () => {
  return (
    <>
    <AuthenticatedLayout
        header={
            <h2 className="text-xl font-semibold leading-tight text-gray-800">
                Admisión
            </h2>
        }         
    >
            <div className='w-full p-6'>
                
                <Table
                    ruta="admision.registrar"
                    titulo="Registro de Pacientes"
                    columnas={[
                        "Nombre",
                        "Apellido",
                        "Fecha de Nacimiento",
                        "DNI",
                        "Celular",
                        "Email",  
                        "Acciones",
                    ]}
                    data={[
                        {
                            col1: "Juan",
                            col2: "Perez",
                            col3: "01/01/2000",
                            col4: "12345678",
                            col5: "123456789",
                            col6: "hendrixdelgado725@gmail.com",
                        },
                    ]}
                    
                                       
                    
                />
            </div>
            
        
    </AuthenticatedLayout>
    
    </>
  )
}

export default index