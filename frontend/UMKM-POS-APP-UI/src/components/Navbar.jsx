import React, { useState } from "react";
import Case from "./Case";
import { List, X } from "@phosphor-icons/react"
import SideMenu from "./SideMenu";
import { navLinks } from "../constant/constant"

export default function Navbar() {
    const [toggle, setToggle] = useState(false);

    return (
        <div className="container">
            <div className="bg-white fixed w-full py-3 drop-shadow-md z-50 px-5 md:px-24">
                {/* <div className="flex items-center justify-between">
                    <div className="w-[80px] h-8">
                        <button onClick={() => setNavbarOpen((prev) => !prev)}>
                            {navbarOpen ? <X size={32} color="#171717" /> : <List size={32} color="#171717" />}
                        </button>
                        
                    </div>
                    <div className="w-[32px] h-[32px] bg-sky-700"></div>
                    
                    <button className="text-base text-sky-600 border border-sky-600 px-2 py-1.5 rounded-md cursor-pointer hover:bg-sky-600 hover:text-white">Buat Akun</button>
                    
                </div>
                {navbarOpen ? <SideMenu /> :''} */}
                <div className="flex justify-between items-center py-1">
                    <div className="sm:hidden flex flex-1 justify-start items-center">
                        <List src={toggle ? 'close' : 'menu'} alt="menu" className="w-[32px] h-[32px] object-contain" onClick={() => setToggle((prev) => !prev)} />
                        <div className={`${toggle ? 'flex' : 'hidden'} p-6 bg-slate-900 top-20 left-0 mx-4 my-2 min-w-[140px]`}>
                            <ul className="list-none flex flex-col justify-start font-medium items-center ml-12 flex-1">
                                {navLinks.map((nav, index) => (
                                    <li key={nav.id} className={`text-lg  text-white font-normal cursor-pointer ${index === navLinks.length - 1 ? 'mr-0' : 'mr-6'}`}>
                                        <a href={`#${nav.id}`}>
                                            {nav.title}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="w-[32px] h-[32px] bg-slate-600"></div>
                    <ul className="list-none sm:flex hidden justify-start font-medium items-center ml-12 flex-1">
                        {navLinks.map((nav, index) => (
                            <li key={nav.id} className={`text-lg  text-slate-900 font-normal cursor-pointer ${index === navLinks.length - 1 ? 'mr-0' : 'mr-6'}`}>
                                <a href={`#${nav.id}`}>
                                    {nav.title}
                                </a>
                            </li>
                        ))}
                    </ul>
                    <div className="ml-6">
                        <a href="/login" className="mr-4 px-3 py-1.5 md:px-4 md:py-2 text-base font-semibold border rounded border-sky-600 text-sky-600">Masuk Akun</a>
                        <a href="/register" className="px-3 py-1.5 md:px-4 md:py-2 text-base font-semibold text-white border rounded border-sky-600 bg-sky-600">Buat Akun</a>
                    </div>
                </div>
            </div>
        </div>
    );
}
