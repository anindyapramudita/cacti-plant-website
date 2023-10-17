import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProviders from "next-auth/providers/google";

import User from "@/db/models/user";
import dbConnect from "@/db/utils/dbConnect";
import { findUser } from "@/db/utils/find-user";
import { googleSignIn } from "@/db/utils/google-sign-in";

const sessionSecret = process.env.SESSION_SECRET;

export default NextAuth({
  session: {
    jwt: true,
    cookie: {
      domain: "localhost:3000",
      path: "/",
      httpOnly: true,
    },
  },
  secret: sessionSecret,
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials) => {
        dbConnect();
        const user = await User.findOne({ email: credentials.email }).select(
          "+password"
        );

        if (!user) {
          throw new Error("No user with a matching email was found.");
        }
        const pwValid = await user.comparePassword(credentials.password);

        if (!pwValid) {
          throw new Error("Your password is invalid");
        }

        return user;
      },
    }),
    GoogleProviders({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
  ],
  callbacks: {
    async signIn({ user, account }) {
      if (account.provider === "google") {
        const { name, email, image } = user;
        console.log(image);
        try {
          const userExists = await findUser(email);

          if (!userExists) {
            const res = await googleSignIn(name, email, image);

            if (res.success) {
              return res.user;
            }
          }
        } catch (error) {
          console.log(error);
        }
      }

      return user;
    },
    async jwt({ token, user }) {
      if (user) {
        const currentUser = await findUser(user.email);
        token.user = {
          _id: currentUser?._id,
          name: user.name,
          email: user.email,
          role: currentUser?.role,
          image: currentUser?.profilePicture,
        };
      }
      return token;
    },
    session: async ({ session, token }) => {
      if (token) {
        session.user = token.user;
      }
      return session;
    },
  },
  pages: {
    signIn: "/login",
  },
  debug: false,
});
