/* eslint-disable react-hooks/rules-of-hooks */
"use client";

// Buatt mass condroo

import React from "react";
import Link from "next/link";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { getUserEmployee } from "@/libs/getUser";

const SideBar = () => {
    const pathName = usePathname();
    const { status, data: session } = useSession();
    // const strictName = session?.user.username
    // const employeeCheck = getUserEmployee(strictName!)
    // console.log(employeeCheck)
    return (
        <>
            <aside className="hidden md:block py-[72px] px-8 w-full flex-none md:w-80 bg-gradient-to-r from-gray-50 to-white overflow-y-scroll">
                <div className="flex flex-col gap-4">
                    <div className="w-full rounded p-4 flex flex-col items-center justify-center gap-1 mb-2">
                        <div className="w-20 flex justify-center items-center h-20 rounded-full bg-sky-200">
                            Foto
                        </div>
                        <span className="font-bold text-lg">
                            {session?.user.username}
                        </span>
                        <span className="text-gray-500">
                            {session?.user.email}
                        </span>
                        <Link
                            href={"/dashboard/profile"}
                            className="text-sm text-sky-600"
                        >
                            Edit Profil
                        </Link>
                    </div>
                    {}
                    <Link
                        href={`/dashboard`}
                        className={`w-full rounded py-3 px-4 font-medium  transition-all duration-200 ${
                            pathName === "/dashboard"
                                ? "bg-blue-500 text-white hover:bg-blue-700"
                                : "hover:bg-gray-200"
                        }`}
                    >
                        Dashboard
                    </Link>
                    <Link
                        href={`/dashboard/management/product`}
                        className={`w-full rounded py-3 px-4 font-medium  transition-all duration-200 ${
                            pathName === "/dashboard/management/product"
                                ? "bg-blue-500 text-white hover:bg-blue-700"
                                : "hover:bg-gray-200"
                        }`}
                    >
                        Kelola Produk
                    </Link>
                    <Link
                        href={`/dashboard//management/employee`}
                        className={`w-full rounded py-3 px-4 font-medium  transition-all duration-200 ${
                            pathName === "/dashboard/management/employee"
                                ? "bg-blue-500 text-white hover:bg-blue-700"
                                : "hover:bg-gray-200"
                        }`}
                    >
                        Manajemen Pegawai
                    </Link>
                    <Link
                        href={`/dashboard/management/outlet`}
                        className={`w-full rounded py-3 px-4 font-medium  transition-all duration-200 ${
                            pathName === "/dashboard/management/outlet"
                                ? "bg-blue-500 text-white hover:bg-blue-700"
                                : "hover:bg-gray-200"
                        }`}
                    >
                        Kelola Outlet
                    </Link>
                    <Link
                        href={`/dashboard/report`}
                        className={`w-full rounded py-3 px-4 font-medium  transition-all duration-200 ${
                            pathName === "/dashboard/report"
                                ? "bg-blue-500 text-white hover:bg-blue-700"
                                : "hover:bg-gray-200"
                        }`}
                    >
                        Laporan
                    </Link>
                    <Link
                        href={`/dashboard/transaction/history`}
                        className={`w-full rounded py-3 px-4 font-medium  transition-all duration-200 ${
                            pathName === "/dashboard/transaction/history"
                                ? "bg-blue-500 text-white hover:bg-blue-700"
                                : "hover:bg-gray-200"
                        }`}
                    >
                        Riwayat Transaksi
                    </Link>
                    <Link
                        href={`/dashboard/help`}
                        className={`w-full rounded py-3 px-4 font-medium  transition-all duration-200 ${
                            pathName === "/dashboard/help"
                                ? "bg-blue-500 text-white hover:bg-blue-700"
                                : "hover:bg-gray-200"
                        }`}
                    >
                        Butuh Bantuan?
                    </Link>
                    <div className="w-full bg-gray-200 h-40 rounded"></div>
                </div>
            </aside>
        </>
    );
};

export default SideBar;
