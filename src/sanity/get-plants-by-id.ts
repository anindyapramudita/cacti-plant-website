import { groq } from "next-sanity";
import { client } from "./get-client";

export const getPlantById = async (id: string) => {
  return client.fetch(groq`*[_type == "plant" && _id=="${id}"]{
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
};
