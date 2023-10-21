import React from "react";
import Case from "../../components/Case";


export default function SocialProof() {
    return (
        <Case >
            <div className="py-24 px-5 lg:px-24">
                <div>
                    <h1 className="text-2xl font-bold text-center">Mimpi Kami</h1>
                    <p className="text-xl mt-2 text-center">Kita sudah dan akan terus membantu mewujudkan mimpi para UMKM yang ada di Indonesia</p>
                </div>

                {/* <div className="grid grid-cols-2 md:grid-cols-4 mt-24 gap-4">
                    <div className="flex flex-col justify-center items-center"> 
                        <h1 className="text-2xl font-bold mb-2">100%</h1>
                        <p>Social Proof 1</p>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <h1 className="text-2xl font-bold mb-2">20</h1>
                        <p className="text-base">Social Proof 2</p>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <h1 className="text-2xl font-bold mb-2">1</h1>
                        <p>Social Proof 3</p>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <h1 className="text-2xl font-bold mb-2">1</h1>
                        <p>Social Proof 4</p>
                    </div>
                </div> */}
                <div
                    className="grid grid-cols-1 mt-12 gap-4 md:grid-cols-4 sm:divide-x sm:divide-gray-100"
                >
                    <div className="flex flex-col px-4 py-8 text-center">
                        <dt className="order-last text-lg font-medium text-gray-500">
                            Stats-1
                        </dt>

                        <dd className="text-2xl font-bold text-blue-600">
                            $4.8m
                        </dd>
                    </div>

                    <div className="flex flex-col px-4 py-8 text-center">
                        <dt className="order-last text-lg font-medium text-gray-500">
                            Stats-2
                        </dt>

                        <dd className="text-2xl font-bold text-blue-600 md:text-5xl">24</dd>
                    </div>

                    <div className="flex flex-col px-4 py-8 text-center">
                        <dt className="order-last text-lg font-medium text-gray-500">
                            Stats-3
                        </dt>

                        <dd className="text-2xl font-bold text-blue-600 md:text-5xl">86</dd>
                    </div>
                    <div className="flex flex-col px-4 py-8 text-center">
                        <dt className="order-last text-lg font-medium text-gray-500">
                            Stats-4
                        </dt>

                        <dd className="text-2xl font-bold text-blue-600 md:text-5xl">86</dd>
                    </div>
                </div>
            </div>
        </Case>
    );
}