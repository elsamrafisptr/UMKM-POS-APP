import { User } from "@prisma/client";
import prisma from "@/libs/prismaClient";
import { NextResponse } from "next/server";

export const PATCH = async (
    request: Request,
    { params }: { params: { id: string } },
) => {
    const body: User = await request.json();
    const product = await prisma.user.update({
        where: { id: params.id },
        data: {
            username: body.username!,
            email: body.email,
            password: body.password,
        },
    });
    return NextResponse.json(product, { status: 200 });
};

export const DELETE = async (
    request: Request,
    { params }: { params: { id: string } },
) => {
    const product = await prisma.user.delete({
        where: { id: params.id },
    });
    return NextResponse.json(product, { status: 200 });
};
