import type { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "@/db/utils/dbConnect";
import User from "@/db/models/user";
import {
  NEW_COLLECTION_SUCCESS,
  SOMETHING_WRONG,
} from "@/shared/utils/constants";

type plantCollections = {
  title: string;
  plants: string[];
};

type Data = {
  success: boolean;
  message: string;
  newCollection?: plantCollections[];
};

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse<Data>
) {
  dbConnect();

  const userId = request.body.userId;
  const title = request.body.title;
  const plantId = request.body.plantId;

  const update = await User.findOneAndUpdate(
    { _id: userId },
    { $push: { plantCollections: { title, plants: [plantId] } } }
  );

  if (update) {
    const newUserInfo = await User.findOne({ _id: userId });
    response.status(201).json({
      success: true,
      message: NEW_COLLECTION_SUCCESS,
      newCollection: newUserInfo.plantCollections,
    });
  } else {
    response.status(201).json({
      success: false,
      message: SOMETHING_WRONG,
    });
  }
}
