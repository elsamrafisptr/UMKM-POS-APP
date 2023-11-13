import { useState } from "react"
import { Eye, EyeClosed, ArrowLeft } from "@phosphor-icons/react"

export default function Login() {
    const [values, setValue] = useState({
        Email: "",
        password: "",
    })

    const [showPassword, setShowPassword] = useState(false)

    const togglePassword = () => {
        setShowPassword(!showPassword)
    }

    const inputs = [
        {
            id: 11,
            name: "Email",
            type: "Email",
            placeholder: "Contoh : suparman@example.com",
            errorMessage: "Harus berupa email yang valid!",
            label: "Email",
            required: true,
        },
        {
            id: 12,
            name: "password",
            type: `${showPassword ? "text" : "password"}`,
            placeholder: "Masukkan Kata Sandi",
            errorMessage: "Kata sandi harus 8-20 karakter dan minimal ada 1 huruf, 1 angka, dan 1 simbol!",
            label: "Kata Sandi",
            pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
            required: true,
        },
    ]

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    const onChange = (e) => {
        setValue({ ...values, [e.target.name]: e.target.value })
    }

    console.log(values)

    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 min-h-screen">
                <div className="hidden md:block bg-[url(../../public/bg-1.webp)] bg-cover"  ></div>
                <div className="px-6 md:px-12 mx-auto mt-4">
                    <div className="w-full justify-between items-center h-12 flex gap-4">
                        <div className="flex items-center gap-3">
                            <a className="md:hidden" href="/"><ArrowLeft size={24} color="#171717" /></a>
                            <h1 className="text-xl font-bold">Masuk Akun</h1>
                        </div>
                        <div className="text-right flex flex-col">
                            <p className="text-base">Belum punya akun?</p>
                            <a href="/register" className="text-base text-sky-600 underline cursor-pointer">Daftar Akun</a>
                        </div>
                    </div>
                    <form onSubmit={handleSubmit} noValidate className="group flex flex-col justify-center items-center mt-4">
                        {inputs.map((input) => (
                            <label key={input.id} {...input} value={values[inputs.name]} onChange={onChange} className="block mt-4 relative">
                                <span className="block text-base font-medium text-gray-600 mb-1">{input.label}</span>
                                <input {...input} className="invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500 peer w-[405px] px-4 h-11 border border-slate-500 rounded focus:border-sky-600 focus:outline-none focus:ring focus:ring-sky-400 focus:ring-opacity-40" placeholder={input.placeholder} onChange={onChange} />
                                <span onClick={togglePassword} className={`top-1/2 px-4 translate-y-0.5 text-sm absolute right-0 ${input.id === 12 ? 'block' : 'hidden'}`}>{showPassword ? <Eye size={16} color="#64748b" className="cursor-pointer" /> : <EyeClosed size={16} color="#64748b" className="cursor-pointer" />}</span>
                                <span className="mt-1 peer-[&:not(:placeholder-shown):not(:focus):invalid]:block hidden w-96 text-sm text-red-600">{input.errorMessage}</span>
                            </label>
                        ))}

                        <div className="mt-2 flex justify-between w-full items-center">
                            <div className="flex justify-center items-center gap-2">
                                <input type="checkbox" name="privacypolicy" id="privacypolicy" required />
                                <p className="text-slate-900 text-base">Ingat Saya</p>
                            </div>
                            <div className="flex justify-center items-center">
                                <a href="/" className="text-base text-sky-600 underline cursor-pointer">Lupa Kata Sandi?</a>
                            </div>
                        </div>

                        <button type="submit" className="mt-6 group-invalid:pointer-events-none group-invalid:opacity-30 w-[405px] bg-sky-600 text-white font-semibold h-12 rounded hover:bg-sky-700 focus:border-sky-600 focus:outline-none focus:ring focus:ring-sky-400 focus:ring-opacity-40">Masuk</button>
                    </form>

                    <div class="flex items-center justify-between mt-12">
                        <span class="w-1/5 border-b dark:border-gray-400 lg:w-1/5"></span>

                        <p class="text-base text-center text-gray-500 uppercase dark:text-gray-400">
                            Atau Masuk Akun dengan
                        </p>

                        <span class="w-1/5 border-b dark:border-gray-400 lg:w-1/5"></span>
                    </div>
                    <div class="mt-6 flex justify-center items-center pb-6 gap-3 sm:gap-x-5">
                        <button class="bg-white flex w-1/2 justify-center items-center gap-2 rounded hover:bg-gray-100 duration-300 transition-colors border px-8 py-2.5">
                            <svg class="w-5 h-5 sm:h-6 sm:w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_3033_94454)">
                                    <path d="M23.766 12.2764C23.766 11.4607 23.6999 10.6406 23.5588 9.83807H12.24V14.4591H18.7217C18.4528 15.9494 17.5885 17.2678 16.323 18.1056V21.1039H20.19C22.4608 19.0139 23.766 15.9274 23.766 12.2764Z" fill="#4285F4" />
                                    <path d="M12.2401 24.0008C15.4766 24.0008 18.2059 22.9382 20.1945 21.1039L16.3276 18.1055C15.2517 18.8375 13.8627 19.252 12.2445 19.252C9.11388 19.252 6.45946 17.1399 5.50705 14.3003H1.5166V17.3912C3.55371 21.4434 7.7029 24.0008 12.2401 24.0008Z" fill="#34A853" />
                                    <path d="M5.50253 14.3003C4.99987 12.8099 4.99987 11.1961 5.50253 9.70575V6.61481H1.51649C-0.18551 10.0056 -0.18551 14.0004 1.51649 17.3912L5.50253 14.3003Z" fill="#FBBC04" />
                                    <path d="M12.2401 4.74966C13.9509 4.7232 15.6044 5.36697 16.8434 6.54867L20.2695 3.12262C18.1001 1.0855 15.2208 -0.034466 12.2401 0.000808666C7.7029 0.000808666 3.55371 2.55822 1.5166 6.61481L5.50264 9.70575C6.45064 6.86173 9.10947 4.74966 12.2401 4.74966Z" fill="#EA4335" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_3033_94454">
                                        <rect width="24" height="24" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                            <span>Google</span>
                        </button>

                        <button class="bg-[#1877F2] flex w-1/2 gap-2 justify-center items-center rounded hover:bg-[#1877F2]/80 duration-300 transition-colors border border-transparent px-8 py-2.5">
                            <svg class="w-5 h-5 sm:h-6 sm:w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_3033_94669)">
                                    <path d="M24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 17.9895 4.3882 22.954 10.125 23.8542V15.4688H7.07812V12H10.125V9.35625C10.125 6.34875 11.9166 4.6875 14.6576 4.6875C15.9701 4.6875 17.3438 4.92188 17.3438 4.92188V7.875H15.8306C14.34 7.875 13.875 8.80008 13.875 9.75V12H17.2031L16.6711 15.4688H13.875V23.8542C19.6118 22.954 24 17.9895 24 12Z" fill="white" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_3033_94669">
                                        <rect width="24" height="24" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                            <span className="text-white">Facebook</span>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}
