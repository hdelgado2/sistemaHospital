import ApplicationLogo from '@/Components/ApplicationLogo';
import Dropdown from '@/Components/Dropdown';
import NavLink from '@/Components/NavLink';
import ResponsiveNavLink from '@/Components/ResponsiveNavLink';
import { Link, usePage } from '@inertiajs/react';
import { useState } from 'react';
import Aside from '@/Components/Aside';
import { ThemeProvider } from '@/Context/ThemeContext';

export default function AuthenticatedLayout({ header, children }) {
    const user = usePage().props.auth.user;

    const [showingNavigationDropdown, setShowingNavigationDropdown] =
        useState(false);

    return (
        <body className="min-h-screen  bg-background text-on-surface">
           

        

            <Aside user={user} />
            <main className="ml-64 flex-1 p-6 bg-white dark:bg-slate-900 min-h-screen">
            {children}
            </main>
            
        
        
        </body>
    );
}

            