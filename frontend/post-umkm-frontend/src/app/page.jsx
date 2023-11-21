import Link from "next/link";
import Navbar from "@/components/navigation/Navbar";

export default function Home() {
    const inputs = [
        {
            id: "feature1",
            icon: "Alien",
            title: "Rewards",
            content:
                "The best credit cards offer some tantalizing combinations of promotions and prizes",
        },
        {
            id: "feature2",
            icon: "Alien",
            title: "100% Secured",
            content:
                "We take proactive steps make sure your information and transactions are secure.",
        },
        {
            id: "feature3",
            icon: "Alien",
            title: "Balance Transfer",
            content:
                "A balance transfer credit card can save you a lot of money in interest charges.",
        },
        {
            id: "feature4",
            icon: "Alien",
            title: "Balance Transfer",
            content:
                "A balance transfer credit card can save you a lot of money in interest charges.",
        },
    ];

    const inputsReview = [
        {
            id: "review1",
            name: "person1",
            content: "review lorem ipsum dolor si amet",
        },
        {
            id: "review2",
            name: "person2",
            content: "review lorem ipsum dolor si amet",
        },
        {
            id: "review3",
            name: "person3",
            content: "review lorem ipsum dolor si amet",
        },
        {
            id: "review8",
            name: "person8",
            content: "review lorem ipsum dolor si amet",
        },
        {
            id: "review4",
            name: "person4",
            content: "review lorem ipsum dolor si amet",
        },
        {
            id: "review5",
            name: "person5",
            content: "review lorem ipsum dolor si amet",
        },
        {
            id: "review6",
            name: "person6",
            content: "review lorem ipsum dolor si amet",
        },
        {
            id: "review7",
            name: "person7",
            content: "review lorem ipsum dolor si amet",
        },
    ];

    //     }} className="flex-col items-start justify-center min-h-screen"
    return (
        <section className="mx-auto bg-slate-50">
            <Navbar />
            {/* Section Headline Start */}
            <div className="min-h-screen pt-16 md:pt-24 pb-6 px-5 md:px-12 grid grid-rows-2 gap-12">
                <div className="mt-12 md:mt-6">
                    <h1 className="text-6xl font-bold py-2 block">
                        Ayo mulai{" "}
                        <span className="text-sky-600 block md:inline">
                            Naik Level
                        </span>{" "}
                        bersama kami!
                    </h1>
                    <h1 className="text-4xl font-black py-2 bg-gradient-to-tr from-cyan-400 to-blue-600">
                        #DARIKAMIUNTUKKAMU
                    </h1>
                    {/* <h1 className="text-6xl font-bold py-2 inline">Naik Level bersama kami!</h1> */}
                    <p className="font-medium text-base md:text-lg py-2 text-slate-600">
                        Aplikasi Kasir dan Analisis usaha gratis untuk
                        mempermudah dan meningkatkan kualitas UMKM di Indonesia.
                    </p>
                    <div className="py-4 mb-4 md:py-6 md:mb-6">
                        <Link
                            href={"/signin"}
                            className="font-medium rounded-lg text-white px-5 py-3 bg-sky-600 mr-2 hover:bg-sky-700 duration-300 transition-colors"
                        >
                            Ayo Mulai Sekarang
                        </Link>
                        <Link
                            href={"/"}
                            className="font-medium rounded-lg px-5 py-3 text-sky-600 hover:bg-slate-200 hover:text-sky-700 duration-300 transition-colors"
                        >
                            Tonton Video Demo
                        </Link>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2">
                    <div className="bg-sky-300"></div>
                    <div className="bg-red-300"></div>
                </div>
            </div>
            {/* Section Headline End */}

            {/* Section Tentang Kami Start */}
            <div className="mx-auto min-h-screen px-5 md:px-12 pt-20 md:pt-24 pb-12">
                <div className="w-full py-12 px-5 md:px-12 bg-sky-100 rounded-2xl gap-4 grid grid-rows-3 grid-cols-1 md:grid-cols-3 auto-rows-min">
                    <div className="col-span-3 md:col-span-2 row-span-1 md:row-span-2">
                        <h1 className="text-3xl md:text-5xl font-bold mb-6">
                            Tentang Kami
                        </h1>
                        <p className="mb-3">
                            Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit.
                        </p>
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit.
                        </p>
                    </div>
                    <div className="col-span-3 md:col-span-1 row-span-2 w-full flex justify-center items-center">
                        <div className="w-full h-full bg-white"></div>
                    </div>
                    <div className="col-span-3 row-span-2">
                        <div className="w-full h-full bg-white/50 py-4 px-6 rounded-2xl backdrop-blur-lg">
                            <div className="flex items-center justify-start">
                                <h2 className="mr-3">
                                    Bergabunglah dengan UMKM lainnya
                                </h2>
                                <span className="w-3/5 border-b dark:border-gray-400"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Section Tentang Kami End */}

            {/* Section Produk Start */}
            <div className="mx-auto min-h-screen py-6 px-5 md:px-12">
                <div className="w-full py-12 px-5 md:px-12 bg-white rounded-2xl drop-shadow-md"></div>
            </div>
            {/* Section Produk End */}

            {/*  */}
            <div className="mx-auto min-h-screen py-6 px-5 md:px-12">
                <div className="w-full py-12 px-5 md:px-12 bg-sky-100 rounded-2xl drop-shadow-md"></div>
            </div>
            {/*  */}

            {/* Section Final CTA Start */}
            {/* Section Final CTA End */}

            {/* Section Footer Start */}
            {/* Section Footer End */}
        </section>
    );
}
