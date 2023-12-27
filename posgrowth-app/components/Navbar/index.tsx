"use client";

import Link from "next/link";
import React, { useState } from "react";
import { List, X } from "@phosphor-icons/react";
import { signOut, useSession } from "next-auth/react";

const Navbar = () => {
    const { data: session, status } = useSession();
    const [nav, setNav] = useState(false);

    const links = [
        {
            id: 1,
            link: "Beranda",
        },
        {
            id: 2,
            link: "tentang kita",
        },
        {
            id: 3,
            link: "produk",
        },
        {
            id: 4,
            link: "Bantuan",
        },
    ];

    return (
        <nav className="mx-auto fixed w-full justify-center h-[72px] bg-white/30 backdrop-blur-lg z-50">
            {/* Desktop Menu */}
            <div className="flex items-center justify-between h-full px-5 md:px-16 w-full">
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
                <Link
                    href={"/"}
                    className="flex items-center justify-end md:justify-start w-[92px] cursor-pointer"
                >
                    <svg
                        id="logo-35"
                        width="50"
                        height="39"
                        viewBox="0 0 50 39"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        {" "}
                        <path
                            d="M16.4992 2H37.5808L22.0816 24.9729H1L16.4992 2Z"
                            className="ccompli1"
                            fill="#007AFF"
                        ></path>{" "}
                        <path
                            d="M17.4224 27.102L11.4192 36H33.5008L49 13.0271H32.7024L23.2064 27.102H17.4224Z"
                            className="ccustom"
                            fill="#312ECB"
                        ></path>{" "}
                    </svg>
                </Link>
                <div className="flex">
                    <ul className="hidden md:flex">
                        {links.map(({ id, link }) => (
                            <li
                                key={id}
                                className="px-4 cursor-pointer capitalize font-medium text-slate-900 hover:scale-105 hover:text-sky-600 duration-300 transition-all link-underline hover:underline"
                            >
                                <Link href={link}>{link}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="w-[92px] md:w-auto">
                    {status === "authenticated" ? (
                        <>
                            <Link
                                href={"/dashboard"}
                                className="px-4 py-3 rounded cursor-pointer mr-4 capitalize font-medium text-white hover:text-white duration-200 bg-slate-900 hover:bg-slate-800"
                            >
                                Dashboard
                            </Link>
                            <button
                                onClick={() => signOut()}
                                className="border border-red-700 h-[43.5px] rounded hidden md:inline-flex justify-center items-center w-[91.63px] cursor-pointer capitalize font-medium text-red-700 hover:bg-slate-200 hover:text-slate-900 duration-200"
                            >
                                Log Out
                            </button>
                        </>
                    ) : (
                        <>
                            <Link
                                href={"/login"}
                                className="text-white h-[43.5px] mr-4 rounded hidden md:inline-flex justify-center items-center w-[91.63px] cursor-pointer capitalize font-medium hover:bg-slate-200 hover:text-slate-900 duration-200"
                            >
                                Masuk
                            </Link>

                            <Link
                                href={"/register"}
                                className="px-6 py-3 rounded cursor-pointer capitalize font-semibold text-gray-900 hover:text-white duration-200 bg-white hover:bg-slate-800"
                            >
                                Daftar
                            </Link>
                        </>
                    )}
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

export default Navbar;
