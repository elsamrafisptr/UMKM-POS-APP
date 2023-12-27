"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { ProductType } from ".";
import { Dialog, DialogContent, DialogTrigger } from "../UI/dialog";

const DeleteProduct = ({ product }: { product: ProductType }) => {
    const [isLoading, setIsLoading] = useState(false);

    const router = useRouter();

    const handleDelete = async (productId: string) => {
        setIsLoading(true);
        await axios.delete(`/api/products/${productId}`);
        setIsLoading(false);
        router.refresh();
    };

    return (
        <Dialog>
            <DialogTrigger>
                <button className="flex items-center justify-center w-1/2 py-1.5 text-sm text-red-500 transition-colors duration-200 rounded shrink-0 sm:w-auto gap-x-2">Hapus</button>
            </DialogTrigger>
            <DialogContent>
                <h1>yakin mau dihapus</h1>
                {!isLoading ? (
                    <button
                        type="button"
                        onClick={() => handleDelete(product.id)}
                        className="btn btn-primary"
                    >
                        Delete
                    </button>
                ) : (
                    <button type="button" className="btn loading">
                        Deleting...
                    </button>
                )}
            </DialogContent>
        </Dialog>
    );
};

export default DeleteProduct;
