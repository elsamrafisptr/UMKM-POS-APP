import NextAuth, { Awaitable, NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import prisma from "@/libs/prismaClient";
import { compare } from "bcrypt";

export const AuthOptions: NextAuthOptions = {
    adapter: PrismaAdapter(prisma),
    session: {
        strategy: "jwt",
    },
    pages: {
        signIn: "/login",
    },
    secret: process.env.NEXTAUTH_SECRET,
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                username: {
                    label: "Nama Pengguna",
                    type: "text",
                    placeholder: "jsmith",
                },
                email: {
                    label: "Email",
                    type: "email",
                    placeholder: "",
                },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials): Promise<any> {
                // Add logic here to look up the user from the credentials supplied
                if (!credentials?.email || !credentials.password) {
                    return null;
                }

                const existingUser = await prisma.user.findUnique({
                    where: { email: credentials?.email },
                });
                if (!existingUser) {
                    return null;
                }

                const passwordMatch = await compare(
                    credentials.password,
                    existingUser.password,
                );
                if (!passwordMatch) {
                    return null;
                }

                return existingUser;
            },
        }),
    ],
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                return {
                    ...token,
                    username: user.username,
                };
            }
            return token;
        },
        async session({ session, token }) {
            return {
                ...session,
                user: {
                    ...session.user,
                    username: token.username,
                },
            };
        },
    },
};

const handler = NextAuth(AuthOptions);

export { handler as GET, handler as POST };
