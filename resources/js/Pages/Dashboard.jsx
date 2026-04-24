import Estadisticas from '@/Components/Estadisticas';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function Dashboard() {
    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Dashboard
                </h2>
            }
        >
      <div>
     <Estadisticas />
  {/* Dashboard Body: Asymmetric Layout */}
  <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
    {/* Left Column: Upcoming Appointments (8 cols) */}
    <div className="lg:col-span-8 space-y-gutter">
      <section className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-[0_2px_4px_rgba(0,0,0,0.05)]">
        <div className="px-lg py-md border-b border-slate-100 flex items-center justify-between">
          <h2 className="font-h2 text-h2">Upcoming Appointments</h2>
          <button className="text-primary font-label-md hover:underline">View Calendar</button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50/50">
                <th className="px-lg py-sm font-label-md text-secondary border-b border-slate-100">Patient Name</th>
                <th className="px-lg py-sm font-label-md text-secondary border-b border-slate-100">Consultation</th>
                <th className="px-lg py-sm font-label-md text-secondary border-b border-slate-100">Time</th>
                <th className="px-lg py-sm font-label-md text-secondary border-b border-slate-100">Status</th>
                <th className="px-lg py-sm font-label-md text-secondary border-b border-slate-100" />
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              <tr className="hover:bg-slate-50/50 transition-colors">
                <td className="px-lg py-md">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-bold text-xs">RJ</div>
                    <span className="font-body-md font-semibold text-on-surface">Robert J. Henderson</span>
                  </div>
                </td>
                <td className="px-lg py-md font-body-sm text-secondary">Cardiology Follow-up</td>
                <td className="px-lg py-md font-data-mono text-data-mono">09:30 AM</td>
                <td className="px-lg py-md">
                  <span className="px-sm py-xs bg-emerald-50 text-emerald-700 rounded text-[11px] font-bold uppercase tracking-tight">Confirmed</span>
                </td>
                <td className="px-lg py-md text-right">
                  <button className="text-slate-400 hover:text-primary"><span className="material-symbols-outlined" data-icon="more_vert">more_vert</span></button>
                </td>
              </tr>
              <tr className="hover:bg-slate-50/50 transition-colors">
                <td className="px-lg py-md">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center text-purple-700 font-bold text-xs">ML</div>
                    <span className="font-body-md font-semibold text-on-surface">Maria Lopez</span>
                  </div>
                </td>
                <td className="px-lg py-md font-body-sm text-secondary">Pre-Op Evaluation</td>
                <td className="px-lg py-md font-data-mono text-data-mono">10:15 AM</td>
                <td className="px-lg py-md">
                  <span className="px-sm py-xs bg-amber-50 text-amber-700 rounded text-[11px] font-bold uppercase tracking-tight">In Progress</span>
                </td>
                <td className="px-lg py-md text-right">
                  <button className="text-slate-400 hover:text-primary"><span className="material-symbols-outlined" data-icon="more_vert">more_vert</span></button>
                </td>
              </tr>
              <tr className="hover:bg-slate-50/50 transition-colors">
                <td className="px-lg py-md">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-700 font-bold text-xs">DK</div>
                    <span className="font-body-md font-semibold text-on-surface">David Kim</span>
                  </div>
                </td>
                <td className="px-lg py-md font-body-sm text-secondary">Post-Op Recovery</td>
                <td className="px-lg py-md font-data-mono text-data-mono">11:00 AM</td>
                <td className="px-lg py-md">
                  <span className="px-sm py-xs bg-slate-100 text-slate-600 rounded text-[11px] font-bold uppercase tracking-tight">Scheduled</span>
                </td>
                <td className="px-lg py-md text-right">
                  <button className="text-slate-400 hover:text-primary"><span className="material-symbols-outlined" data-icon="more_vert">more_vert</span></button>
                </td>
              </tr>
              <tr className="hover:bg-slate-50/50 transition-colors">
                <td className="px-lg py-md">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-pink-100 flex items-center justify-center text-pink-700 font-bold text-xs">SW</div>
                    <span className="font-body-md font-semibold text-on-surface">Sarah Williams</span>
                  </div>
                </td>
                <td className="px-lg py-md font-body-sm text-secondary">Routine Check-up</td>
                <td className="px-lg py-md font-data-mono text-data-mono">01:45 PM</td>
                <td className="px-lg py-md">
                  <span className="px-sm py-xs bg-emerald-50 text-emerald-700 rounded text-[11px] font-bold uppercase tracking-tight">Confirmed</span>
                </td>
                <td className="px-lg py-md text-right">
                  <button className="text-slate-400 hover:text-primary"><span className="material-symbols-outlined" data-icon="more_vert">more_vert</span></button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="p-md bg-slate-50/30 border-t border-slate-100 text-center">
          <button className="font-label-md text-primary flex items-center gap-sm mx-auto hover:bg-white px-md py-xs rounded transition-colors">
            Show all 24 appointments
            <span className="material-symbols-outlined text-[18px]" data-icon="expand_more">expand_more</span>
          </button>
        </div>
      </section>
    </div>
    {/* Right Column: Patient Admissions Chart & Quick Actions (4 cols) */}
    <div className="lg:col-span-4 space-y-gutter">
      {/* Patient Admission Trend (Simplified UI Representation) */}
      <section className="bg-white border border-slate-200 rounded-xl p-md shadow-[0_2px_4px_rgba(0,0,0,0.05)]">
        <h3 className="font-h3 text-h3 mb-md">Admission Trend</h3>
        <div className="h-40 flex items-end gap-2 mb-md">
          <div className="bg-primary/10 w-full rounded-t" style={{height: '40%'}} />
          <div className="bg-primary/10 w-full rounded-t" style={{height: '60%'}} />
          <div className="bg-primary/10 w-full rounded-t" style={{height: '45%'}} />
          <div className="bg-primary/10 w-full rounded-t" style={{height: '80%'}} />
          <div className="bg-primary/10 w-full rounded-t" style={{height: '55%'}} />
          <div className="bg-primary/10 w-full rounded-t" style={{height: '70%'}} />
          <div className="bg-primary w-full rounded-t" style={{height: '95%'}} />
        </div>
        <div className="flex justify-between text-[10px] text-secondary font-label-md">
          <span>MON</span><span>TUE</span><span>WED</span><span>THU</span><span>FRI</span><span>SAT</span><span>SUN</span>
        </div>
      </section>
      {/* Quick Tools / Health Alerts */}
      <section className="bg-primary-container text-white rounded-xl p-lg relative overflow-hidden">
        <div className="relative z-10">
          <div className="flex items-center gap-2 mb-md">
            <span className="material-symbols-outlined text-tertiary-fixed" data-icon="warning" style={{fontVariationSettings: '"FILL" 1'}}>warning</span>
            <h3 className="font-h3 text-h3 text-inverse-on-surface">Unit Alerts</h3>
          </div>
          <p className="font-body-sm text-blue-100 mb-lg">3 patients in ICU require immediate lab review.</p>
          <button className="w-full bg-white text-primary font-label-md py-sm rounded-lg hover:bg-blue-50 transition-colors">Review Critical Files</button>
        </div>
        {/* Decorative background element */}
        <div className="absolute -right-10 -bottom-10 w-32 h-32 bg-white/5 rounded-full blur-2xl" />
      </section>
      {/* Facility Map / Search */}
      <div className="bg-white border border-slate-200 rounded-xl overflow-hidden h-48 relative group">
        <img alt="Hospital Map" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" data-alt="high contrast minimalist architectural floor plan of a modern hospital wing with blue highlight areas" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBucbQlve4AnA63Fwv6JNxi4CcwIPU0jC_mZ-zQ1YmLCWdD_Mof4hSzpxutSc6GvmEBse_39GD0l2dUX1yA8LBh3vGcp8E2Ixa3adIrh-TeBsRuUSlBSELfv9U-3vaHK3_XXCLrXOMJu_m-K7_01_6HZzn4lRTsBAefS45BnIh-Sj7KH9PKpz73sqQykqcc4hmRRsNdmZRToXdrdaTtrC886P1PE4Jm-bOsfmVY-A7_diVnQ3dbAUZ0auIZNnWD_2XJgJqX7xOKr-41" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-md">
          <h4 className="text-white font-bold text-sm">Facility Map - Wing B</h4>
          <p className="text-white/80 text-xs">Locate departments and rooms</p>
        </div>
      </div>
    </div>
  </div>
</div>



        </AuthenticatedLayout>
    );
}
