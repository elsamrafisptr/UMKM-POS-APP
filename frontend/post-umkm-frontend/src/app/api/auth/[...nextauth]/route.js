import nextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import prisma from "@prisma/client"
import { compare } from "bcrypt"

const authOption = {
    providers: [
        CredentialsProvider({
            credentials: {
                email: { label: "Email", type: "Email" },
                telnumber: { label: "telnumber", type: "tel" },
                password: { label: "password", type: `password` },
            },
            async authorize(credentials) {
                const { email, password } = credentials ?? {};
                if (!email || !password) {
                    throw new Error("Missing username or password");
                }
                const user = await prisma.user.findUnique({
                    where: {
                        email,
                    },
                });
                // if user doesn't exist or password doesn't match
                if (!user || !(await compare(password, user.password))) {
                    throw new Error("Invalid username or password");
                }
                return user;
            },
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),
    ],
    secret: process.env.NEXTAUTH_SECRET,
};

const handler = nextAuth(authOption);

export { handler as GET, handler as POST };
