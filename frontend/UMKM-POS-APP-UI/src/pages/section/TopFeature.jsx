import React from "react";
import Case from "../../components/Case";

export default function TopFeature() {
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
    ]

    return (
        <>
            <Case>
                <div className="min-h-screen w-full pt-12 px-5 lg:px-24">
                    <div>
                        <h1 className="text-2xl font-bold text-center">Top Feature</h1>
                        <p className="text-xl mt-2 text-center">Lorem ipsum dolor si amet</p>
                    </div>
                    <div className="grid grid-cols-1  gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2 xl:grid-cols-3">
                        {inputs.map((input) => (
                            <div key={input.id} className="block space-y-3 rounded-lg p-6 hover:shadow-xl transition hover:border-2 hover:border-sky-600/10 hover:shadow-sky-600/10">
                                <span className="inline-block text-blue-500 dark:text-blue-400">
                                    {input.icon}
                                </span>

                                <h1 class="text-xl font-semibold text-gray-700 capitalize">{input.title}</h1>

                                <p class="text-gray-500 dark:text-gray-300 text-lg">
                                    {input.content}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </Case>
        </>
    )
}