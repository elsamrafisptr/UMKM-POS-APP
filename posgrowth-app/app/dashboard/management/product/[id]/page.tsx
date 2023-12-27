import { ProductType } from "@/components/ProductCard";
import React from "react";
import prisma from "@/libs/prismaClient";

const ProductDetail = async ({params}: {params: ProductType}) => {
    const product = await prisma.product.findFirst({
        where: {id: params.id}
    })
    return <div>Ini produk {params.id} namanya {product?.name}</div>;
};

export default ProductDetail;
