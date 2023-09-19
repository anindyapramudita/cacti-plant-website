import { signIn } from "next-auth/react";

export const userSignIn = async (email: string, password: string) => {
  const response = await signIn("credentials", {
    redirect: false,
    email,
    password,
  });

  return response;
};
