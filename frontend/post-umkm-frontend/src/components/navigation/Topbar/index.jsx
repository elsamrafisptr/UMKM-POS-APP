"use client";

import Link from "next/link";
import React, { useState } from "react";
import { List, X } from "@phosphor-icons/react";
import { signOut, useSession } from "next-auth/react";

const TopBar = () => {
    const { status } = useSession();
    const [nav, setNav] = useState(false);

    return (
        <nav className="mx-auto sticky top-0 w-full h-[72px] bg-blue-500 backdrop-blur-lg z-50">
            {/* Desktop Menu */}
            <div className="flex items-center justify-between lg:justify-end h-full px-5 md:px-12 w-full">
                <div
                    onClick={() => setNav(!nav)}
                    className="w-[92px] cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
                >
                    {nav ? (
                        <X size={32} color="black" />
                    ) : (
                        <List size={32} color="black" />
                    )}
                </div>
                <div className="w-[92px] md:w-auto">
                    <Link
                        href={"/signin"}
                        className="text-gray-900 h-[43.5px] mr-4 rounded hidden md:inline-flex justify-center items-center w-[91.63px] cursor-pointer capitalize font-medium hover:bg-slate-200 hover:text-slate-900 duration-200"
                    >
                        Masuk
                    </Link>

                    <Link
                        href={"/signup"}
                        className="px-6 py-3 rounded cursor-pointer capitalize font-semibold text-gray-900 hover:text-white duration-200 bg-white hover:bg-slate-800"
                    >
                        Daftar
                    </Link>
                </div>
                {nav && (
                    <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
                        {links.map(({ id, link }) => (
                            <li
                                key={id}
                                className="px-4 cursor-pointer capitalize py-6 text-4xl"
                            >
                                <Link onClick={() => setNav(!nav)} href={link}>
                                    {link}
                                </Link>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </nav>
    );
};

export default TopBar;
