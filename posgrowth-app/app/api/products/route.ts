import prisma from "@/libs/prismaClient";
import { Product } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";
import { NextRequest, NextResponse } from "next/server";
import * as z from "zod";

export const POST = async (request: Request, req: NextApiRequest) => {
    const body: Product = await request.json();

    const userSession = await getSession({ req });

    const outletId = await prisma.outlet.findFirst({
        where: { userId: userSession?.user.id },
        select: { id: true },
    });

    const newProduct = await prisma.product.create({
        data: {
            name: body.name,
            category: body.category,
            price: body.price,
            stock: body.stock,
            outlet: { connect: { id: outletId?.id } },
        },
    });
    return NextResponse.json(newProduct, { status: 201 });
};

// export default async function POST(req: NextApiRequest, res: NextApiResponse) {
//     const { name, category, price, stock } = req.body;

//     const existingProductByName = await prisma.product.findUnique({
//         where: { name: name },
//     });
//     if (existingProductByName) {
//         return NextResponse.json(
//             {
//                 product: null,
//                 message: "Nama produk ini sudah tersedia",
//             },
//             {
//                 status: 409,
//             },
//         );
//     }

//     const userSession = await getSession({ req });
//     const getOutletId = await prisma.outlet.findFirst({
//         where: {userId: userSession?.user.id},
//         select: {
//             id: true
//         }
//     })
//     const intPrice = parseInt(price)
//     const intStock = parseInt(stock)

//     const newProduct = await prisma.product.create({
//         data: {
//             name,
//             category,
//             price: intPrice,
//             stock: intStock,
//             outlet: {connect: {id: getOutletId?.id}}
//         }
//     })
//     res.json(newProduct)
// }
