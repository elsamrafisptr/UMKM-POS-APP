"use client";

import { useState } from "react";
import { Eye, EyeClosed, ArrowLeft } from "@phosphor-icons/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import Image from "next/image";

const RegisterPage = () => {
    const Router = useRouter();
    const [data, setData] = useState({
        username: "",
        email: "",
        telnumber: "",
        password: "",
    });

    const [showPassword, setShowPassword] = useState(false);

    const togglePassword = () => {
        setShowPassword(!showPassword);
    };

    const inputs = [
        {
            id: 1,
            name: "username",
            type: "text",
            placeholder: "Contoh : Suparman The Last Boss",
            errorMessage:
                "Nama pengguna harus 3-16 karakter dan tidak berisi simbol!",
            label: "Nama Pengguna",
            pattern: "^[A-Za-z0-9]{3,16}$",
            required: true,
        },
        {
            id: 2,
            name: "email",
            type: "Email",
            placeholder: "Contoh : suparman@example.com",
            errorMessage: "Harus berupa email yang valid!",
            label: "Email",
            required: true,
        },
        {
            id: 3,
            name: "telnumber",
            type: "tel",
            placeholder: "Contoh : 08XXX atau 628XXX",
            errorMessage: "Nomor HP tidak sesuai! Pastikan nomor HP Indonesia!",
            pattern: "^(+62|62)?[s-]?0?8[1-9]{1}d{1}[s-]?d{4}[s-]?d{2,5}$",
            label: "No HP",
        },
        {
            id: 4,
            name: "password",
            type: `${showPassword ? "text" : "password"}`,
            placeholder: "Buat Kata Sandi",
            errorMessage:
                "Kata sandi harus 8-20 karakter dan minimal ada 1 huruf, 1 angka, dan 1 simbol!",
            label: "Kata Sandi",
            pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
            required: true,
        },
        // {
        //     id: 5,
        //     name: "confirmpassword",
        //     type: `${showPassword ? "text" : "password"}`,
        //     placeholder: "Konfirmasi Kata Sandi",
        //     errorMessage: "Kata sandi tidak sesuai!",
        //     label: "Konfirmasi Kata Sandi",
        //     pattern: '^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$',
        //     required: true,
        // },
    ];

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    // };

    // const onChange = (e) => {
    //     setValue({ ...values, [e.target.name]: e.target.value });
    // };

    const router = useRouter();
    const registerUser = async (event) => {
        event.preventDefault();
        const response = await fetch("/api/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username: data.username,
                email: data.email,
                telnumber: data.telnumber,
                password: data.password,
            }),
        });

        const userInfo = await response.json();
        console.log(userInfo);
        if (response.ok) {
            router.push("/dashboard");
        } else {
            console.error("Registration Failed");
        }
    };

    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 min-h-screen">
                <div className="hidden md:block w-full bg-slate-100 relative">
                    <Image src={"/img2.webp"} layout="fill" objectFit="cover" />
                </div>
                <div className="px-6 md:px-12 mx-auto my-auto">
                    <div className="w-full justify-between items-center h-12 flex gap-4">
                        <div className="flex items-center gap-3">
                            <Link className="md:hidden" href="/">
                                <ArrowLeft size={24} color="#171717" />
                            </Link>
                            <h1 className="text-xl font-bold">Buat Akun</h1>
                        </div>
                        <div className="text-right flex flex-col">
                            <p className="text-base">Sudah punya akun?</p>
                            <Link
                                href={"/signin"}
                                className="text-base text-sky-600 underline cursor-pointer"
                            >
                                Masuk ke Akun
                            </Link>
                        </div>
                    </div>
                    <form
                        onSubmit={registerUser}
                        noValidate
                        className="group flex flex-col justify-center items-center"
                    >
                        {inputs.map((input) => (
                            <label
                                key={input.id}
                                {...input}
                                htmlFor={input.name}
                                // onChange={onChange}
                                className="block mt-4 relative"
                            >
                                <span className="block text-base font-medium text-gray-600 mb-1 after:content-['*'] after:ml-0.5 after:text-red-500">
                                    {input.label}
                                </span>
                                <input
                                    {...input}
                                    value={data[input.name]}
                                    onChange={(event) => {
                                        setData({
                                            ...data,
                                            [event.target.name]:
                                                event.target.value,
                                        });
                                    }}
                                    className="invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500 peer w-[405px] px-4 h-11 border border-slate-500 rounded focus:border-sky-600 focus:outline-none focus:ring focus:ring-sky-400 focus:ring-opacity-40"
                                    placeholder={input.placeholder}
                                    // onChange={onChange}
                                />
                                <span
                                    onClick={togglePassword}
                                    className={`top-1/2 px-4 translate-y-0.5 text-sm absolute right-0 ${
                                        input.id === 4 ? "block" : "hidden"
                                    }`}
                                >
                                    {showPassword ? (
                                        <Eye
                                            size={16}
                                            color="#64748b"
                                            className="cursor-pointer"
                                        />
                                    ) : (
                                        <EyeClosed
                                            size={16}
                                            color="#64748b"
                                            className="cursor-pointer"
                                        />
                                    )}
                                </span>
                                <span className="mt-1 peer-[&:not(:placeholder-shown):not(:focus):invalid]:block hidden w-96 text-sm text-red-600">
                                    {input.errorMessage}
                                </span>
                            </label>
                        ))}

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

                    <div className="flex items-center justify-between mt-6">
                        <span className="w-1/5 border-b dark:border-gray-400 lg:w-1/5"></span>

                        <p
                            href="#"
                            className="text-base text-center text-gray-500"
                        >
                            Atau Buat Akun dengan
                        </p>

                        <span className="w-1/5 border-b dark:border-gray-400 lg:w-1/5"></span>
                    </div>
                    <div className="mt-6 flex justify-center items-center pb-6 gap-3 sm:gap-x-5">
                        <button
                            onClick={() => signIn("google")}
                            className="bg-white flex w-full justify-center items-center gap-2 rounded hover:bg-gray-100 duration-300 transition-colors border px-8 py-2.5"
                        >
                            <svg
                                className="w-5 h-5 sm:h-6 sm:w-6"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <g clipPath="url(#clip0_3033_94454)">
                                    <path
                                        d="M23.766 12.2764C23.766 11.4607 23.6999 10.6406 23.5588 9.83807H12.24V14.4591H18.7217C18.4528 15.9494 17.5885 17.2678 16.323 18.1056V21.1039H20.19C22.4608 19.0139 23.766 15.9274 23.766 12.2764Z"
                                        fill="#4285F4"
                                    />
                                    <path
                                        d="M12.2401 24.0008C15.4766 24.0008 18.2059 22.9382 20.1945 21.1039L16.3276 18.1055C15.2517 18.8375 13.8627 19.252 12.2445 19.252C9.11388 19.252 6.45946 17.1399 5.50705 14.3003H1.5166V17.3912C3.55371 21.4434 7.7029 24.0008 12.2401 24.0008Z"
                                        fill="#34A853"
                                    />
                                    <path
                                        d="M5.50253 14.3003C4.99987 12.8099 4.99987 11.1961 5.50253 9.70575V6.61481H1.51649C-0.18551 10.0056 -0.18551 14.0004 1.51649 17.3912L5.50253 14.3003Z"
                                        fill="#FBBC04"
                                    />
                                    <path
                                        d="M12.2401 4.74966C13.9509 4.7232 15.6044 5.36697 16.8434 6.54867L20.2695 3.12262C18.1001 1.0855 15.2208 -0.034466 12.2401 0.000808666C7.7029 0.000808666 3.55371 2.55822 1.5166 6.61481L5.50264 9.70575C6.45064 6.86173 9.10947 4.74966 12.2401 4.74966Z"
                                        fill="#EA4335"
                                    />
                                </g>
                                <defs>
                                    <clipPath id="clip0_3033_94454">
                                        <rect
                                            width="24"
                                            height="24"
                                            fill="white"
                                        />
                                    </clipPath>
                                </defs>
                            </svg>
                            <span>Google</span>
                        </button>
                    </div>
                </div>
                {/* <SignUpForm/> */}
            </div>
        </>
    );
};

export default RegisterPage;
