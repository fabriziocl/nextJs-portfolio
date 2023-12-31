"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import NavLink from './NavLink';
import Bars3Icon  from '@heroicons/react/24/solid/Bars3Icon'
import XmarkIcon  from '@heroicons/react/24/solid/XMarkIcon'
import MenuOverlay from './MenuOverlay';
import navLinks from '../utils/NavLinks';
import Image from 'next/image';

const NavBar = () => {
    const [navbarOpen, setNavbarOpen] = useState(false)
    return (
        <nav className="fixed top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-70 backdrop-blur-sm">
            <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2">
                <Link href="#home" className="text-2xl md:text-5xl text-white font-semibold">
                    <Image
                        src='/images/code-laptop.png'
                        alt='laptop-img'
                        width={60}
                        height={60}
                    />
                </Link>
                <div className="mobile-menu block md:hidden">
                    {
                        !navbarOpen ? (
                            <button onClick={()=>setNavbarOpen(true)} className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white">
                                <Bars3Icon className="h-5 w-5" />
                            </button>
                        ) : (
                            <button onClick={()=>setNavbarOpen(false)} className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white">
                                <XmarkIcon className="h-5 w-5" /> 
                            </button>
                        )
                    }
                </div>
                <div className="menu hidden md:block md:w-auto" id="navbar">
                    <ul className='flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0'>
                        {
                            navLinks.map((link, index) => (
                                <li key={index}>
                                    <NavLink href={link.path} title={link.title}></NavLink>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
            {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
        </nav>
    );
};

export default NavBar;