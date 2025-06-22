import NextAuth, { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { prisma } from "@/lib/prisma";
import { AdapterUser } from "next-auth/adapters";

// 1️⃣ Build and extend the default Prisma adapter:
const baseAdapter = PrismaAdapter(prisma);
const adapter = {
    ...baseAdapter,
    // Only override new-user creation:
    async createUser(profile: AdapterUser) {
        return prisma.user.create({
            data: {
                name: profile.name,
                email: profile.email!,
                image: profile.image,
                emailVerified: profile.emailVerified,
            },
        });
    },
};

export const authOptions: NextAuthOptions = {
    adapter,                         // our extended adapter
    session: { strategy: "jwt" },    // JWT-only sessions

    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
        }),
    ],

    callbacks: {

        // 1) On first sign-in, persist only user.id into the token
        async jwt({ token, user }) {
            if (user) {
                token.id = user.id;
                // No need to include other fields here
            }
            return token;
        },

        // 2) On session fetch, expose token.id as session.user.id
        async session({ session, token }) {
            session.user = session.user || {};
            session.user.id = token.id as string;
            return session;
        },

        // Always redirect here after sign-in
        async redirect() {
            return "/project";
        },
    },

    secret: process.env.NEXTAUTH_SECRET,
    debug: true,
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };