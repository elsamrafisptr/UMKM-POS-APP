import prisma from "@/libs/prismaClient";
import { Outlet, Product } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";
import { NextRequest, NextResponse } from "next/server";
import * as z from "zod";

export const POST = async (request: Request, req: NextApiRequest) => {
    const body: Outlet = await request.json();

    const userSession = await getSession({ req });

    const user = await prisma.user.findFirst({
        where: {
            id: userSession?.user.id
        },
        select: {
            id: true
        }
    })

    const newOutlet = await prisma.outlet.create({
        data: {
            name: body.name,
            address: body.address,
            contact: body.contact,
            user: {connect: { id: user?.id}}
        },
    });
    return NextResponse.json(newOutlet, { status: 201 });
};