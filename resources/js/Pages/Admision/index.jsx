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
                <h1 className="text-lg font-medium dark:text-slate-400 text-2xl text-gray-900 mb-4">Módulo de Admisión</h1>
                
            </div>
            
        
    </AuthenticatedLayout>
    
    </>
  )
}

export default index