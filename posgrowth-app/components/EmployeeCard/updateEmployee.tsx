"use client";
import { useState, SyntheticEvent } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import {
    Dialog,
    DialogTrigger,
    DialogContent,
    DialogClose,
} from "../UI/dialog";
import { EmployeeType } from "./deleteEmployee";

const UpdateEmployee = ({ employee }: { employee: EmployeeType }) => {
    const [name, setName] = useState(employee.username);
    const [email, setEmail] = useState(employee.email);
    const [isLoading, setIsLoading] = useState(false);

    const router = useRouter();

    const handleUpdate = async (e: SyntheticEvent) => {
        e.preventDefault();
        setIsLoading(true);
        await axios.patch(`/api/employee/${employee.id}`, {
            name: name,
            email: email,
        });
        setIsLoading(false);
        router.push("/dashboard/management/employee");
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
                    <div className="w-full flex flex-col mt-3 relative">
                        <label
                            htmlFor="username"
                            className="block font-medium text-gray-700 mb-1 after:content-['*'] after:ml-0.5 after:text-red-500"
                        >
                            Nama Pengguna
                        </label>
                        <input
                            id="username"
                            required
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            name="username"
                            type="text"
                            placeholder="Masukkan nama pengguna anda"
                            className="invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500 peer w-full px-4 h-11 border border-slate-500 rounded focus:border-sky-600 focus:outline-none focus:ring focus:ring-sky-400 focus:ring-opacity-40"
                        />
                        <span className="opacity-0 mt-0.5"></span>
                    </div>
                    <div className="w-full flex flex-col mt-3 relative">
                        <label
                            htmlFor="email"
                            className="block font-medium text-gray-700 mb-1 after:content-['*'] after:ml-0.5 after:text-red-500"
                        >
                            Email
                        </label>
                        <input
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            name="email"
                            type="email"
                            placeholder="Masukkan nama pengguna anda"
                            className="w-full invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500 peer px-4 h-11 border border-slate-500 rounded focus:border-sky-600 focus:outline-none focus:ring focus:ring-sky-400 focus:ring-opacity-40"
                        />
                        <span className="opacity-0 mt-0.5"></span>
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

export default UpdateEmployee;
