import { sendComplainEmail } from "./send-complain-email";
import { EMAIL_NOT_VALID, SOMETHING_WRONG } from "./constants";

type Request = {
  name: string;
  email: string;
  message: string;
};

export const sendEmail = async (request: Request) => {
  if (request.email.includes("@")) {
    try {
      const response = await sendComplainEmail(request);
      if (response?.ok) {
        return response;
      } else {
        return {
          ...response,
          status: SOMETHING_WRONG,
        };
      }
    } catch (error) {
      return {
        ok: false,
        status: SOMETHING_WRONG,
      };
    }
  } else {
    return { ok: false, status: EMAIL_NOT_VALID };
  }
};
