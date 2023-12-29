import { Product } from "@prisma/client";
import prisma from "@/libs/prismaClient";
import { NextResponse } from "next/server";

export const PATCH = async (
    request: Request,
    { params }: { params: { id: string } },
) => {
    const body: Product = await request.json();
    const product = await prisma.product.update({
        where: { id: params.id },
        data: {
            name: body.name,
            category: body.category,
            price: body.price,
            stock: body.stock,
        },
    });
    return NextResponse.json(product, { status: 200 });
};

export const DELETE = async (
    request: Request,
    { params }: { params: { id: string } },
) => {
    const product = await prisma.product.delete({
        where: { id: params.id },
    });
    return NextResponse.json(product, { status: 200 });
};
