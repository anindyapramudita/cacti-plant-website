import type { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "@/db/utils/dbConnect";
import User from "@/db/models/user";
import {
  ADD_TO_COLLECTION_FAILED,
  ADD_TO_COLLECTION_SUCCESSFUL,
  PLANT_ALREADY_IN_COLLECTION,
} from "@/shared/utils/constants";

type Data = {
  success: boolean;
  message: string;
  collections: string[];
};

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse<Data>
) {
  dbConnect();

  const _id = request.body.userId;
  const collectionId = request.body.collectionId;
  const plantId = request.body.plantId;

  const findPlant = await User.findOne({
    _id,
    "plantCollections._id": collectionId,
    "plantCollections.plants": { $elemMatch: { $eq: plantId } },
  });

  if (findPlant) {
    response.status(400).json({
      success: false,
      message: PLANT_ALREADY_IN_COLLECTION,
      collections: [],
    });
  } else {
    const update = await User.findOneAndUpdate(
      { _id, "plantCollections._id": collectionId }, // Find the user by ID and the specified plantCollection by its _id
      { $push: { "plantCollections.$.plants": plantId } }, // Push the new plant into the 'plants' array of the matched plantCollection
      { new: true }
    );

    if (update) {
      const newUserInfo = await User.findOne({ _id });

      response.status(201).json({
        success: true,
        message: ADD_TO_COLLECTION_SUCCESSFUL,
        collections: newUserInfo.plantCollections,
      });
    } else {
      response.status(400).json({
        success: false,
        message: ADD_TO_COLLECTION_FAILED,
        collections: [],
      });
    }
  }
}
