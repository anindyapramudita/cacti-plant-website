import { groq } from "next-sanity";
import { client } from "./get-client";

const getOffset = (id: number, limit?: number | null) => {
  if (limit) {
    return id + limit - 1;
  } else {
    return id + 2;
  }
};

export const getPlants = async (
  id: number,
  query?: string | null,
  limit?: number
) => {
  const offset = getOffset(id, limit);

  return client.fetch(groq`*[_type == "plant" ${
    query ? query : ""
  }][${id}..${offset}]{
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
    "total": count(*[_type == "plant" ${query ? query : ""}])
  }`);
};
