// import NextAuth from "next-auth";
import NextAuth, { DefaultSession } from "next-auth";

declare module "next-auth" {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    user: {
      /** The user's postal address. */
      _id: string;
      name: string;
      email: string;
      role: string;
      image: string;
    } & DefaultSession["user"];
  }
}

declare module "next-auth/client" {
  export * from "next-auth/client";

  export interface Session {
    user: {
      _id: string;
      name: string;
      email: string;
      role: string;
      image: string;
    };
  }
}
