import User from "@/db/models/user";
import dbConnect from "@/db/utils/dbConnect";
import {
  GOOGLE_SIGN_IN_SUCCESS,
  SOMETHING_WRONG,
} from "@/shared/utils/constants";
import { NextApiRequest, NextApiResponse } from "next";

async function handler(request: NextApiRequest, response: NextApiResponse) {
  const { name, email, image } = await request.body;
  await dbConnect();

  await User.create({ name, email, profilePicture: image })
    .then(async () => {
      const newUser = await User.findOne({ email });

      response.status(201).json({
        success: true,
        message: GOOGLE_SIGN_IN_SUCCESS,
        user: newUser,
      });
    })
    .catch((error) => {
      console.log(error);
      response.status(500).json({
        success: false,
        message: SOMETHING_WRONG,
      });
    });
}

export default handler;
