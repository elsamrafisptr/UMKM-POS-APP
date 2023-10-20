import React, { useState } from "react";
import Case from "./Case";
import { List, X } from "@phosphor-icons/react"
import SideMenu from "./SideMenu";
import { navLinks } from "../constant/constant"

export default function Navbar() {
    const [navbarOpen, setNavbarOpen] = useState(false);

    return (
        <div className="bg-white fixed w-full py-3 drop-shadow-md z-50 px-5 md:px-24">
            <Case>
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
                
            </Case>
        </div>
    );
}
