import React from "react";

const ProductTable = () => {
    return (
        <div>
            <div className="overflow-x-auto rounded-lg border border-gray-200">
                <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
                    <thead className="ltr:text-left rtl:text-right">
                        <tr>
                            <th className="whitespace-nowrap px-4 py-2 font-semibold text-gray-900">
                                Nama Produk
                            </th>
                            <th className="whitespace-nowrap px-4 py-2 font-semibold text-gray-900">
                                Harga Produk
                            </th>
                            <th className="whitespace-nowrap px-4 py-2 font-semibold text-gray-900">
                                Kategori
                            </th>
                            <th className="whitespace-nowrap px-4 py-2 font-semibold text-gray-900">
                                Stok
                            </th>
                            <th className="px-4 py-2"></th>
                        </tr>
                    </thead>

                    <tbody className="divide-y divide-gray-200">
                        <tr className="odd:bg-gray-50">
                            <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                                Ayam Goreng Kremes
                            </td>
                            <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                                Rp 17.000
                            </td>
                            <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                                Makanan Berat
                            </td>
                            <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                                25
                            </td>
                            <td className=" py-2 flex flex-row justify-center gap-1">
                                <a
                                    href="#"
                                    className="inline-block rounded bg-sky-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
                                >
                                    Edit
                                </a>
                                <a
                                    href="#"
                                    className="inline-block rounded bg-rose-700 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
                                >
                                    Hapus
                                </a>
                            </td>
                        </tr>

                        <tr className="odd:bg-gray-50">
                            <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                                Ayam Bakar Kalasan
                            </td>
                            <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                                Rp 18.000
                            </td>
                            <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                                Makanan Berat
                            </td>
                            <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                                20
                            </td>
                            <td className="py-2 flex flex-row justify-center gap-1">
                                <a
                                    href="#"
                                    className="inline-block rounded bg-sky-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
                                >
                                    Edit
                                </a>
                                <a
                                    href="#"
                                    className="inline-block rounded bg-rose-700 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
                                >
                                    Hapus
                                </a>
                            </td>
                        </tr>

                        <tr className="odd:bg-gray-50">
                            <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                                Ayam Geprek Nuklir
                            </td>
                            <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                                Rp 17.000
                            </td>
                            <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                                Makanan Berat
                            </td>
                            <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                                25
                            </td>
                            <td className="py-2 flex justify-center flex-row gap-1">
                                <a
                                    href="#"
                                    className="inline-block rounded bg-sky-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
                                >
                                    Edit
                                </a>
                                <a
                                    href="#"
                                    className="inline-block rounded bg-rose-700 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
                                >
                                    Hapus
                                </a>
                            </td>
                        </tr>

                        <tr className="odd:bg-gray-50">
                            <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                                Bakso Bakar
                            </td>
                            <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                                Rp 17.000
                            </td>
                            <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                                Makanan Berat
                            </td>
                            <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                                25
                            </td>
                            <td className="py-2 flex justify-center flex-row gap-1">
                                <a
                                    href="#"
                                    className="inline-block rounded bg-sky-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
                                >
                                    Edit
                                </a>
                                <a
                                    href="#"
                                    className="inline-block rounded bg-rose-700 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
                                >
                                    Hapus
                                </a>
                            </td>
                        </tr>

                        <tr className="odd:bg-gray-50">
                            <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                                Bakso Sambal Mercon
                            </td>
                            <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                                Rp 17.000
                            </td>
                            <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                                Makanan Berat
                            </td>
                            <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                                25
                            </td>
                            <td className="py-2 flex justify-center flex-row gap-1">
                                <a
                                    href="#"
                                    className="inline-block rounded bg-sky-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
                                >
                                    Edit
                                </a>
                                <a
                                    href="#"
                                    className="inline-block rounded bg-rose-700 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
                                >
                                    Hapus
                                </a>
                            </td>
                        </tr>

                        <tr className="odd:bg-gray-50">
                            <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                                Bakso Goreng Asam Manis
                            </td>
                            <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                                Rp 17.000
                            </td>
                            <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                                Makanan Berat
                            </td>
                            <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                                25
                            </td>
                            <td className="py-2 flex justify-center flex-row gap-1">
                                <a
                                    href="#"
                                    className="inline-block rounded bg-sky-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
                                >
                                    Edit
                                </a>
                                <a
                                    href="#"
                                    className="inline-block rounded bg-rose-700 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
                                >
                                    Hapus
                                </a>
                            </td>
                        </tr>

                        <tr className="odd:bg-gray-50">
                            <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                                Cireng Karedok
                            </td>
                            <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                                Rp 17.000
                            </td>
                            <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                                Makanan Berat
                            </td>
                            <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                                25
                            </td>
                            <td className="py-2 flex justify-center flex-row gap-1">
                                <a
                                    href="#"
                                    className="inline-block rounded bg-sky-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
                                >
                                    Edit
                                </a>
                                <a
                                    href="#"
                                    className="inline-block rounded bg-rose-700 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
                                >
                                    Hapus
                                </a>
                            </td>
                        </tr>

                        <tr className="odd:bg-gray-50">
                            <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                                Cireng Karamel
                            </td>
                            <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                                Rp 17.000
                            </td>
                            <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                                Makanan Berat
                            </td>
                            <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                                25
                            </td>
                            <td className="py-2 flex justify-center flex-row gap-1">
                                <a
                                    href="#"
                                    className="inline-block rounded bg-sky-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
                                >
                                    Edit
                                </a>
                                <a
                                    href="#"
                                    className="inline-block rounded bg-rose-700 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
                                >
                                    Hapus
                                </a>
                            </td>
                        </tr>

                        <tr className="odd:bg-gray-50">
                            <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                                Es Teh Manis Jumbo
                            </td>
                            <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                                Rp 17.000
                            </td>
                            <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                                Makanan Berat
                            </td>
                            <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                                25
                            </td>
                            <td className="py-2 flex justify-center flex-row gap-1">
                                <a
                                    href="#"
                                    className="inline-block rounded bg-sky-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
                                >
                                    Edit
                                </a>
                                <a
                                    href="#"
                                    className="inline-block rounded bg-rose-700 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
                                >
                                    Hapus
                                </a>
                            </td>
                        </tr>

                        <tr className="odd:bg-gray-50">
                            <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                                Es Jeruk Asli Mandarin
                            </td>
                            <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                                Rp 17.000
                            </td>
                            <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                                Makanan Berat
                            </td>
                            <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                                25
                            </td>
                            <td className="py-2 flex justify-center flex-row gap-1">
                                <a
                                    href="#"
                                    className="inline-block rounded bg-sky-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
                                >
                                    Edit
                                </a>
                                <a
                                    href="#"
                                    className="inline-block rounded bg-rose-700 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
                                >
                                    Hapus
                                </a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ProductTable;
