import React from "react";

const GridLayout = () => {
    return (
        <section className="grid grid-cols-8 min-h-screen grid-rows-8 mt-16 gap-6">
            <div className="bg-gradient-to-tr from-blue-400/50 to-blue-200/25 col-span-5 rounded-lg row-span-2 p-6 flex flex-col justify-center hover:-translate-y-2 hover:shadow-lg hover:shadow-blue-300/50 duration-300 transition-all">
                <h2 className="text-2xl font-bold">Tentang Kami</h2>
                <p className="mt-2 font-medium text-gray-700">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
                    soluta vero rem. Lorem ipsum dolor sit, amet consectetur
                    adipisicing elit. Cupiditate, praesentium. A odit dolorum et
                    id repellendus.
                </p>
            </div>
            <div className="row-start-3 row-span-2 rounded-lg col-span-4 col-end-9 bg-red-400"></div>
            <div className="row-start-5 row-span-2 col-span-2 col-start-1 bg-white rounded-lg hover:-translate-x-2 transition-all duration-300 hover:shadow-lg hover:shadow-gray-300/50"></div>
            <div className="row-start-5 row-span-2 col-span-2 col-start-3 bg-white rounded-lg hover:-translate-x-2 transition-all duration-300 hover:shadow-lg hover:shadow-gray-300/50"></div>
            <div className="row-start-5 row-span-2 col-span-2 col-start-5 bg-white rounded-lg hover:-translate-x-2 transition-all duration-300 hover:shadow-lg hover:shadow-gray-300/50"></div>
            <div className="row-start-5 row-span-2 col-span-2 col-start-7 bg-white rounded-lg hover:-translate-x-2 transition-all duration-300 hover:shadow-lg hover:shadow-gray-300/50"></div>
        </section>
    );
};

export default GridLayout;
