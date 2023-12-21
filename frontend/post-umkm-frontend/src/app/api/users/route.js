import prisma from "@/common/libs/prisma";
import { hash } from "bcrypt";
import { NextResponse } from "next/server";


export const POST = async (req) => {
    try {
        const body = await req.json();
        const { name, email, telnumber, password } = body;
        console.log(body);

        // check email already exist
        const existingUserByEmail = await prisma.user.findUnique({
            where: { email: email },
        });
        if (existingUserByEmail) {
            return NextResponse.json(
                { user: null, message: "User with this email already exist!" },
                { status: 409 },
            );
        }

        // check username
        const existingUserByUsername = await prisma.user.findUnique({
            where: { name: name },
        });
        if (existingUserByUsername) {
            return NextResponse.json(
                {
                    user: null,
                    message: "User with this username already exist!",
                },
                { status: 409 },
            );
        }

        const hashedPassword = await hash(password, 10);
        const newUser = await prisma.user.create({
            data: {
                name,
                email,
                telnumber,
                hashedPassword,
            },
        });

        const { hashedPassword: newUserPassword, ...rest } = newUser;

        return NextResponse.json(
            { user: rest, message: "User created" },
            { status: 201 },
        );
    } catch (error) {
        return NextResponse.json(
            { message: "Something went wrong!" },
            { status: 500 },
        );
    }
};
