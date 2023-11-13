import React from "react";
import Case from "../../components/Case"

export default function Headline() {
    return (
        <>
            {/*
  Heads up! 👋

  This component comes with some `rtl` classes. Please remove them if they are not needed in your project.
*/}

            <section className="overflow-hidden bg-slate-50 md:grid sm:grid-cols-2 md:items-center min-h-screen pt-24">
                <div className="md:pl-12 mx-auto max-w-xl text-center md:text-left mt-6">
                    <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">
                        Ayo mulai <span className="text-sky-600">Naik Level</span> bersama kami
                    </h2>

                    <p className="text-gray-500 mt-2 md:mt-4 px-5 md:px-0 md:block text-lg">
                        Aplikasi Kasir dan Analisis usaha gratis untuk mempermudah dan meningkatkan kualitas UMKM di Indonesia.
                    </p>

                    <div className="flex flex-col items-center justify-center gap-2 mt-6 md:mt-10 md:flex-row">
                        <button className="w-[335px] h-11 bg-sky-600 rounded text-white font-semibold mx-auto hover:bg-sky-700">Yuk Ikutan Sekarang</button>
                        <button className="w-[335px] h-11 border border-sky-600 rounded text-sky-600 bg-white font-semibold hover:bg-slate-50">Tonton Video Demo</button>
                    </div>
                </div>
                <img alt="Violin" src="../../../public/bg-1.webp" className="h-2/5 md:h-4/5 w-full object-cover sm:self-end md:rounded-ss-3xl mt-12 md:mt-0"/>
            </section>
        </>
    );
}