import React from 'react'
import { Link } from '@inertiajs/react';

const Footer = () => {
  return (
    <>
    <footer className="fixed bottom-0 w-full bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 font-manrope text-xs uppercase tracking-wider z-50">
                    <div className="flex flex-col md:flex-row justify-between items-center w-full px-8 py-6 gap-4">
                        <div className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                            © 2026 Clinical Health Systems. Institutional Trust Verified.
                        </div>
                        
                    </div>
                </footer>
    
    </>
  )
}

export default Footer