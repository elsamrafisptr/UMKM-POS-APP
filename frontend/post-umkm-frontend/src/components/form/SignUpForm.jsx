"use client";

// <div className="px-6 md:px-12 mx-auto my-auto">
//     <div className="w-full justify-between items-center h-12 flex gap-4">
//         <div className="flex items-center gap-3">
//             <Link className="md:hidden" href="/">
//                 <ArrowLeft size={24} color="#171717" />
//             </Link>
//             <h1 className="text-xl font-bold">Buat Akun</h1>
//         </div>
//         <div className="text-right flex flex-col">
//             <p className="text-base">Sudah punya akun?</p>
//             <Link
//                 href={"/signin"}
//                 className="text-base text-sky-600 underline cursor-pointer"
//             >
//                 Masuk ke Akun
//             </Link>
//         </div>
//     </div>
//     <form
//         onSubmit={handleSubmit}
//         noValidate
//         className="group flex flex-col justify-center items-center"
//     >
//         {inputs.map((input) => (
//             <label
//                 key={input.id}
//                 {...input}
//                 value={values[inputs.name]}
//                 // onChange={onChange}
//                 className="block mt-4 relative"
//             >
//                 <span className="block text-base font-medium text-gray-600 mb-1 after:content-['*'] after:ml-0.5 after:text-red-500">
//                     {input.label}
//                 </span>
//                 <input
//                     {...input}
//                     className="invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500 peer w-[405px] px-4 h-11 border border-slate-500 rounded focus:border-sky-600 focus:outline-none focus:ring focus:ring-sky-400 focus:ring-opacity-40"
//                     placeholder={input.placeholder}
//                     // onChange={onChange}
//                 />
//                 <span
//                     onClick={togglePassword}
//                     className={`top-1/2 px-4 translate-y-0.5 text-sm absolute right-0 ${
//                         input.id === 5 || input.id === 4
//                             ? "block"
//                             : "hidden"
//                     }`}
//                 >
//                     {showPassword ? (
//                         <Eye
//                             size={16}
//                             color="#64748b"
//                             className="cursor-pointer"
//                         />
//                     ) : (
//                         <EyeClosed
//                             size={16}
//                             color="#64748b"
//                             className="cursor-pointer"
//                         />
//                     )}
//                 </span>
//                 <span className="mt-1 peer-[&:not(:placeholder-shown):not(:focus):invalid]:block hidden w-96 text-sm text-red-600">
//                     {input.errorMessage}
//                 </span>
//             </label>
//         ))}

//         <div className="mt-2 flex gap-1 mx-auto justify-center items-center">
//             <input
//                 type="checkbox"
//                 name="privacypolicy"
//                 id="privacypolicy"
//                 required
//             />
//             <p className="text-slate-900 text-xs w-96">
//                 Saya sudah membaca dan setuju dengan{" "}
//                 <a href="#" className="text-sky-600 hover:underline">
//                     Kebijakan Privasi
//                 </a>
//             </p>
//         </div>

//         <button
//             type="submit"
//             className="mt-6 group-invalid:pointer-events-none group-invalid:opacity-30 w-[405px] bg-sky-600 text-white font-semibold h-12 rounded hover:bg-sky-700 focus:border-sky-600 focus:outline-none focus:ring focus:ring-sky-400 focus:ring-opacity-40"
//         >
//             Buat Akun
//         </button>
//     </form>

//     <div class="flex items-center justify-between mt-6">
//         <span class="w-1/5 border-b dark:border-gray-400 lg:w-1/5"></span>

//         <p href="#" class="text-base text-center text-gray-500">
//             Atau Buat Akun dengan
//         </p>

