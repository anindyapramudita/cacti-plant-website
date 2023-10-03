import type { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "@/db/utils/dbConnect";
import User from "@/db/models/user";
import {
  COLLECTION_FETCH_FAILED,
  COLLECTION_FETCH_SUCCESSFUL,
} from "@/shared/utils/constants";
import { client } from "@/sanity/get-client";
import { groq } from "next-sanity";

type Data = {
  success: boolean;
  message: string;
  collections: string[];
};

type Collection = {
  title: string;
  plants: string[];
  _id: string;
};

const getIdQuery = (collections: Collection[]) => {
  const idQuery: string[] = [];

  collections.forEach((collection: Collection) => {
    idQuery.push(`_id == "${collection.plants[0]}"`);
  });

  return idQuery.join(" || ");
};

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse<Data>
) {
  dbConnect();

  const _id = request.body.userId;
  const updateResponse = await User.findOne({ _id }).select("plantCollections");

  if (updateResponse) {
    if (updateResponse.plantCollections.length > 0) {
      const idQuery = getIdQuery(updateResponse.plantCollections);
      const collectionImages =
        await client.fetch(groq`*[_type == "plant" && (${idQuery})]{
        _id,
        images[0]->{
          alt,
          "src": src.asset->url
        },
      }`);

      const combinedData = updateResponse.plantCollections.map(
        (collection: Collection) => {
          const findIndex = collectionImages.findIndex(
            (plant: any) => plant._id == collection.plants[0]
          );
          return {
            title: collection.title,
            image: collectionImages[findIndex].images,
            saved: collection.plants.length,
            _id: collection._id,
          };
        }
      );

      response.status(201).json({
        collections: combinedData,
        success: true,
        message: COLLECTION_FETCH_SUCCESSFUL,
      });
    } else {
      response.status(201).json({
        collections: [],
        success: true,
        message: COLLECTION_FETCH_SUCCESSFUL,
      });
    }
  } else {
    response.status(404).json({
      collections: [],
      success: false,
      message: COLLECTION_FETCH_FAILED,
    });
  }
}
