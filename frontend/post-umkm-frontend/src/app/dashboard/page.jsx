import React from "react";
import Link from "next/link";
import Stats from "@/components/Stats";
import AdsCarousel from "@/components/AdsCaraousel";
import BlogCard from "@/components/BlogCard";

const DashboardPage = () => {
    const dashboardRoute = "/dashboard/management";
    return (
        <>
            <div className="flex flex-col gap-4 min-h-screen mt-24 md:mt-6">
                <div className="w-full px-6">
                    <AdsCarousel />
                </div>
                <div className="w-full py-4 px-6 bg-slate-100">
                    <h1 className="text-xl font-bold mb-4">
                        Laporan Penjualan
                    </h1>
                    <span className="grid grid-cols-3 gap-6">
                        <Stats />
                        <Stats />
                        <Stats />
                    </span>
                </div>
                <div className="w-full py-4 grid grid-cols-5 px-6 gap-6">
                    <Link href={`${dashboardRoute}/employee`} className="">
                        <div className="rounded-lg bg-gray-800 p-4 flex flex-row">
                            <svg
                                className="h-5 w-5 text-white"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                                <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path>
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                                ></path>
                            </svg>
                            <p className="text-white ml-4">Employee</p>
                        </div>
                    </Link>
                    <Link href={`${dashboardRoute}/outlet`}>
                        <div className="rounded-lg bg-gray-800 p-4 flex flex-row">
                            <svg
                                className="h-5 w-5 text-white"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                                <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path>
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                                ></path>
                            </svg>
                            <p className="text-white ml-4">Outlet</p>
                        </div>
                    </Link>
                    <Link href={`${dashboardRoute}/product`}>
                        <div className="rounded-lg bg-gray-800 p-4 flex flex-row">
                            <svg
                                className="h-5 w-5 text-white"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                                <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path>
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                                ></path>
                            </svg>
                            <p className="text-white ml-4">Product</p>
                        </div>
                    </Link>
                    <Link href={`${dashboardRoute}/product`}>
                        <div className="rounded-lg bg-gray-800 p-4 flex flex-row">
                            <svg
                                className="h-5 w-5 text-white"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                                <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path>
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                                ></path>
                            </svg>
                            <p className="text-white ml-4">Laporan</p>
                        </div>
                    </Link>
                    <Link href={`${dashboardRoute}/product`}>
                        <div className="rounded-lg bg-gray-800 p-4 flex flex-row">
                            <svg
                                className="h-5 w-5 text-white"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                                <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path>
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                                ></path>
                            </svg>
                            <p className="text-white ml-4">Bantuan</p>
                        </div>
                    </Link>
                </div>

                <div className="w-full p-6">
                <h1 className="text-xl font-bold mb-4">
                        #CeritaLangkahBersama
                    </h1>
                    <div className="grid grid-cols-4 gap-4">
                        <BlogCard />
                        <BlogCard />
                        <BlogCard />
                        <BlogCard />
                    </div>
                </div>
                <div className="w-full p-6">
                    <h1 className="text-xl font-bold mb-4">
                        Berita Terkini
                    </h1>
                    <div className="grid grid-cols-4 gap-4">
                        <BlogCard />
                        <BlogCard />
                        <BlogCard />
                        <BlogCard />
                    </div>
                </div>
            </div>
        </>
    );
};

export default DashboardPage;