//         <span class="w-1/5 border-b dark:border-gray-400 lg:w-1/5"></span>
//     </div>
//     <div class="mt-6 flex justify-center items-center pb-6 gap-3 sm:gap-x-5">
//         <Link
//             href={"/api/auth/signin"}
//             class="bg-white flex w-1/2 justify-center items-center gap-2 rounded hover:bg-gray-100 duration-300 transition-colors border px-8 py-2.5"
//         >
//             <svg
//                 class="w-5 h-5 sm:h-6 sm:w-6"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 xmlns="http://www.w3.org/2000/svg"
//             >
//                 <g clip-path="url(#clip0_3033_94454)">
//                     <path
//                         d="M23.766 12.2764C23.766 11.4607 23.6999 10.6406 23.5588 9.83807H12.24V14.4591H18.7217C18.4528 15.9494 17.5885 17.2678 16.323 18.1056V21.1039H20.19C22.4608 19.0139 23.766 15.9274 23.766 12.2764Z"
//                         fill="#4285F4"
//                     />
//                     <path
//                         d="M12.2401 24.0008C15.4766 24.0008 18.2059 22.9382 20.1945 21.1039L16.3276 18.1055C15.2517 18.8375 13.8627 19.252 12.2445 19.252C9.11388 19.252 6.45946 17.1399 5.50705 14.3003H1.5166V17.3912C3.55371 21.4434 7.7029 24.0008 12.2401 24.0008Z"
//                         fill="#34A853"
//                     />
//                     <path
//                         d="M5.50253 14.3003C4.99987 12.8099 4.99987 11.1961 5.50253 9.70575V6.61481H1.51649C-0.18551 10.0056 -0.18551 14.0004 1.51649 17.3912L5.50253 14.3003Z"
//                         fill="#FBBC04"
//                     />
//                     <path
//                         d="M12.2401 4.74966C13.9509 4.7232 15.6044 5.36697 16.8434 6.54867L20.2695 3.12262C18.1001 1.0855 15.2208 -0.034466 12.2401 0.000808666C7.7029 0.000808666 3.55371 2.55822 1.5166 6.61481L5.50264 9.70575C6.45064 6.86173 9.10947 4.74966 12.2401 4.74966Z"
//                         fill="#EA4335"
//                     />
//                 </g>
//                 <defs>
//                     <clipPath id="clip0_3033_94454">
//                         <rect width="24" height="24" fill="white" />
//                     </clipPath>
//                 </defs>
//             </svg>
//             <span>Google</span>
//         </Link>

//         <button class="bg-[#1877F2] flex w-1/2 gap-2 justify-center items-center rounded hover:bg-[#1877F2]/80 duration-300 transition-colors border border-transparent px-8 py-2.5">
//             <svg
//                 class="w-5 h-5 sm:h-6 sm:w-6"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 xmlns="http://www.w3.org/2000/svg"
//             >
//                 <g clip-path="url(#clip0_3033_94669)">
//                     <path
//                         d="M24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 17.9895 4.3882 22.954 10.125 23.8542V15.4688H7.07812V12H10.125V9.35625C10.125 6.34875 11.9166 4.6875 14.6576 4.6875C15.9701 4.6875 17.3438 4.92188 17.3438 4.92188V7.875H15.8306C14.34 7.875 13.875 8.80008 13.875 9.75V12H17.2031L16.6711 15.4688H13.875V23.8542C19.6118 22.954 24 17.9895 24 12Z"
//                         fill="white"
//                     />
//                 </g>
//                 <defs>
//                     <clipPath id="clip0_3033_94669">
//                         <rect width="24" height="24" fill="white" />
//                     </clipPath>
//                 </defs>
//             </svg>
//             <span className="text-white">Facebook</span>
//         </button>
//     </div>
// </div>

import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
// import {
//     Form,
//     FormControl,
//     FormField,
//     FormItem,
//     FormLabel,
//     FormMessage,
// } from "../ui/form";
import { Button } from "../ui/button";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../ui/input";
import Link from "next/link";
import { data } from "autoprefixer";
import { useRouter } from "next/navigation";

const FormSchema = z
    .object({
        username: z.string().min(3, {
            message: "Username must be at least 2 characters",
        }),
        email: z.string().min(1, { message: "Email is required" }).email({
            message: "Must be a valid email",
        }),
        password: z
            .string()
            .min(6, { message: "Password must be atleast 6 characters" }),
        confirmPassword: z
            .string()
            .min(1, { message: "Confirm Password is required" }),
        terms: z.literal(true, {
            errorMap: () => ({
                message: "You must accept Terms and Conditions",
            }),
        }),
    })
    .refine((data) => data.password === data.confirmPassword, {
        path: ["confirmPassword"],
        message: "Password don't match",
    });

