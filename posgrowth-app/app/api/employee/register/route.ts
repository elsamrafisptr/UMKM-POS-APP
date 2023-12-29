import { NextResponse } from "next/server";
import prisma from "@/libs/prismaClient";
import { hash } from "bcrypt";
import * as z from "zod";

const userSchema = z.object({
    username: z.string().min(1, "Nama Pengguna tidak boleh kosong").max(16),
    email: z
        .string()
        .min(1, "Email tidak boleh kosong")
        .email("Gunakan email yang valid"),
    password: z
        .string()
        .min(1, "Kata sandi tidak boleh kosong")
        .min(8, "Kata sandi minimal 8 karakter")
        .max(16, "Kata sandi maksimal sepanjang 16 karakter"),
});

export const POST = async (request: Request) => {
    try {
        const body = await request.json();
        const { username, email, password } = userSchema.parse(body);

        const existingUserByEmail = await prisma.user.findUnique({
            where: { email: email },
        });

        if (existingUserByEmail) {
            return NextResponse.json(
                {
                    user: null,
                    message: "Pengguna dengan email ini sudah tersedia",
                },
                { status: 409 },
            );
        }

        const existingUserByUsername = await prisma.user.findUnique({
            where: { username: username },
        });
        if (existingUserByUsername) {
            return NextResponse.json(
                {
                    user: null,
                    message: "Pengguna dengan nama pengguna ini sudah tersedia",
                },
                { status: 409 },
            );
        }

        const hashedPassword = await hash(password, 10);
        const newUser = await prisma.user.create({
            data: {
                username,
                email,
                role: "Employee",
                password: hashedPassword,
            },
            include: {
                Outlet: true,
            },
        });

        // create first outlet when user register
        const outletName = `${username}'s Outlet`;
        const existingOutletByName = await prisma.outlet.findUnique({
            where: { name: outletName },
        });
        if (existingOutletByName) {
            return NextResponse.json(
                {
                    outlet: null,
                    message: "Nama outlet ini sudah tersedia",
                },
                { status: 409 },
            );
        }

        const getUserId = await prisma.user.findUnique({
            where: { id: newUser.id },
            select: {
                id: true,
            },
        });

        const { password: newUserPassword, ...rest } = newUser;
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
