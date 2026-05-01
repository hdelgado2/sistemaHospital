import React from 'react'

const Table = () => {
  return (
    <>
        <section className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden shadow-[0_2px_4px_rgba(0,0,0,0.05)]">
        <div className="px-lg py-md border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
          <h2 className="font-h2 text-h2 dark:text-white">Upcoming Appointments</h2>
          <button className="text-primary dark:text-blue-400 font-label-md hover:underline">View Calendar</button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50/50 dark:bg-slate-800/50">
                <th className="px-lg py-sm font-label-md text-secondary dark:text-slate-400 border-b border-slate-100 dark:border-slate-800">Patient Name</th>
                <th className="px-lg py-sm font-label-md text-secondary dark:text-slate-400 border-b border-slate-100 dark:border-slate-800">Consultation</th>
                <th className="px-lg py-sm font-label-md text-secondary dark:text-slate-400 border-b border-slate-100 dark:border-slate-800">Time</th>
                <th className="px-lg py-sm font-label-md text-secondary dark:text-slate-400 border-b border-slate-100 dark:border-slate-800">Status</th>
                <th className="px-lg py-sm font-label-md text-secondary dark:text-slate-400 border-b border-slate-100 dark:border-slate-800" />
              </tr>
            </thead> 
            <tbody className="divide-y divide-slate-50 dark:divide-slate-800">
              <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors">
                <td className="px-lg py-md">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-700 dark:text-blue-400 font-bold text-xs">RJ</div>
                    <span className="font-body-md font-semibold text-on-surface dark:text-slate-200">Robert J. Henderson</span>
                  </div>
                </td>
                <td className="px-lg py-md font-body-sm text-secondary dark:text-slate-400">Cardiology Follow-up</td>
                <td className="px-lg py-md font-data-mono text-data-mono dark:text-slate-300">09:30 AM</td>
                <td className="px-lg py-md">
                  <span className="px-sm py-xs bg-emerald-50 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 rounded text-[11px] font-bold uppercase tracking-tight">Confirmed</span>
                </td>
                <td className="px-lg py-md text-right">
                  <button className="text-slate-400 dark:text-slate-500 hover:text-primary dark:hover:text-blue-400"><span className="material-symbols-outlined" data-icon="more_vert">more_vert</span></button>
                </td>
              </tr>
              <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors">
                <td className="px-lg py-md">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center text-purple-700 dark:text-purple-400 font-bold text-xs">ML</div>
                    <span className="font-body-md font-semibold text-on-surface dark:text-slate-200">Maria Lopez</span>
                  </div>
                </td>
                <td className="px-lg py-md font-body-sm text-secondary dark:text-slate-400">Pre-Op Evaluation</td>
                <td className="px-lg py-md font-data-mono text-data-mono dark:text-slate-300">10:15 AM</td>
                <td className="px-lg py-md">
                  <span className="px-sm py-xs bg-amber-50 dark:bg-amber-500/10 text-amber-700 dark:text-amber-400 rounded text-[11px] font-bold uppercase tracking-tight">In Progress</span>
                </td>
                <td className="px-lg py-md text-right">
                  <button className="text-slate-400 dark:text-slate-500 hover:text-primary dark:hover:text-blue-400"><span className="material-symbols-outlined" data-icon="more_vert">more_vert</span></button>
                </td>
              </tr>
              <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors">
                <td className="px-lg py-md">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-700 dark:text-slate-400 font-bold text-xs">DK</div>
                    <span className="font-body-md font-semibold text-on-surface dark:text-slate-200">David Kim</span>
                  </div>
                </td>
                <td className="px-lg py-md font-body-sm text-secondary dark:text-slate-400">Post-Op Recovery</td>
                <td className="px-lg py-md font-data-mono text-data-mono dark:text-slate-300">11:00 AM</td>
                <td className="px-lg py-md">
                  <span className="px-sm py-xs bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 rounded text-[11px] font-bold uppercase tracking-tight">Scheduled</span>
                </td>
                <td className="px-lg py-md text-right">
                  <button className="text-slate-400 dark:text-slate-500 hover:text-primary dark:hover:text-blue-400"><span className="material-symbols-outlined" data-icon="more_vert">more_vert</span></button>
                </td>
              </tr>
              <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors">
                <td className="px-lg py-md">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-pink-100 dark:bg-pink-900/30 flex items-center justify-center text-pink-700 dark:text-pink-400 font-bold text-xs">SW</div>
                    <span className="font-body-md font-semibold text-on-surface dark:text-slate-200">Sarah Williams</span>
                  </div>
                </td>
                <td className="px-lg py-md font-body-sm text-secondary dark:text-slate-400">Routine Check-up</td>
                <td className="px-lg py-md font-data-mono text-data-mono dark:text-slate-300">01:45 PM</td>
                <td className="px-lg py-md">
                  <span className="px-sm py-xs bg-emerald-50 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 rounded text-[11px] font-bold uppercase tracking-tight">Confirmed</span>
                </td>
                <td className="px-lg py-md text-right">
                  <button className="text-slate-400 dark:text-slate-500 hover:text-primary dark:hover:text-blue-400"><span className="material-symbols-outlined" data-icon="more_vert">more_vert</span></button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="p-md bg-slate-50/30 dark:bg-slate-800/30 border-t border-slate-100 dark:border-slate-800 text-center">
          <button className="font-label-md text-primary dark:text-blue-400 flex items-center gap-sm mx-auto hover:bg-white dark:hover:bg-slate-800 px-md py-xs rounded transition-colors">
            Show all 24 appointments
            <span className="material-symbols-outlined text-[18px]" data-icon="expand_more">expand_more</span>
          </button>
        </div>
      </section>
    </>
  )
}

export default Table