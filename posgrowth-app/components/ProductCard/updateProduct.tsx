"use client";
import { useState, SyntheticEvent } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { ProductType } from ".";
import {
    Dialog,
    DialogTrigger,
    DialogContent,
    DialogClose,
} from "../UI/dialog";

const UpdateProduct = ({ product }: { product: ProductType }) => {
    const [name, setName] = useState(product.name);
    const [category, setCategory] = useState(product.category);
    const [price, setPrice] = useState(product.price);
    const [stock, setStock] = useState(product.stock);
    const [isLoading, setIsLoading] = useState(false);

    const router = useRouter();

    const handleUpdate = async (e: SyntheticEvent) => {
        e.preventDefault();
        setIsLoading(true);
        await axios.patch(`/api/products/${product.id}`, {
            name: name,
            category: category,
            price: Number(price),
            stock: Number(stock),
        });
        setIsLoading(false);
        router.push("/dashboard/management/product");
        router.refresh();
    };

    return (
        <Dialog>
            <DialogTrigger>
                <button className="flex items-center justify-center w-1/2 py-1.5 text-sm text-blue-500 transition-colors duration-200 rounded shrink-0 sm:w-auto gap-x-2">
                    Edit
                </button>
            </DialogTrigger>
            <DialogContent className="max-w-xl">
                <form onSubmit={handleUpdate} className="flex flex-col gap-2">
                    <div className="w-full flex flex-col gap-1">
                        <label className="font-semibold text-sm">
                            Product Name
                        </label>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className=" px-5 py-2 border rounded"
                            placeholder="Nama produk anda"
                        />
                    </div>
                    <div className="w-full flex flex-col gap-1">
                        <label className="font-semibold text-sm">
                            Kategory
                        </label>
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
                            onChange={(e) => setPrice(Number(e.target.value))}
                            className="px-5 py-2 border rounded"
                            placeholder="Harga jual produk"
                        />
                    </div>
                    <div className="w-full flex flex-col gap-1">
                        <label className="font-semibold text-sm">Stok</label>
                        <input
                            type="text"
                            value={stock}
                            onChange={(e) => setStock(Number(e.target.value))}
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
                                Update
                            </button>
                        ) : (
                            <button
                                type="button"
                                className="px-5 py-2 bg-blue-600 text-white w-auto flex justify-center rounded"
                            >
                                Updating...
                            </button>
                        )}
                    </div>
                </form>
            </DialogContent>
        </Dialog>
    );
};

export default UpdateProduct;
