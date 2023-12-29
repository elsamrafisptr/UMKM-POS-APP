"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const ProductForm = () => {
    const router = useRouter();

    const [name, setName] = useState("");
    const [category, setCategory] = useState("");
    const [price, setPrice] = useState("");
    const [stock, setStock] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const submitData = async (e: React.SyntheticEvent) => {
        e.preventDefault();
        setIsLoading(true);
        await axios.post("/api/products", {
            name: name,
            category: category,
            price: Number(price),
            stock: Number(stock),
        });
        setIsLoading(false);
        setName("");
        setCategory("");
        setPrice("");
        setStock("");
        router.refresh();
    };

    return (
        <>
            <form onSubmit={submitData} className="flex flex-col gap-2">
                <div className="w-full flex flex-col gap-1">
                    <label className="font-semibold text-sm">Nama Produk</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className=" px-5 py-2 border rounded"
                        placeholder="Nama produk anda"
                    />
                </div>
                <div className="w-full flex flex-col gap-1">
                    <label className="font-semibold text-sm">Kategori</label>
                    <input
                        type="text"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        className="px-5 py-2 border rounded"
                        placeholder="Kategori produk"
                    />
                </div>
                <div className="w-full flex flex-col gap-1">
                    <label className="font-semibold text-sm">Harga</label>
                    <input
                        type="text"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        className="px-5 py-2 border rounded"
                        placeholder="Harga jual produk"
                    />
                </div>
                <div className="w-full flex flex-col gap-1">
                    <label className="font-semibold text-sm">Stok</label>
                    <input
                        type="text"
                        value={stock}
                        onChange={(e) => setStock(e.target.value)}
                        className="px-5 py-2 border rounded"
                        placeholder="Jumlah stok tersedia"
                    />
                </div>

                <div className="mt-2 w-full flex justify-end">
                    {!isLoading ? (
                        <button
                            type="submit"
                            className="px-5 py-2 bg-blue-600 text-white w-auto flex justify-center rounded"
                        >
                            Simpan
                        </button>
                    ) : (
                        <button
                            type="button"
                            className="px-5 py-2 bg-blue-600 text-white w-auto flex justify-center rounded"
                        >
                            Menyimpan...
                        </button>
                    )}
                </div>
            </form>
        </>
    );
};

export default ProductForm;
