import { GetSessionParams, getSession } from "next-auth/react";
import React from "react";
import prisma from "@/libs/prismaClient";
import { NextApiRequest } from "next";
import { getServerSession } from "next-auth";
import { AuthOptions } from "@/app/api/auth/[...nextauth]/route";
import { Dialog, DialogTrigger, DialogContent } from "@/components/UI/dialog";
import OutletCard from "@/components/OutletCard";
import OutletForm from "@/components/OutletForm";

const getOutlet = async (userSessionName: string) => {
    // const userSession = await getSession({ req });
    const res = await prisma.outlet.findMany({
        where: {
            user: { username: userSessionName },
        },
        select: {
            id: true,
            name: true,
            contact: true,
            address: true,
            createdAt: true,
            user: true,
        },
    });
    return res;
};

const OutletPage = async (req: NextApiRequest) => {
    const session = await getServerSession(AuthOptions);
    const outlets = await getOutlet(session?.user.username!);
    const userName = outlets.map((input) => input.user.username);
    let i = 0;
    const userSession = JSON.stringify(session).includes(`${userName[i]}`);
    console.log(session?.user.username);

    return (
        <Dialog>
            <section className="px-12 pt-12 flex flex-col gap-6">
                <div>
                    <h1 className="font-bold text-2xl">Kelola Outlet</h1>
                    <p className="text-gray-500">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Blanditiis, numquam!
                    </p>
                </div>
                <div className="flex justify-between items-center mt-4 gap-x-3">
                    <div className="flex gap-2">
                        <div className="relative flex items-center mt-4 md:mt-0">
                            <span className="absolute">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke-width="1.5"
                                    stroke="currentColor"
                                    className="w-5 h-5 mx-3 text-gray-400 dark:text-gray-600"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                                    />
                                </svg>
                            </span>

                            <input
                                type="text"
                                placeholder="Search"
                                className="block w-full py-1.5 pr-5 text-gray-700 bg-white border border-gray-200 rounded md:w-80 placeholder-gray-400/70 pl-11 rtl:pr-11 rtl:pl-5 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                            />
                        </div>
                        <button className="flex items-center justify-center md:w-1/2 px-5 py-2 text-sm text-gray-700 transition-colors duration-200 bg-white border rounded gap-x-2 dark:hover:bg-gray-800 dark:bg-gray-900 hover:bg-gray-100 dark:text-gray-200 dark:border-gray-700">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-5 h-5"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75"
                                />
                            </svg>

                            <p>Kategori</p>
                        </button>
                    </div>
                    <DialogTrigger>
                        <button className="flex items-center justify-center w-1/2 px-5 py-2 text-sm text-white transition-colors duration-200 bg-blue-500 rounded shrink-0 sm:w-auto gap-x-2 hover:bg-blue-600 dark:hover:bg-blue-500 dark:bg-blue-600">
                            Tambah Outlet
                        </button>
                    </DialogTrigger>
                </div>
                <div className="grid grid-cols-3 gap-6">
                    {userSession ? (
                        <>
                            {outlets.map((input) => (
                                <OutletCard 
                                    key={input.id}
                                    name={input.name}
                                    owner={input.user.username!}
                                    address={input.address!}
                                    contact={input.contact!}
                                    id={input.id}
                                />
                                // <div
                                //     key={input.id}
                                //     className="bg-white p-4 rounded"
                                // >
                                //     <h1 className="font-bold">
                                //         Nama outlet : {input.name}
                                //     </h1>
                                //     <p>Pemilik : {input.user.username}</p>
                                //     <p className="text-xs text-gray-500">
                                //         {Number(input.createdAt)}
                                //     </p>
                                //     <p>alamat : {input.address}</p>
                                //     <p>kontak : {input.contact}</p>
                                // </div>
                            ))}
                        </>
                    ) : (
                        <>
                            <h1>tidak ada outlet</h1>
                        </>
                    )}
                </div>
                <div></div>
                <DialogContent>
                    <OutletForm/>
                </DialogContent>
            </section>
        </Dialog>
    );
};

export default OutletPage;
