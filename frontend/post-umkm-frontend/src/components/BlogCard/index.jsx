import Link from "next/link";
import React from "react";

const BlogCard = () => {
    return (
        <Link href="#" className="group relative block bg-black">
            <img
                alt="Developer"
                src="https://images.unsplash.com/photo-1603871165848-0aa92c869fa1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80"
                className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
            />

            <div className="relative p-2 sm:p-6 lg:p-8">
                <div className="mt-32 sm:mt-48 lg:mt-64">
                    <div className="translate-y-4 transform transition-all">
                        <h1 className="font-medium text-white">Judul</h1>
                        <p className="text-sm text-white">
                            Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit. Omnis perferendis hic asperiores.
                        </p>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default BlogCard;
