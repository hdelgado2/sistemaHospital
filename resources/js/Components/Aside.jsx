import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout'
import React, { use, useState } from 'react'
import Dropdown from './Dropdown'
import NavLink from './NavLink'
import ResponsiveNavLink from './ResponsiveNavLink'

const Aside = ({user}) => {
    const [showingNavigationDropdown, setShowingNavigationDropdown] = useState(false);
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
         <nav className="border-b border-gray-100 bg-white">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex h-16 justify-between">
                        <div className="hidden sm:ms-6 sm:flex sm:items-center">
                            <div className="relative ms-3">
                                <Dropdown>
                                    <Dropdown.Trigger>
                                        <span className="inline-flex rounded-md">
                                            <button
                                                type="button"
                                                className="inline-flex items-center rounded-md border border-transparent bg-white px-3 py-2 text-sm font-medium leading-4 text-gray-500 transition duration-150 ease-in-out hover:text-gray-700 focus:outline-none"
                                            >
                                                {user.name}

                                                <svg
                                                    className="-me-0.5 ms-2 h-4 w-4"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                            </button>
                                        </span>
                                    </Dropdown.Trigger>

                                    <Dropdown.Content>
                                        <Dropdown.Link
                                            href={route('profile.edit')}
                                        >
                                            Profile
                                        </Dropdown.Link>
                                        <Dropdown.Link
                                            href={route('logout')}
                                            method="post"
                                            as="button"
                                        >
                                            Log Out
                                        </Dropdown.Link>
                                    </Dropdown.Content>
                                </Dropdown>
                            </div>
                        </div>

                        <div className="-me-2 flex items-center sm:hidden">
                            <button
                                onClick={() =>
                                    setShowingNavigationDropdown(
                                        (previousState) => !previousState,
                                    )
                                }
                                className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 transition duration-150 ease-in-out hover:bg-gray-100 hover:text-gray-500 focus:bg-gray-100 focus:text-gray-500 focus:outline-none"
                            >
                                <svg
                                    className="h-6 w-6"
                                    stroke="currentColor"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        className={
                                            !showingNavigationDropdown
                                                ? 'inline-flex'
                                                : 'hidden'
                                        }
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                    <path
                                        className={
                                            showingNavigationDropdown
                                                ? 'inline-flex'
                                                : 'hidden'
                                        }
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                <div
                    className={
                        (showingNavigationDropdown ? 'block' : 'hidden') +
                        ' sm:hidden'
                    }
                >
                    <div className="space-y-1 pb-3 pt-2">
                        
                    </div>

                    <div className="border-t border-gray-200 pb-1 pt-4">
                        <div className="px-4">
                            <div className="text-base font-medium text-gray-800">
                                {user.name}
                            </div>
                            <div className="text-sm font-medium text-gray-500">
                                {user.email}
                            </div>
                        </div>

                        <div className="mt-3 space-y-1">
                            <ResponsiveNavLink href={route('profile.edit')}>
                                Profile
                            </ResponsiveNavLink>
                            <ResponsiveNavLink
                                method="post"
                                href={route('logout')}
                                as="button"
                            >
                                Log Out
                            </ResponsiveNavLink>
                        </div>
                    </div>
                </div>
        </nav>

        </div>
    </header>
      
    </div>
        
   


    </>

  )
}

export default Aside
