"use client";
import { useRouter } from "next/navigation";
import React, { FormEvent, useState } from "react";
import * as z from "zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signIn } from "next-auth/react";
import Link from "next/link";
import axios from "axios";
import Image from "next/image";

type FormData = {
    username: string;
    email: string;
    password: string;
    confirmPassword: string;
};

const FormSchema = z
    .object({
        username: z.string().min(1, "Nama Pengguna tidak boleh kosong").max(16),
        email: z
            .string()
            .min(1, "Email tidak boleh kosong")
            .email("Gunakan email yang valid"),
        password: z
            .string()
            .min(1, "Kata sandi tidak boleh kosong")
            .min(8, "Kata sandi minimal 8 karakter")
            .max(16, "Kata sandi maksimal sepanjang 16 karakter"),
        confirmPassword: z.string().min(1, "Konfirmasi kata sandi dibutuhkan"),
    })
    .refine((data) => data.password === data.confirmPassword, {
        path: ["confirmPassword"],
        message: "Kata sandi tidak sesuai",
    });

const EmployeeForm = () => {
    const router = useRouter();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormData>({
        resolver: zodResolver(FormSchema),
    });

    const onSubmit: SubmitHandler<FormData> = async (data) => {
        try {
            const headers = {
                "Content-Type": "application/json",
            };
            const jsonData = JSON.stringify(data);
            const response = await axios.post(
                "/api/employee/register",
                jsonData,
                {
                    headers,
                },
            );
            if (response.status) {
                console.log(response.data, response.status);
                router.refresh();
                router.push("/dashboard/management/employee");
            }
        } catch (error: any) {
            if (error.response.data.status == 404) {
                return alert(error.response.data.message);
            } else {
                return alert(error.response.data.errors);
            }
        }
    };

    return (
        <>
            <div className="grid grid-cols-1 py-12">
                <div className="px-6 mx-auto my-auto">
                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        noValidate
                        className="group flex flex-col justify-center items-center"
                    >
                        {/* Input Form Start */}
                        <div className="block mt-3 relative">
                            <label
                                htmlFor="username"
                                className="block font-medium text-gray-700 mb-1 after:content-['*'] after:ml-0.5 after:text-red-500"
                            >
                                Nama Pengguna
                            </label>
                            <input
                                id="username"
                                required
                                {...register("username")}
                                name="username"
                                type="text"
                                placeholder="Masukkan nama pengguna anda"
                                className="invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500 peer w-[405px] px-4 h-11 border border-slate-500 rounded focus:border-sky-600 focus:outline-none focus:ring focus:ring-sky-400 focus:ring-opacity-40"
                            />
                            <span className="opacity-0 mt-0.5"></span>
                        </div>
                        <div className="block mt-3 relative">
                            <label
                                htmlFor="email"
                                className="block font-medium text-gray-700 mb-1 after:content-['*'] after:ml-0.5 after:text-red-500"
                            >
                                Email
                            </label>
                            <input
                                id="email"
                                {...register("email")}
                                required
                                name="email"
                                type="email"
                                placeholder="Masukkan nama pengguna anda"
                                className="invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500 peer w-[405px] px-4 h-11 border border-slate-500 rounded focus:border-sky-600 focus:outline-none focus:ring focus:ring-sky-400 focus:ring-opacity-40"
                            />
                            <span className="opacity-0 mt-0.5"></span>
                        </div>
                        <div className="block mt-3 relative">
                            <label
                                htmlFor="password"
                                className="block font-medium text-gray-700 mb-1 after:content-['*'] after:ml-0.5 after:text-red-500"
                            >
                                Kata Sandi
                            </label>
                            <input
                                id="password"
                                {...register("password")}
                                required
                                name="password"
                                type="password"
                                placeholder="Masukkan nama pengguna anda"
                                className="invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500 peer w-[405px] px-4 h-11 border border-slate-500 rounded focus:border-sky-600 focus:outline-none focus:ring focus:ring-sky-400 focus:ring-opacity-40"
                            />
                            <span className="opacity-0 mt-0.5"></span>
                        </div>
                        <div className="block mt-3 relative">
                            <label
                                htmlFor="confirmPassword"
                                className="block font-medium text-gray-700 mb-1 after:content-['*'] after:ml-0.5 after:text-red-500"
                            >
                                Konfirmasi Kata Sandi
                            </label>
                            <input
                                id="confirmPassword"
                                {...register("confirmPassword")}
                                required
                                name="confirmPassword"
                                type="password"
                                placeholder="Masukkan nama pengguna anda"
                                className="invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500 peer w-[405px] px-4 h-11 border border-slate-500 rounded focus:border-sky-600 focus:outline-none focus:ring focus:ring-sky-400 focus:ring-opacity-40"
                            />
                            <span className="opacity-0 mt-0.5"></span>
                        </div>
                        {/* Input Form End */}

                        <div className="mt-2 flex gap-1 mx-auto justify-center items-center">
                            <input
                                type="checkbox"
                                name="privacypolicy"
                                id="privacypolicy"
                                required
                            />
                            <p className="text-slate-900 text-xs w-96">
                                Saya sudah membaca dan setuju dengan{" "}
                                <a
                                    href="#"
                                    className="text-sky-600 hover:underline"
                                >
                                    Kebijakan Privasi
                                </a>
                            </p>
                        </div>

                        <button
                            type="submit"
                            className="mt-6 group-invalid:pointer-events-none group-invalid:opacity-30 flex justify-center items-center text-center w-[405px] bg-sky-600 text-white font-semibold h-12 rounded hover:bg-sky-700 focus:border-sky-600 focus:outline-none focus:ring focus:ring-sky-400 focus:ring-opacity-40"
                        >
                            Buat Akun
                        </button>
                    </form>
                </div>
                {/* <SignUpForm/> */}
            </div>
        </>
    );
};

export default EmployeeForm;
