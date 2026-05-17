import React, { useState } from "react";
import PrimaryButton from "./PrimaryButton";
import { Button } from "@headlessui/react";
import SecondaryButton from "./SecondaryButton";
import Search from "./Icons/Search";
import { router, useForm } from "@inertiajs/react";

const Table = ({ titulo, columnas, datos, ruta, filtro }) => {
  
    const {setData,data,processing,post} = useForm({
        search:"",
    })

    
    const handleSearch = (e) => {

            const formData = new FormData();
            formData.append("search", data.search);
            post(route(filtro), formData, {
                                           forceFormData: true,
                                           
                                        });
    }

    return (
        <>
            <section className="bg-white  dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden shadow-[0_2px_4px_rgba(0,0,0,0.05)]">
                <div className="px-lg py-md border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
                    <h2 className="font-h2 text-h2 dark:text-white ">
                        {titulo}
                    </h2>
                    <div className="flex flex-col sm:flex-row  gap-4 mb-2 ">
                        {/* Tu botón (Quedará a la derecha) */}
                        <PrimaryButton
                            href={route(ruta)}
                            className="bg-green-500 dark:bg-blue-500 w-full sm:w-auto justify-center"
                            showIcon={true}
                        >
                            Registrar
                        </PrimaryButton>

                        {/* Tu buscador (Quedará a la izquierda) */}
                        <div className="w-full sm:w-72">
                            <input
                                onChange={(e) =>
                                    setData("search", e.target.value)
                                }
                                onKeyDown={(e) => {
                                    if (e.key === "Enter") {
                                        post(route(filtro), {
                                            preserveState: true,
                                            replace: false,
                                        });
                                    }
                                }}
                                type="text"
                                value={data.search}
                                placeholder="Buscar..."
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 text-sm dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                            />
                        </div>
                        <Button
                            onClick={() =>
                               handleSearch()
                            }
                            className="cursor-pointer px-4 py-2 dark:bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-gray-400 transition-colors"
                        >
                            <Search
                                width={14}
                                height={14}
                                className="w-5 h-5"
                            />
                        </Button>
                    </div>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-slate-50/50 text-center dark:bg-slate-800/50">
                                {columnas.map((columna) => (
                                    <th
                                        key={columna}
                                        className="px-lg py-sm font-label-md text-secondary dark:text-slate-400 border-b border-slate-100 dark:border-slate-800"
                                    >
                                        {columna}
                                    </th>
                                ))}
                                <th className="py-3 px-4 text-center font-semibold dark:text-slate-400">
                                    Acciones
                                </th>
                            </tr>
                        </thead>
                        <tbody className="divide-y text-center divide-slate-50 dark:divide-slate-800">
                            {datos.map((registro) => (
                                <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors">
                                    <td
                                        key={registro.id}
                                        className="px-lg py-md"
                                    >
                                        <div className="flex items-center gap-3">
                                            <span className="font-body-md font-semibold text-on-surface dark:text-slate-200">
                                                {registro.col1}
                                            </span>
                                        </div>
                                    </td>
                                    <td className="px-lg py-md font-body-sm text-secondary dark:text-slate-400">
                                        {registro.col2}
                                    </td>
                                    <td className="px-lg py-md font-data-mono text-data-mono dark:text-slate-300">
                                        {registro.col3}
                                    </td>
                                    <td className="px-lg py-md">
                                        <span className="px-sm py-xs bg-emerald-50 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 rounded text-[11px] font-bold uppercase tracking-tight">
                                            {registro.col4}
                                        </span>
                                    </td>
                                    <td className="px-lg py-md font-data-mono text-data-mono dark:text-slate-300">
                                        {registro.col5}
                                    </td>
                                    <td className="px-lg py-md font-data-mono text-data-mono dark:text-slate-300">
                                        {registro.col6}
                                    </td>

                                    <td className="px-lg py-md text-right">
                                        <button className="text-slate-400 dark:text-slate-500 hover:text-primary dark:hover:text-blue-400">
                                            <span
                                                className="material-symbols-outlined"
                                                data-icon="more_vert"
                                            >
                                                more_vert
                                            </span>
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="p-md bg-slate-50/30 dark:bg-slate-800/30 border-t border-slate-100 dark:border-slate-800 text-center">
                    <button className="font-label-md text-primary dark:text-blue-400 flex items-center gap-sm mx-auto hover:bg-white dark:hover:bg-slate-800 px-md py-xs rounded transition-colors">
                        Show all 24 appointments
                        <span
                            className="material-symbols-outlined text-[18px]"
                            data-icon="expand_more"
                        >
                            expand_more
                        </span>
                    </button>
                </div>
            </section>
        </>
    );
};

export default Table;
