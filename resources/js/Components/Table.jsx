import React from 'react'


const Table = ({titulo,columnas,data}) => {
  return (
    <>
        <section className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden shadow-[0_2px_4px_rgba(0,0,0,0.05)]">
        <div className="px-lg py-md border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
          <h2 className="font-h2 text-h2 dark:text-white">{titulo}</h2>
          
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50/50 dark:bg-slate-800/50">
                {columnas.map((columna) => (
                    <th key={columna} className="px-lg py-sm font-label-md text-secondary dark:text-slate-400 border-b border-slate-100 dark:border-slate-800">{columna}</th>
                ))}
              </tr>
            </thead> 
            <tbody className="divide-y divide-slate-50 dark:divide-slate-800">
              
               {data.map( (registro)=>(   
              <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors">
                <td key={registro.id} className="px-lg py-md">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-pink-100 dark:bg-pink-900/30 flex items-center justify-center text-pink-700 dark:text-pink-400 font-bold text-xs">SW</div>
                    <span className="font-body-md font-semibold text-on-surface dark:text-slate-200">{registro.col1}</span>
                  </div>
                </td>
                <td className="px-lg py-md font-body-sm text-secondary dark:text-slate-400">{registro.col2}</td>
                <td className="px-lg py-md font-data-mono text-data-mono dark:text-slate-300">{registro.col3}</td>
                <td className="px-lg py-md">
                  <span className="px-sm py-xs bg-emerald-50 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 rounded text-[11px] font-bold uppercase tracking-tight">{registro.col4}</span>
                </td>
                <td className="px-lg py-md font-data-mono text-data-mono dark:text-slate-300">{registro.col5}</td>
                <td className="px-lg py-md font-data-mono text-data-mono dark:text-slate-300">{registro.col6}</td>

                <td className="px-lg py-md text-right">
                  <button className="text-slate-400 dark:text-slate-500 hover:text-primary dark:hover:text-blue-400"><span className="material-symbols-outlined" data-icon="more_vert">more_vert</span></button>
                </td>
              </tr>
               ))}
               
               
                
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