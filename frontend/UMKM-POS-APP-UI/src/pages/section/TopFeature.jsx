import React from "react";
import Case from "../../components/Case";

export default function TopFeature() {
    return (
        <>
            <Case>
                <div className="min-h-screen w-full pt-12 px-5 lg:px-24">
                    {/* Title */}
                    <div>
                        <h1 className="text-xl font-bold text-center">Top Feature</h1>
                        <p className="text-base text-center">Lorem ipsum dolor si amet</p>
                    </div>

                    {/* Feature Card */}
                    <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 px-5">
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
                    </div>
                </div>
            </Case>
        </>
    )
}