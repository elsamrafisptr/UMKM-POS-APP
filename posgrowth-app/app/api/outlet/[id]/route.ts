import { Outlet, Product } from "@prisma/client";
import prisma from "@/libs/prismaClient";
import { NextResponse } from "next/server";

export const PATCH = async (
    request: Request,
    { params }: { params: { id: string } },
) => {
    const body: Outlet = await request.json();
    const outlet = await prisma.outlet.update({
        where: { id: params.id },
        data: {
            name: body.name,
            address: body.address,
            contact: body.contact,
        },
    });
    return NextResponse.json(outlet, { status: 200 });
};

export const DELETE = async (
    request: Request,
    { params }: { params: { id: string } },
) => {
    const outlet = await prisma.outlet.delete({
        where: { id: params.id },
    });
    return NextResponse.json(outlet, { status: 200 });
};
