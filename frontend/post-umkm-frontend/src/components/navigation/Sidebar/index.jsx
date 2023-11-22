import React from "react";
import Link from "next/link";

const index = () => {
    return (
        <>
            <aside className="hidden md:block py-[72px] px-8 w-full flex-none md:w-80 bg-blue-200">
                <div className="flex flex-col gap-3">
                    <div className="w-full h-36 bg-white">
                        <Link href={`/`}>Ini buat profile</Link>
                    </div>
                    <div className="w-full h-12 bg-white">
                        <Link href={`/dashboard`}>
                            Ini halaman utama dashboard
                        </Link>
                    </div>
                    <div className="w-full h-12 bg-white">
                        <Link href={`/dashboard/management/product`}>
                            Ini buat product
                        </Link>
                    </div>
                    <div className="w-full h-12 bg-white">
                        <Link href={`/dashboard//management/employee`}>
                            Ini buat pegawai
                        </Link>
                    </div>
                    <div className="w-full h-12 bg-white">
                        <Link href={`/dashboard//management/outlet`}>
                            Ini buat outlet
                        </Link>
                    </div>
                    <div className="w-full h-12 bg-white">
                        ini tombol Laporan
                    </div>
                    <div className="w-full h-12 bg-white">
                        <Link href={`/dashboard/management/product`}>
                            Riwayat Transaksi
                        </Link>
                    </div>
                    <div className="w-full h-12 bg-white">
                        ini tombol bantuan
                    </div>
                </div>
            </aside>
        </>
    );
};

export default index;
