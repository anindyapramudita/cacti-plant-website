import { signIn } from "next-auth/react";
import { createUser } from "../../db/utils/create-user";

type DataType = {
  name: string;
  email: string;
  password: string;
  passwordConfirmation: string;
};
export const userSignIn = async (email: string, password: string) => {
  const response = await signIn("credentials", {
    redirect: false,
    email,
    password,
  });

  return response;
};

export const createNewUser = async (data: DataType) => {
  if (data.password == data.passwordConfirmation) {
    try {
      const response = await createUser(data.name, data.email, data.password);
      if (response?.ok) {
        const signInResponse = await userSignIn(data.email, data.password);
        if (signInResponse?.ok) {
          return signInResponse;
        } else {
          return {
            ...signInResponse,
            status: "something is wrong. Please try again",
          };
        }
      } else {
        return {
          ...response,
          status:
            "Please fill in the forms correctly and have min 6 characters in your password",
        };
      }
    } catch (error) {
      return {
        ok: false,
        status: "something went wrong. Please try again",
      };
    }
  } else {
    return { ok: false, status: "passwords do not match" };
  }
};
