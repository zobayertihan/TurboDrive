import bcrypt from "bcryptjs";
import { connectmongoDB } from "@/lib/mongodb";
import User from "@/models/user";
import type { NextAuthOptions } from "next-auth";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";

export const options: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
    }),
    CredentialsProvider({
      name: "credentials",
      credentials: {},
      async authorize(credentials: any) {
        const { email, password } = credentials;

        try {
          await connectmongoDB();
          const user = await User.findOne({ email });

          if (!user) {
            return null;
          }

          const matchPass = await bcrypt.compare(password, user.password);

          if (!matchPass) {
            return null;
          }

          return user;
        } catch (error) {
          console.log("Error: ", error);
        }
      },
    }),
  ],

  pages: {
    signIn: "/login",
  },
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(options);

export { handler as GET, handler as POST };
