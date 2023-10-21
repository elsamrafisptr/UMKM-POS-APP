import React from "react";
import Case from "../../components/Case";

export default function FinalCTA() {
    return (
        <>
            <Case>
                {/* <div className="bg-gradient-to-b from-cyan-100 to-sky-300 py-12 px-5 lg:px-24">
                    <div>
                        <h2 className="text-2xl font-semibold text-slate-900 xl:text-3xl text-center">
                            Ayo bergabung! <span className="text-sky-600">Tingkatkan level</span> UMKM Indonesia
                        </h2>

                        <div className="mt-8 lg:mt-0">
                            <div className="flex flex-col space-y-3 sm:space-y-0 sm:flex-row sm:-mx-2">
                                <input id="email" type="text" className="px-4 py-2 text-gray-700 bg-white border border-gray-200 rounded-lg sm:mx-2 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Email Address" />

                                <button className="px-6 py-2 tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-lg focus:ring focus:ring-blue-300 focus:ring-opacity-80 fo sm:mx-2 hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                                    Get Started
                                </button>
                            </div>
                        </div>
                    </div>
                </div> */}
                <div className="px-4 py-16 flex flex-col gap-4">
                    <h2 className="text-2xl font-semibold tracking-tight text-gray-800 dark:text-white">
                        Ayo ikut dan ajak kawan sesama UMKM lainnya!
                    </h2>

                    <div className="mt-8 lg:mt-0">
                        <div className="w-full flex flex-col space-y-3 sm:space-y-0 sm:flex-row sm:-mx-2">
                            <input id="email" type="text" class="px-4 py-2 text-gray-700 w-2/5 bg-white border border-gray-200 rounded sm:mx-2 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Email Address"/>

                            <button className="px-6 py-2 text-base tracking-wide text-white capitalize transition-colors font-semibold duration-300 transform bg-blue-600 rounded focus:ring focus:ring-blue-300 focus:ring-opacity-80 fo sm:mx-2 hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                                Buat Akun        
                            </button>
                        </div>
                    </div>
                </div>
            </Case>
        </>
    )
}