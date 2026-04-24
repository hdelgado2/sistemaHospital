import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout'
import React from 'react'

const Aside = ({user,children}) => {
  return (


    <>
    
   
    <aside className="fixed left-0 top-0 hidden lg:flex flex-col bg-slate-50 dark:bg-slate-950 h-screen w-64 border-r border-slate-200 dark:border-slate-800 z-40 transition-all duration-150 ease-in-out">
  <div className="px-6 py-8">
    <div className="flex items-center gap-3 mb-8">
      <div className="w-10 h-10 rounded-full overflow-hidden bg-primary-fixed border border-outline-variant">
        <img alt="Dr. Smith" className="w-full h-full object-cover" data-alt="professional portrait of a male doctor in a white clinical coat against a neutral background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCvXmweI57d8JMcEGDMRDiX7IrZp4Zx4V2A1kakK9mGHz1ri5MUJMXC3CGKiQvXWfgtAAFoj5Z5wJRIeo51ca7Rm9uGE8iDSgbOK5GqFcTzfKoSGbisEX7V0SpJk2XeTn2VFP3OFMa20crgbw4vwZYJozb2vGLEPojylL_XPc8GTwHQPcpTlCdndrPlxR506rwG-v43aYdf7-jIV8X1HQ_xmyq5b-iAb63NlV9zGHAgnr7ctPE3EKLKhDppkhXPxscP1Dei-9DciVuD" />
      </div>
      <div>
        <h2 className="font-manrope font-bold text-blue-900 dark:text-blue-50 text-sm">{user.name}</h2>
        <p className="text-slate-500 font-manrope text-[11px]">Lead Clinician</p>
      </div>
    </div>
    <nav className="space-y-1">
      <a className="flex items-center gap-3 px-4 py-3 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 font-bold border-r-4 border-blue-700 transition-all duration-150 ease-in-out" href="#">
        <span className="material-symbols-outlined" data-icon="dashboard">dashboard</span>
        <span className="font-manrope text-sm">Dashboard</span>
      </a>
      <a className="flex items-center gap-3 px-4 py-3 text-slate-600 dark:text-slate-400 hover:text-blue-600 hover:bg-slate-100 dark:hover:bg-slate-900 transition-all duration-150 ease-in-out" href="#">
        <span className="material-symbols-outlined" data-icon="group">group</span>
        <span className="font-manrope text-sm">Patients</span>
      </a>
      <a className="flex items-center gap-3 px-4 py-3 text-slate-600 dark:text-slate-400 hover:text-blue-600 hover:bg-slate-100 dark:hover:bg-slate-900 transition-all duration-150 ease-in-out" href="#">
        <span className="material-symbols-outlined" data-icon="calendar_month">calendar_month</span>
        <span className="font-manrope text-sm">Calendar</span>
      </a>
      <a className="flex items-center gap-3 px-4 py-3 text-slate-600 dark:text-slate-400 hover:text-blue-600 hover:bg-slate-100 dark:hover:bg-slate-900 transition-all duration-150 ease-in-out" href="#">
        <span className="material-symbols-outlined" data-icon="history_edu">history_edu</span>
        <span className="font-manrope text-sm">Medical Records</span>
      </a>
    </nav>
  </div>
  <div className="mt-auto px-6 py-6 border-t border-slate-200 dark:border-slate-800">
    <p className="text-xs text-slate-400 font-manrope">Hospital Unit A</p>
  </div>
    </aside>
    <div className="lg:ml-64 flex flex-col">
   
    <header className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 sticky top-0 z-30 flex justify-between items-center w-full px-6 py-4 max-w-full">
        <div className="flex items-center gap-4">
        <span className="text-xl font-bold tracking-tight text-blue-900 dark:text-blue-100 font-manrope">Clinical Portal</span>
        </div>
        <div className="flex items-center gap-4">
        <button className="p-2 rounded-full hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors duration-200 text-slate-500">
            <span className="material-symbols-outlined" data-icon="search">search</span>
        </button>
        <div className="w-8 h-8 rounded-full overflow-hidden border border-slate-200">
            <img alt="Staff Profile" className="w-full h-full object-cover" data-alt="close up headshot of a healthcare professional in clinical setting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAWYBkpjzoFkfgmdlNL467a9ry2Ykj2UfA5YHd6dJXNKEmpjJ-f34o2nCy1iyq0AtqaQ15DF8ryWB9zq8glfQ68j3oF6BeyD47l0_XKzlHzvVwZ3IYlb6ZxUWavkRti_GSWMmj7D3VT80Qq5ApSqp9Db-_H3MOo00-uLwhvsADzMeZRRSzqXWYnmoHxioBp-Bqu1FpqwWT41SgAtHDj2QqT4ezzhCNcEiZdzaFIjVVvu4JA6cP-gpMLETSjLtPU1oxRMV3ZeepEgIos" />
        </div>
        </div>
    </header>
      
    </div>
        
   


    </>

  )
}

export default Aside