const SignUpForm = () => {
    // const {
    //     register,
    //     formState: { errors },
    //     handleSubmit,
    // } = useForm();

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            username: "",
            email: "",
            password: "",
            confirmPassword: "",
        },
    });

    const router = useRouter();
    const onSubmit = async (values) => {
        const response = await fetch("api/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username: values.username,
                email: values.email,
                password: values.password,
            }),
        });
        if (response.ok) {
            router.push("/dashboard");
        } else {
            console.error("Registration Failed");
        }
    };
    return (
        <>
            {/* <Form {...form}>
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="space-y-8"
                >
                    <FormField
                        control={form.control}
                        name="username"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Username</FormLabel>
                                <FormControl>
                                    <Input placeholder="shadcn" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button type="submit">Submit</Button>
                </form>
            </Form> */}
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="group flex flex-col justify-center items-center"
            >
                <label
                    htmlFor="username"
                    className="block text-left mt-4 relative"
                >
                    <span className="block text-base font-medium text-gray-600 mb-1 after:content-['*'] after:ml-0.5 after:text-red-500">
                        Username
                    </span>
                    <input
                        type="text"
                        {...register("username", {
                            required: true,
                            pattern: "^[A-Za-z0-9]{3,16}$",
                        })}
                        aria-invalid={errors.firstName ? "true" : "false"}
                        className="invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500 peer w-[405px] px-4 h-11 border border-slate-500 rounded focus:border-sky-600 focus:outline-none focus:ring focus:ring-sky-400 focus:ring-opacity-40"
                        placeholder="Username"
                    />
                    {errors.firstName?.type === "required" && (
                        <p role="alert">First name is required</p>
                    )}
                </label>

                <label
                    htmlFor="username"
                    className="block text-left mt-4 relative"
                >
                    <span className="block text-base font-medium text-gray-600 mb-1 after:content-['*'] after:ml-0.5 after:text-red-500">
                        Email
                    </span>
                    <input
                        type="email"
                        {...register("email", { required: true })}
                        aria-invalid={errors.firstName ? "true" : "false"}
                        className="invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500 peer w-[405px] px-4 h-11 border border-slate-500 rounded focus:border-sky-600 focus:outline-none focus:ring focus:ring-sky-400 focus:ring-opacity-40"
                        placeholder="Username"
                    />
                    {errors.firstName?.type === "required" && (
                        <p role="alert">First name is required</p>
                    )}
                </label>

                <label
                    htmlFor="username"
                    className="block text-left mt-4 relative"
                >
                    <span className="block text-base font-medium text-gray-600 mb-1 after:content-['*'] after:ml-0.5 after:text-red-500">
                        Kata Sandi
                    </span>
                    <input
                        type="password"
                        {...register("password", {
                            required: true,
                            pattern:
                                "^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$",
                        })}
                        aria-invalid={errors.firstName ? "true" : "false"}
                        className="invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500 peer w-[405px] px-4 h-11 border border-slate-500 rounded focus:border-sky-600 focus:outline-none focus:ring focus:ring-sky-400 focus:ring-opacity-40"
                        placeholder="Username"
                    />
                    {errors.firstName?.type === "required" && (
                        <p role="alert">First name is required</p>
                    )}
                </label>

                <label
                    htmlFor="username"
                    className="block text-left mt-4 relative"
                >
                    <span className="block text-base font-medium text-gray-600 mb-1 after:content-['*'] after:ml-0.5 after:text-red-500">
                        Verifikasi Kata Sandi
                    </span>
                    <input
                        type="password"
                        {...register("re-password", {
                            required: true,
                            pattern:
                                "^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$",
                        })}
                        aria-invalid={errors.firstName ? "true" : "false"}
                        className="invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500 peer w-[405px] px-4 h-11 border border-slate-500 rounded focus:border-sky-600 focus:outline-none focus:ring focus:ring-sky-400 focus:ring-opacity-40"
                        placeholder="Username"
                    />
                    {errors.firstName?.type === "required" && (
                        <p role="alert">First name is required</p>
                    )}
                </label>

                <button
                    type="submit"
                    className="mt-6 group-invalid:pointer-events-none group-invalid:opacity-30 w-[405px] bg-sky-600 text-white font-semibold h-12 rounded hover:bg-sky-700 focus:border-sky-600 focus:outline-none focus:ring focus:ring-sky-400 focus:ring-opacity-40"
                >
                    Submit
                </button>
            </form>
        </>
    );
};

export default SignUpForm;
