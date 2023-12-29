import React from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/UI/dialog";
import { Product } from "@prisma/client";
import { ObjectEnumValue } from "@prisma/client/runtime/library";

type Transaction = {
    id: string
    employeeName: string
    outletName: string
    products: Product[]
    totalAmount: number
    paymentMethod: string
    balance: number
}

const calculateTotal = (objectArray: Product[]) => {
    let totalAmount = 0;

    for (let i = 0; i < objectArray.length; i++) {
        const priceAmount = objectArray[i].price
        totalAmount += priceAmount
    }
    return totalAmount
}

const TransactionPage = () => {
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
                                        width="20"
                                        height="20"
                                        viewBox="0 0 20 20"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <g clip-path="url(#clip0_3098_154395)">
                                            <path
                                                d="M13.3333 13.3332L9.99997 9.9999M9.99997 9.9999L6.66663 13.3332M9.99997 9.9999V17.4999M16.9916 15.3249C17.8044 14.8818 18.4465 14.1806 18.8165 13.3321C19.1866 12.4835 19.2635 11.5359 19.0351 10.6388C18.8068 9.7417 18.2862 8.94616 17.5555 8.37778C16.8248 7.80939 15.9257 7.50052 15 7.4999H13.95C13.6977 6.52427 13.2276 5.61852 12.5749 4.85073C11.9222 4.08295 11.104 3.47311 10.1817 3.06708C9.25943 2.66104 8.25709 2.46937 7.25006 2.50647C6.24304 2.54358 5.25752 2.80849 4.36761 3.28129C3.47771 3.7541 2.70656 4.42249 2.11215 5.23622C1.51774 6.04996 1.11554 6.98785 0.935783 7.9794C0.756025 8.97095 0.803388 9.99035 1.07431 10.961C1.34523 11.9316 1.83267 12.8281 2.49997 13.5832"
                                                stroke="currentColor"
                                                stroke-width="1.67"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                            />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_3098_154395">
                                                <rect
                                                    width="20"
                                                    height="20"
                                                    fill="white"
                                                />
                                            </clipPath>
                                        </defs>
                                    </svg>

                                    <p>Kategori</p>
                                </button>
                            </div>
                            <div className="mt-6 grid grid-cols-1 md:grid-cols-3">cek</div>
                        </div>
                        <div className="col-span-1 bg-red-100 h-80">
                            <h1 className="font-bold text-lg">Order Saat Ini</h1>
                            {/* Card nambah barang */}
                            <div>

                            </div>
                            {/* Invoice */}
                            <div>

                            </div>
                            {/* create transaksi */}
                            <button>

                            </button>
                        </div>

                        {/* {user ? (
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
                        )} */}
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
