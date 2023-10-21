import React from "react";
import Case from "../../components/Case";

export default function TopFeature() {
    return (
        <>
            <Case>
                <div className="min-h-screen w-full pt-12 px-5 lg:px-24">
                    <div>
                        <h1 className="text-2xl font-bold text-center">Top Feature</h1>
                        <p className="text-xl mt-2 text-center">Lorem ipsum dolor si amet</p>
                    </div>

                    {/* Feature Card */}
                    {/* <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 px-5">
                        <div className="relative pt-8">
                            <div className="w-16 h-16 bg-slate-200 rounded absolute left-5 -top-0">
    
                            </div>
                            <div className="pt-10 px-5 py-5 bg-slate-300 rounded flex flex-col gap-2">
                                <h1 className="text-lg font-semibold">Judul Feature</h1>
                                <p className="text-base">Paragraf Feature lorem ipsum dolor si amet</p>
                            </div>
                        </div>
                        <div className="relative pt-8">
                            <div className="w-16 h-16 bg-slate-200 rounded absolute left-5 -top-0">
    
                            </div>
                            <div className="pt-10 px-5 py-5 bg-slate-300 rounded flex flex-col gap-2">
                                <h1 className="text-lg font-semibold">Judul Feature</h1>
                                <p className="text-base">Paragraf Feature lorem ipsum dolor si amet</p>
                            </div>
                        </div>
                        <div className="relative pt-8">
                            <div className="w-16 h-16 bg-slate-200 rounded absolute left-5 -top-0">
    
                            </div>
                            <div className="pt-10 px-5 py-5 bg-slate-300 rounded flex flex-col gap-2">
                                <h1 className="text-lg font-semibold">Judul Feature</h1>
                                <p className="text-base">Paragraf Feature lorem ipsum dolor si amet</p>
                            </div>
                        </div>
                        <div className="relative pt-8">
                            <div className="w-16 h-16 bg-slate-200 rounded absolute left-5 -top-0">
    
                            </div>
                            <div className="pt-10 px-5 py-5 bg-slate-300 rounded flex flex-col gap-2">
                                <h1 className="text-lg font-semibold">Judul Feature</h1>
                                <p className="text-base">Paragraf Feature lorem ipsum dolor si amet</p>
                            </div>
                        </div>
                    </div> */}

                    <div className="grid grid-cols-1  gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2 xl:grid-cols-3">
                        <div className="block space-y-3 rounded-lg p-6 hover:shadow-xl transition hover:border-2 hover:border-sky-600/10 hover:shadow-sky-600/10">
                            <span className="inline-block text-blue-500 dark:text-blue-400">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
                                </svg>
                            </span>

                            <h1 class="text-xl font-semibold text-gray-700 capitalize dark:text-white">Feature-1</h1>

                            <p class="text-gray-500 dark:text-gray-300 text-lg">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ab nulla quod dignissimos vel non corrupti doloribus voluptatum eveniet
                            </p>
                        </div>
                        <div className="block space-y-3 rounded-lg p-6 hover:shadow-xl transition hover:border-2 hover:border-sky-600/10 hover:shadow-sky-600/10">
                            <span className="inline-block text-blue-500 dark:text-blue-400">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
                                </svg>
                            </span>

                            <h1 class="text-xl font-semibold text-gray-700 capitalize dark:text-white">Feature-2</h1>

                            <p class="text-gray-500 dark:text-gray-300 text-lg">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ab nulla quod dignissimos vel non corrupti doloribus voluptatum eveniet
                            </p>
                        </div>
                        <div className="block space-y-3 rounded-lg p-6 hover:shadow-xl transition hover:border-2 hover:border-sky-600/10 hover:shadow-sky-600/10">
                            <span className="inline-block text-blue-500 dark:text-blue-400">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
                                </svg>
                            </span>

                            <h1 class="text-xl font-semibold text-gray-700 capitalize dark:text-white">Feature-3</h1>

                            <p class="text-gray-500 dark:text-gray-300 text-lg">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ab nulla quod dignissimos vel non corrupti doloribus voluptatum eveniet
                            </p>
                        </div>
                    </div>
                </div>
            </Case>
        </>
    )
}