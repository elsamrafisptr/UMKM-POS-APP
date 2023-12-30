"use client";
import { useState, SyntheticEvent } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { OutletType } from ".";
import {
    Dialog,
    DialogTrigger,
    DialogContent,
    DialogClose,
} from "../UI/dialog";

const UpdateOutlet = ({ outlet }: { outlet: OutletType }) => {
    const [name, setName] = useState(outlet.name);
    const [address, setAddress] = useState(outlet.address);
    const [contact, setContact] = useState(outlet.contact)
    const [isLoading, setIsLoading] = useState(false);

    const router = useRouter();

    const handleUpdate = async (e: SyntheticEvent) => {
        e.preventDefault();
        setIsLoading(true);
        await axios.patch(`/api/outlet/${outlet.id}`, {
            name: name,
            address: address,
            contact: contact
        });
        setIsLoading(false);
        router.push("/dashboard/management/outlet");
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
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        className="px-5 py-2 border rounded"
                        placeholder="Kategori produk"
                    />
                </div>
                <div className="w-full flex flex-col gap-1">
                    <label className="font-semibold text-sm">Harga</label>
                    <input
                        type="text"
                        value={contact}
                        onChange={(e) => setContact(e.target.value)}
                        className="px-5 py-2 border rounded"
                        placeholder="Harga jual produk"
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
            </DialogContent>
        </Dialog>
    );
};

export default UpdateOutlet;
