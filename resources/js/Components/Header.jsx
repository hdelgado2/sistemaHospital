import React from 'react'

const Header = () => {
  return (
    <>
     <header className="fixed top-0 w-full z-50 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 font-manrope antialiased tracking-tight">
  <div className="flex justify-between items-center w-full px-6 py-3 max-w-full">
    <div className="flex items-center gap-2">
      <span className="material-symbols-outlined text-blue-900 dark:text-blue-400" data-icon="local_hospital">local_hospital</span>
      <span className="text-lg font-bold text-blue-900 dark:text-blue-50">ClinicalPortal</span>
    </div>
    <nav className="hidden md:flex gap-6 items-center">
      <a className="text-blue-700 dark:text-blue-300 font-semibold transition-colors hover:text-blue-800 dark:hover:text-blue-200" href="#">System Status</a>
      <a className="text-slate-500 dark:text-slate-400 transition-colors hover:text-blue-800 dark:hover:text-blue-200" href="#">Support</a>
    </nav>
  </div>
</header>
    
    </>
  )
}

export default Header