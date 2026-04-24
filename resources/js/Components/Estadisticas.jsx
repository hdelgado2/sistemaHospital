import React from 'react'

const Estadisticas = () => {
  return (
    <>
        <div className="mb-gutter flex flex-col md:flex-row md:items-end justify-between gap-4">
    <div>
      <h1 className="font-h1 text-h1 text-on-surface mb-xs">Hospital Overview</h1>
      <p className="font-body-md text-secondary">Summary of system performance and patient throughput for today.</p>
    </div>
    <div className="flex gap-sm">
      <button className="bg-white border border-outline px-md py-sm rounded-lg flex items-center gap-xs font-label-md text-label-md text-secondary hover:bg-surface-container-low transition-colors">
        <span className="material-symbols-outlined text-[18px]" data-icon="file_download">file_download</span>
        Export Report
      </button>
    </div>
  </div>
  {/* Stats Bento Grid */}
  <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter mb-gutter">
    {/* Card 1: Patients Today */}
    <div className="bg-white border border-slate-200 rounded-xl p-md shadow-[0_2px_4px_rgba(0,0,0,0.05)] transition-transform hover:-translate-y-1">
      <div className="flex items-center justify-between mb-md">
        <div className="p-base bg-blue-50 text-primary rounded-lg">
          <span className="material-symbols-outlined" data-icon="groups">groups</span>
        </div>
        <span className="text-tertiary font-label-md bg-tertiary-fixed-dim/20 px-sm py-xs rounded-full">+12% vs last week</span>
      </div>
      <p className="font-label-md text-secondary uppercase tracking-wider mb-xs">Patients Today</p>
      <h3 className="font-h1 text-h1 text-on-surface">1,248</h3>
      <div className="mt-md h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
        <div className="h-full bg-primary" style={{width: '72%'}} />
      </div>
    </div>
    {/* Card 2: Surgeries */}
    <div className="bg-white border border-slate-200 rounded-xl p-md shadow-[0_2px_4px_rgba(0,0,0,0.05)] transition-transform hover:-translate-y-1">
      <div className="flex items-center justify-between mb-md">
        <div className="p-base bg-emerald-50 text-emerald-700 rounded-lg">
          <span className="material-symbols-outlined" data-icon="medical_services">medical_services</span>
        </div>
        <span className="text-secondary font-label-md bg-secondary-container px-sm py-xs rounded-full">On Schedule</span>
      </div>
      <p className="font-label-md text-secondary uppercase tracking-wider mb-xs">Surgeries Scheduled</p>
      <h3 className="font-h1 text-h1 text-on-surface">42</h3>
      <div className="mt-md flex gap-1">
        <div className="h-1.5 flex-1 bg-emerald-500 rounded-full" />
        <div className="h-1.5 flex-1 bg-emerald-500 rounded-full" />
        <div className="h-1.5 flex-1 bg-emerald-500 rounded-full" />
        <div className="h-1.5 flex-1 bg-slate-100 rounded-full" />
      </div>
    </div>
    {/* Card 3: Available Beds */}
    <div className="bg-white border border-slate-200 rounded-xl p-md shadow-[0_2px_4px_rgba(0,0,0,0.05)] transition-transform hover:-translate-y-1">
      <div className="flex items-center justify-between mb-md">
        <div className="p-base bg-amber-50 text-amber-700 rounded-lg">
          <span className="material-symbols-outlined" data-icon="bed">bed</span>
        </div>
        <span className="text-error font-label-md bg-error-container px-sm py-xs rounded-full">Critical (12%)</span>
      </div>
      <p className="font-label-md text-secondary uppercase tracking-wider mb-xs">Available Beds</p>
      <h3 className="font-h1 text-h1 text-on-surface">18 <span className="text-h3 font-normal text-secondary">/ 150</span></h3>
      <div className="mt-md h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
        <div className="h-full bg-error" style={{width: '88%'}} />
      </div>
    </div>
  </div>
    </>
  )
}

export default Estadisticas
