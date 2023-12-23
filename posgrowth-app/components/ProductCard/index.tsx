import Image from "next/image";
import React from "react";
import { ProductDataType } from "@/utils/dummyProductData";

const ProductCard = (props: ProductDataType) => {
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
                <h1 className="font-medium">{props.title}</h1>
                <p className="text-sm text-gray-700">{props.category}</p>
                <h2 className="font-bold text-lg text-green-800">
                    Rp {`${props.price}`}
                </h2>
                <p className="text-sm">Stok: {`${props.stock}`}</p>
            </span>
        </div>
    );
};

export default ProductCard;
