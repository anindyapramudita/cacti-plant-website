import type { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "../../../db/utils/dbConnect";
import User from "../../../db/models/user";
import {
  IMAGE_LIKED_SUCCESS,
  IMAGE_UNLIKED_SUCCESS,
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

  const email = request.body.email;
  const id = request.body.id;

  const findLiked = await User.findOne({ email, likedPlants: id });

  if (findLiked) {
    const removevLike = await User.findOneAndUpdate(
      { email },
      { $pull: { likedPlants: id } }
    );

    if (removevLike) {
      response.status(201).json({
        success: true,
        message: IMAGE_UNLIKED_SUCCESS,
      });
    }

    response.status(404).json({
      success: false,
      message: SOMETHING_WRONG,
    });
  } else {
    const addLiked = await User.findOneAndUpdate(
      { email },
      { $push: { likedPlants: id } }
    );

    if (addLiked) {
      response.status(201).json({
        success: true,
        message: IMAGE_LIKED_SUCCESS,
      });
    }

    response.status(404).json({
      success: false,
      message: SOMETHING_WRONG,
    });
  }
}
