import type { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "@/db/utils/dbConnect";
import User from "@/db/models/user";
import {
  LIKED_FETCH_FAILED,
  LIKED_FETCH_SUCCESSFUL,
} from "@/shared/utils/constants";
import { client } from "@/sanity/get-client";
import { groq } from "next-sanity";

type Data = {
  success: boolean;
  message: string;
  likedPlants: string[];
  likedPlantsId: string[];
};

const getIds = (id: string[]) => {
  const idQuery: string[] = [];
  id.forEach((plantId: string) => {
    idQuery.push(`_id == "${plantId}"`);
  });
  return idQuery.join(" || ");
};

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse<Data>
) {
  dbConnect();

  const _id = request.body.userId;
  const updateResponse = await User.findOne({ _id }).select("likedPlants");

  if (updateResponse) {
    if (updateResponse.likedPlants.length > 0) {
      const idQuery = getIds(updateResponse.likedPlants);

      const likedPlants =
        await client.fetch(groq`*[_type == "plant" && (${idQuery})]{
        _id,
        _createdAt,
        name,
        images[]->{
          alt,
          "src": src.asset->url
        },
        description,
        water,
        care,
        seasons,
        size,
        color,
        "total": count(*[_type == "plant"])
      }`);

      response.status(201).json({
        likedPlants,
        likedPlantsId: updateResponse.likedPlants,
        success: true,
        message: LIKED_FETCH_SUCCESSFUL,
      });
    } else {
      response.status(201).json({
        likedPlants: [],
        likedPlantsId: updateResponse.likedPlants,
        success: true,
        message: LIKED_FETCH_SUCCESSFUL,
      });
    }
  } else {
    response.status(404).json({
      likedPlants: [],
      likedPlantsId: [],
      success: false,
      message: LIKED_FETCH_FAILED,
    });
  }

  // }
}
