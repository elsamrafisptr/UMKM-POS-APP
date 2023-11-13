import React from "react";
import Case from "../../components/Case";


export default function SocialProof() {
    const inputs = [
        {
            id: "stats-1",
            title: "Stats-1",
            value: "3800+",
        },
        {
            id: "stats-2",
            title: "Stats-2",
            value: "230+",
        },
        {
            id: "stats-3",
            title: "Stats-3",
            value: "$230M+",
        },
        {
            id: "stats-4",
            title: "Stats-4",
            value: "$230M+",
        },
    ]

    return (
        <Case >
            <div className="py-24 px-5 lg:px-24">
                <div>
                    <h1 className="text-2xl font-bold text-center">Mimpi Kami</h1>
                    <p className="text-xl mt-2 text-center">Kita sudah dan akan terus membantu mewujudkan mimpi para UMKM yang ada di Indonesia</p>
                </div>
                <div className="grid grid-cols-2 mt-12 gap-4 md:grid-cols-4 sm:divide-x sm:divide-gray-100">
                    {inputs.map((input) => (
                        <div key={input.id} className="flex flex-col px-4 py-8 text-center">
                            <div className="order-last text-lg font-medium text-gray-500">{input.title}</div>
                            <div className="text-2xl font-bold text-blue-600">{input.value}</div>
                        </div>
                    ))}
                </div>
            </div>
        </Case>
    );
}