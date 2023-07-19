import { createUser } from "../../../db/utils/create-user";
import { FORM_ERROR, PASSWORD_NOT_MATCH, SOMETHING_WRONG } from "./constant";
import { userSignIn } from "./user-sign-in";

type DataType = {
  name: string;
  email: string;
  password: string;
  passwordConfirmation: string;
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
            status: SOMETHING_WRONG,
          };
        }
      } else {
        return {
          ...response,
          status: FORM_ERROR,
        };
      }
    } catch (error) {
      return {
        ok: false,
        status: SOMETHING_WRONG,
      };
    }
  } else {
    return { ok: false, status: PASSWORD_NOT_MATCH };
  }
};
