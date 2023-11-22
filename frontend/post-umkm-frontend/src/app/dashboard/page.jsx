import React from "react";
import Link from "next/link";

const DashboardPage = () => {
    const dashboardRoute = "/dashboard/management"
    return (
        <>
            <div className="flex flex-col gap-4 min-h-screen mt-24 md:mt-6">
                <div className="w-full h-36 bg-sky-200">Iklan</div>
                <div className="w-full h-36 bg-red-200 flex flex-col">Shorcut Menu
                    <Link href={`${dashboardRoute}/employee`}>{`employee page`}</Link>
                    <Link href={`${dashboardRoute}/outlet`}>{`outlet page`}</Link>
                    <Link href={`${dashboardRoute}/product`}>{`product page`}</Link>
                </div>
                <div className="w-full h-20 bg-slate-100">Caraousel report today</div>
                <div className="w-full h-36 bg-green-50">blog tips trik</div>
                <div className="w-full h-36 bg-violet-50">blog about news</div>
            </div>
        </>
    );
};

export default DashboardPage;
