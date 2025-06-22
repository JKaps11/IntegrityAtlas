import { PrismaAdapter } from "@next-auth/prisma-adapter"
import NextAuth, { NextAuthConfig } from "next-auth"
import Google from "next-auth/providers/google"
import { prisma } from "../prisma"

export const { auth, handlers, signIn, signOut } = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    Google
  ],
  callbacks: {
    async session({ session, token, user }) {
      // You can augment session here, e.g. include user.id
      session.user.id = user.id
      return session
    },
  },
  session: {
    strategy: "database",
  },
	pages: {
    signIn: "/login",
  },
} satisfies NextAuthConfig)