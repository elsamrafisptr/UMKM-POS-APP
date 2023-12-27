"use client";

import Image from "next/image";
import React, { useState } from "react";
import { ProductDataType } from "@/utils/dummyProductData";
import { usePathname, useRouter } from "next/navigation";
import axios from "axios";
import Link from "next/link";
import DeleteProduct from "./deleteProduct";
import UpdateProduct from "./updateProduct";

export type ProductType = {
    id: string;
    name: string;
    category: string;
    image: string;
    price: number;
    stock: number;
};

const ProductCard = (props: ProductType) => {
    const [isLoading, setIsLoading] = useState(false);

    const pathName = usePathname();
    const router = useRouter();
    const handleDelete = async (productId: number) => {
        setIsLoading(true);
        await axios.delete(`/api/products/${productId}`);
        setIsLoading(false);
        router.refresh();
    };

    return (
        <div className="p-4 bg-white grid grid-cols-3 gap-2 rounded">
            <span className="col-span-1 relative h-full w-full">
                <Image
                    src={"/img3.webp"}
                    alt=""
                    layout="fill"
                    objectFit="cover"
                    objectPosition="center"
                />
            </span>
            <span className="flex flex-col gap-0.5 col-span-2">
                <h1 className="font-medium">{props.name}</h1>
                <p className="text-sm text-gray-700">{props.category}</p>
                <h2 className="font-bold text-lg text-green-800">
                    Rp {`${props.price}`}
                </h2>
                <p className="text-sm">Stok: {`${props.stock}`}</p>
                <span className="flex flex-row gap-4 justify-end pr-2">
                    <UpdateProduct product={props} />
                    <DeleteProduct product={props} />
                </span>
            </span>
        </div>
    );
};

export default ProductCard;
