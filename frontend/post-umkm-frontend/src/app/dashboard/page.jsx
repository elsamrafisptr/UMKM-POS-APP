import React from "react";

const DashboardPage = () => {
    return (
        <>
            <div className="flex flex-col gap-4 min-h-screen mt-24">
                <div className="w-full h-36 bg-sky-200">Iklan</div>
                <div className="w-full h-36 bg-red-200">Shorcut Menu</div>
                <div className="w-full h-20 bg-slate-100">Caraousel report today</div>
                <div className="w-full h-36 bg-green-50">blog tips trik</div>
                <div className="w-full h-36 bg-violet-50">blog about news</div>
            </div>
        </>
    );
};

export default DashboardPage;
