import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const AuthOptions: NextAuthOptions = {
    adapter: {},
    session: {
        strategy: "jwt",
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
                    placeholder: ""
                },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials, req) {
                // Add logic here to look up the user from the credentials supplied
                const { username, email, password } = credentials as {
                    username: string;
                    email: string;
                    password: string;
                }
                
                if (!credentials?.email || !credentials.password) { return null}

                // const passwordValidation = await bcrypt.compare(credentials.password, user.password)

                const data = {
                    username: username,
                    email: email,
                    password: password
                }

                const headers = new Headers({
                    "Content-Type": "aplication/json"
                })


                
                const user = {
                    id: "1",
                    name: "J Smith",
                    email: "jsmith@example.com",
                };

                if (user) {
                    // Any object returned will be saved in `user` property of the JWT
                    return user;
                } else {
                    // If you return null then an error will be displayed advising the user to check their details.
                    return null;

                    // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
                }
            },
        }),
    ],
    callbacks: {
        async jwt({ token, account, user }: any) {
            if (user) {
                token.user = user;
                token.accessToken = user.access_token;
            }
            return token;
        },
        async session({ session, token }: any) {
            session.user = token.user;
            return session;
        }, 
    },
    pages: {
        signIn: "/login",
    },
};

const handler = NextAuth(AuthOptions);

export { handler as GET, handler as POST };
