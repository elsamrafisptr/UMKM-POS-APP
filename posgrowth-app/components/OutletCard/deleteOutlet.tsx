"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { Dialog, DialogContent, DialogTrigger } from "../UI/dialog";
import { OutletType } from ".";

const DeleteOutlet = ({ outlet }: { outlet: OutletType }) => {
    const [isLoading, setIsLoading] = useState(false);

    const router = useRouter();

    const handleDelete = async (outletId: string) => {
        setIsLoading(true);
        await axios.delete(`/api/outlet/${outletId}`);
        setIsLoading(false);
        router.refresh();
    };

    return (
        <Dialog>
            <DialogTrigger>
                <button className="flex items-center justify-center w-1/2 py-1.5 text-sm text-red-500 transition-colors duration-200 rounded shrink-0 sm:w-auto gap-x-2">
                    Hapus
                </button>
            </DialogTrigger>
            <DialogContent>
                <h1 className="">
                    Apa anda yakin untuk menghapus{" "}
                    <span className="font-bold">{outlet.name}</span> ?
                </h1>
                <div className="mt-2 w-full flex justify-center">
                    {!isLoading ? (
                        <button
                            type="button"
                            onClick={() => handleDelete(outlet.id)}
                            className="px-5 py-2 bg-red-600 text-white w-auto flex justify-center rounded"
                        >
                            Delete
                        </button>
                    ) : (
                        <button
                            type="button"
                            className="px-5 py-2 bg-red-600 text-white w-auto flex justify-center rounded"
                        >
                            Deleting...
                        </button>
                    )}
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default DeleteOutlet;
