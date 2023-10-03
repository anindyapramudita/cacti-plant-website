import type { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "@/db/utils/dbConnect";
import User from "@/db/models/user";
import {
  IMAGE_LIKED_SUCCESS,
  IMAGE_UNLIKED_SUCCESS,
  SOMETHING_WRONG,
} from "@/shared/utils/constants";

type Data = {
  success: boolean;
  message: string;
  likedPlants?: string[];
};

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse<Data>
) {
  dbConnect();

  const _id = request.body.userId;
  const id = request.body.id;

  const findLiked = await User.findOne({ _id, likedPlants: id });

  if (findLiked) {
    const removeLike = await User.findOneAndUpdate(
      { _id },
      { $pull: { likedPlants: id } }
    );

    if (removeLike) {
      const newUserInfo = await User.findOne({ _id });
      response.status(201).json({
        success: true,
        message: IMAGE_UNLIKED_SUCCESS,
        likedPlants: newUserInfo.likedPlants,
      });
    } else {
      response.status(404).json({
        success: false,
        message: SOMETHING_WRONG,
      });
    }
  } else {
    const addLiked = await User.findOneAndUpdate(
      { _id },
      { $push: { likedPlants: id } }
    );

    if (addLiked) {
      const newUserInfo = await User.findOne({ _id });

      response.status(201).json({
        success: true,
        message: IMAGE_LIKED_SUCCESS,
        likedPlants: newUserInfo.likedPlants,
      });
    } else {
      response.status(404).json({
        success: false,
        message: SOMETHING_WRONG,
      });
    }
  }
}
