// import prisma from "@/common/libs/prisma";
import { NextResponse } from "next/server";

// export async function POST(req) {
//     const { email, password } = await req.json();
//     const exists = await prisma.user.findUnique({
//         where: {
//             email,
//         },
//     });
//     if (exists) {
//         return NextResponse.json(
//             { error: "User already exists" },
//             { status: 400 },
//         );
//     } else {
//         const user = await prisma.user.create({
//             data: {
//                 email,
//                 password: await hash(password, 10),
//             },
//         });
//         return NextResponse.json(user);
//     }
// }
import { createUser } from "@/utils/dbUtils/user"
import z from "zod"

const createUserSchema = z.object({
    email: z.string().email(),
    username: z.string(),
    password: z.string()
}).strict()

function validateUserSchema (data) {
    try {
        const parseData = createUserSchema.parse(data)
        return parseData
    } catch(error) {
        if (error.issues && error.issues.length > 0) {
            const validateErrors = error.issues.map((issue) => ({
                path: issue.path.join('.'),
                message: issue.message
            }))
            throw new Error(JSON.stringify(validateErrors))
        } else {
            throw new Error('invalid schema')
        }
        
    }
}

export const POST = async (request) => {
    try {
        const json = await request.json()

        const validateUser = validateUserSchema(json)

        const createUserResult = await createUser(validateUser)

        return NextResponse.json(createUserResult, {status: 200})
    } catch (error) {
        let errorMessage
        try {
            errorMessage = JSON.parse(error.message)
        } catch (parseError) {
            errorMessage = error.message
        }
        return NextResponse.json({error: errorMessage}, {status: 500})
    }
}