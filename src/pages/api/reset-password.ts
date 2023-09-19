import type { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "@/db/utils/dbConnect";
import User from "@/db/models/user";
import { hash } from "bcrypt";
import {
  PASSWORD_REQUIREMENT_ERROR,
  PASSWORD_UPDATED,
  SOMETHING_WRONG,
} from "@/shared/utils/constants";

type Data = {
  success: boolean;
  message: string;
};

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse<Data>
) {
  dbConnect();

  const email = request.headers["user-email"];
  const password = request.body.password;

  if (!password || password.length < 6) {
    throw new Error(PASSWORD_REQUIREMENT_ERROR);
  } else {
    const newPassword = await hash(password, 10);
    const updateResponse = await User.findOneAndUpdate(
      { email },
      { password: newPassword }
    );

    if (updateResponse) {
      response.status(201).json({
        success: true,
        message: PASSWORD_UPDATED,
      });
    }

    response.status(404).json({
      success: false,
      message: SOMETHING_WRONG,
    });
  }
}
