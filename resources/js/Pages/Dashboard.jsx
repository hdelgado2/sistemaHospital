import Estadisticas from '@/Components/Estadisticas';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import Table from '@/Components/Table';
import { children } from 'react';

export default function Dashboard() {
    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Dashboardmn
                </h2>
            }
        >
      <div>
     <Estadisticas />
  {/* Dashboard Body: Asymmetric Layout */}
  <div className="grid grid-cols-1  gap-gutter">
    {/* Left Column: Upcoming Appointments (8 cols) */}
    <div className=" space-y-gutter">
               {children} 
    </div>
    
  </div>
</div>



        </AuthenticatedLayout>
    );
}
