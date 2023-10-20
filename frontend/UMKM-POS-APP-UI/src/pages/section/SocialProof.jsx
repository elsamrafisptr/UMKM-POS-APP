import React from "react";
import Case from "../../components/Case";


export default function SocialProof() {
    return (
        <Case >
            <div className="py-24 px-5 lg:px-24">
                <div>
                    <h1 className="text-xl font-bold text-center">Our Mission</h1>
                    <p className="text-center">Kita sudah membantu mewujudkan mimpi para UMKM yang ada di Indonesia</p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 mt-24 gap-4">
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
                </div>
            </div>
        </Case>
    );
}