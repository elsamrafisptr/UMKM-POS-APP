import nextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import prisma from "@/common/libs/prisma";
import bcrypt from "bcrypt";
import { PrismaAdapter } from "@auth/prisma-adapter";

const authOption = {
    adapter: PrismaAdapter(prisma),
    session: {
        strategy: "jwt",
    },
    providers: [
        CredentialsProvider({
            name: "credentials",
            credentials: {
                name: {
                    label: "Nama Pengguna",
                    type: "text",
                    placeholder: "Tuliskan nama pengguna kamu",
                },
                email: {
                    label: "Email",
                    type: "text",
                    placeholder: "Tuliskan email kamu yang valid",
                },
                telnumber: {
                    label: "Nomor Telepon",
                    type: "tel",
                    placeholder: "08XXXXXXXXX atau 628XXXXXXXXX",
                },
                password: { label: "Kata Sandi", type: "password" },
            },
            async authorize(credentials) {
                // cek email dan password valid
                if (!credentials.email || !credentials.password) {
                    return null;
                }

                // cek user terdaftar atau tidak
                const user = await prisma.user.findUnique({
                    where: {
                        email: credentials.email,
                    },
                });

                // user tidak terdaftar
                if (!user) {
                    return null;
                }

                // compare password user yang sudah dihash
                const passwordValidation = await bcrypt.compare(
                    credentials.password,
                    user.password,
                );
                // password salah
                if (!passwordValidation) {
                    return null;
                }

                // return user jika semua valid
                return user;
            },
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),
    ],
    secret: process.env.NEXTAUTH_SECRET,
    debug: process.env.NODE_ENV === "development",
};

const handler = nextAuth(authOption);

export { handler as GET, handler as POST };
