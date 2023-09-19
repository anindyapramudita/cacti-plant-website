import type { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "@/db/utils/dbConnect";
import User from "@/db/models/user";
import { IMAGE_LIKED_SUCCESS, SOMETHING_WRONG } from "@/shared/utils/constants";

type Data = {
  success: boolean;
  message: string;
  likedPlants: string[];
};

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse<Data>
) {
  dbConnect();

  const email = request.body.email;
  const updateResponse = await User.findOne({ email }).select("likedPlants");

  if (updateResponse) {
    response.status(201).json({
      likedPlants: updateResponse,
      success: true,
      message: IMAGE_LIKED_SUCCESS,
    });
  }

  response.status(404).json({
    likedPlants: [],
    success: false,
    message: SOMETHING_WRONG,
  });
  // }
}
