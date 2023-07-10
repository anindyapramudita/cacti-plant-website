import { groq } from "next-sanity";
import { client } from "./get-client";

export const getPlants = async (id: number) => {
  return client.fetch(groq`*[_type == "plant"][${id}..${id + 2}]{
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
