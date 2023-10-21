import React from "react";
import Case from "../../components/Case"

export default function Headline() {
    return (
        // Headline CTA Section
        <Case>
            <div className="min-h-screen grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-6 pt-24 px-5 md:px-24 relative md:mx-auto">
                {/*  Parent Headline */}
                <div>
                    <div className="md:flex md:mt-12">
                        <h1 className="text-center md:text-left text-2xl md:text-3xl font-bold text-slate-900">Ayo mulai <span className="text-sky-600">Naik Level</span> bersama kami</h1>
                    </div>
                    <p className="text-slate-500 text-lg text-center md:text-left mt-2 md:mt-4">Aplikasi Kasir dan Analisis usaha gratis untuk mempermudah dan meningkatkan kualitas UMKM di Indonesia</p>

                    {/* Parent Div Button CTA */}
                    <div className="flex flex-col items-center justify-center gap-2 mt-6 md:mt-10 md:flex-row">
                        <button className="w-[335px] h-11 bg-sky-600 rounded text-white font-semibold mx-auto">Yuk Ikutan Sekarang</button>
                        <button className="w-[335px] h-11 border border-sky-600 rounded text-sky-600 font-semibold">Tonton Video Demo</button>
                    </div>
                </div>

                {/* Slider Image */}
                <div className="flex float-right pt-12">
                    <div className="w-40 h-40 bg-sky-200 absolute right-0"></div>
                </div>
            </div>
        </Case>
    );
}