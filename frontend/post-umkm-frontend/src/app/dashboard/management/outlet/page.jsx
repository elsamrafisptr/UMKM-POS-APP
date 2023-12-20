import Link from "next/link";

const ManagementOutletPage = () => {
    const data = [
        { name: "Anom", age: 19, gender: "Male" },
        { name: "Megha", age: 19, gender: "Female" },
        { name: "Subham", age: 25, gender: "Male" },
        { name: "Subham", age: 25, gender: "Male" },
        { name: "Subham", age: 25, gender: "Male" },
        { name: "Subham", age: 25, gender: "Male" },
    ];

    return (
        <>
            <div className="p-6">
                {/* kelompok bagian atas */}
                <div className="flex justify-between items-center">
                    <h1 className="text-2xl font-bold">Judul</h1>
                    <Link
                        href={"/dashboard"}
                        className="p-2 rounded bg-blue-600 text-white"
                    >
                        Tambah Outlet
                    </Link>
                </div>
                {/* kelompok bagian tengah atau pencarian */}
                <div className="w-full mt-6 grid grid-cols-4 gap-4">
                    <input
                        type="text"
                        placeholder="Pencarian data"
                        className="border border-slate-600 col-span-3 rounded h-10 placeholder:px-3"
                    />
                    <button className="col-span-1 bg-black rounded text-white">
                        Filter
                    </button>
                </div>
                {/* bagian tabel */}
                <div className="mt-6">
                    <table className="w-full mt-6 rounded">
                        <tr className="bg-sky-600 rounded-t">
                            <th className="rounded-tl-md p-2 text-white">
                                Name
                            </th>
                            <th className="text-white">Age</th>
                            <th className="rounded-tr-md text-white">Gender</th>
                        </tr>
                        {data.map((val, key) => {
                            return (
                                <tr key={key} className="bg-sky-50">
                                    <td className="border border-sky-600 px-2 py-1">
                                        {val.name}
                                    </td>
                                    <td className="border border-sky-600 px-2">
                                        {val.age}
                                    </td>
                                    <td className="border border-sky-600 px-2">
                                        {val.gender}
                                    </td>
                                </tr>
                            );
                        })}
                    </table>
                </div>
            </div>
        </>
    );
};

export default ManagementOutletPage;
