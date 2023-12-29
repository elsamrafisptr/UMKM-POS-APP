import React from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/UI/dialog";
import { Product } from "@prisma/client";
import { ObjectEnumValue } from "@prisma/client/runtime/library";
import CartProduct from "@/components/CartProduct";
import prisma from "@/libs/prismaClient";
import { getServerSession } from "next-auth";
import { AuthOptions } from "@/app/api/auth/[...nextauth]/route";
import ProductCard from "@/components/ProductCard";

type Transaction = {
    id: string;
    employeeName: string;
    outletName: string;
    products: Product[];
    totalAmount: number;
    paymentMethod: string;
    balance: number;
};

const calculateTotal = (objectArray: Product[]) => {
    let totalAmount = 0;

    for (let i = 0; i < objectArray.length; i++) {
        const priceAmount = objectArray[i].price;
        totalAmount += priceAmount;
    }
    return totalAmount;
};

const getProducts = async (userSessionName: string) => {
    // const userSession = await getSession({ req });
    const res = await prisma.product.findMany({
        where: {
            outlet: { userId: userSessionName },
        },
        select: {
            id: true,
            name: true,
            category: true,
            price: true,
            stock: true,
            outlet: {
                include: {
                    user: true,
                },
            },
        },
    });
    return res;
};

const TransactionPage = async () => {
    const productsClicked: Product[] = [];
    const session = await getServerSession(AuthOptions);
    const products = await getProducts(session?.user.id!);
    const userName = products.map((input) => input.outlet.user.username);
    const user = JSON.stringify(session).includes(`${userName[0]}`);

    return (
        <div>
            <Dialog>
                <section className="px-5 md:px-12 pt-12 flex flex-col gap-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="col-span-2 h-80">
                            <div>
                                <h1 className="font-bold text-2xl">
                                    Tansaksi Pembelian
                                </h1>
                                <p className="text-gray-500">
                                    Manajemen produk menambah, mengedit dan
                                    menghapus produk pada outlet anda
                                </p>
                            </div>
                            <div className="flex justify-end items-center mt-4 gap-x-3">
                                <div className="relative flex w-full items-center mt-4 md:mt-0">
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
                                        className="w-full py-1.5 pr-5 text-gray-700 bg-white border border-gray-200 rounded placeholder-gray-400/70 pl-11 rtl:pr-11 rtl:pl-5 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                                    />
                                </div>
                                <button className="flex items-center justify-center w-1/2 px-5 py-2 text-sm text-gray-700 transition-colors duration-200 bg-white border rounded gap-x-2 sm:w-auto dark:hover:bg-gray-800 dark:bg-gray-900 hover:bg-gray-100 dark:text-gray-200 dark:border-gray-700">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="currentColor"
                                        className="w-6 h-6"
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
                            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
                                {user ? (
                                    <>
                                        {products.map((input, index) => (
                                            <ProductCard
                                                key={input.id}
                                                id={input.id}
                                                name={input.name}
                                                category={input.category}
                                                image=""
                                                price={input.price}
                                                stock={input.stock}
                                            />
                                        ))}
                                    </>
                                ) : (
                                    <div className="col-span-3 w-full h-48 flex justify-center items-center">
                                        <h1 className="w-full font-bold text-center">
                                            Tidak ada produk dalam outlet ini
                                        </h1>
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className="col-span-1 bg-white pb-6">
                            <h1 className="font-bold text-lg px-5 py-4">
                                Order Saat Ini
                            </h1>
                            {/* Card nambah barang */}
                            <div className="flex flex-col gap-4 px-5">
                                {products.map((input) => (
                                    <>
                                        <CartProduct
                                            key={input.id}
                                            id={input.id}
                                            name={input.name}
                                            category={input.category}
                                            price={input.price}
                                            stock={input.stock}
                                            image=""
                                        />
                                    </>
                                ))}
                            </div>
                            {/* Invoice */}
                            <div className="bg-gray-200 px-2 py-4 mx-5 mt-6 grid grid-cols-2 gap-1">
                                <p>Subtotal</p>
                                <h1 className="text-right font-medium">
                                    Rp Subtotal
                                </h1>
                                <p>Diskon</p>
                                <h1 className="text-right font-medium">
                                    Rp Diskon
                                </h1>
                                <p>Biaya pajak</p>
                                <h1 className="text-right font-medium">
                                    Rp Pajak
                                </h1>
                                <p className="col-span-2 h-0.5 bg-gray-600 my-1"></p>
                                <h1 className="font-bold text-lg">Total</h1>
                                <h1 className="font-bold text-lg text-right">
                                    Rp Total
                                </h1>
                            </div>
                            {/* create transaksi */}
                            <div className="w-full px-5 mt-6">
                                <button className="px-5 w-full justify-center py-2 text-white transition-colors duration-200 bg-blue-500 rounded hover:bg-blue-600 dark:hover:bg-blue-500 dark:bg-blue-600">
                                    Bayar
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
                <DialogContent className="max-w-xl">
                    {/* <ProductForm /> */}
                </DialogContent>
            </Dialog>
        </div>
    );
};

export default TransactionPage;
