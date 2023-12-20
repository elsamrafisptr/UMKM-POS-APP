import React from "react";

const Stats = () => {
    return (
        <>
            <article className="grid grid-cols-4 gap-4 rounded-lg border border-gray-100 bg-white p-6">
                <div className="col-span-3">
                    <strong className="block text-sm font-medium mb-1 text-gray-500">
                        {" "}
                        Pendapatan Hari Ini{" "}
                    </strong>

                    <p>
                        <span className="text-2xl font-semibold text-gray-900">
                            {" "}
                            Rp 9.000.000{" "}
                        </span>
                    </p>
                </div>
                <div className="col-span-1 inline-flex gap-2 self-end rounded bg-green-100 p-1 text-green-600">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                        />
                    </svg>

                    <span className="text-xs font-medium"> 67.81% </span>
                </div>
            </article>
        </>
    );
};

export default Stats;
