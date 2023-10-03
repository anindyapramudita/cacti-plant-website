import type { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "@/db/utils/dbConnect";
import User from "@/db/models/user";
import {
  COLLECTION_DELETE_SUCCESSFUL,
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
  const collectionId = request.body.collectionId;

  const removeCollection = await User.findOneAndUpdate(
    { _id: userId },
    { $pull: { plantCollections: { _id: collectionId } } }
  );

  if (removeCollection) {
    response.status(201).json({
      success: true,
      message: COLLECTION_DELETE_SUCCESSFUL,
    });
  } else {
    response.status(201).json({
      success: false,
      message: SOMETHING_WRONG,
    });
  }
}
