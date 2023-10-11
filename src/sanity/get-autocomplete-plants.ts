import { groq } from "next-sanity";
import { client } from "./get-client";

export const getAutocompletePlants = async (search?: string | null) => {
  return client.fetch(groq`*[_type == "plant" && ${search ? search : ""}][0..3]{
    _id,
    _createdAt,
    name,
    images[0]->{
      alt,
      "src": src.asset->url
    }
  }`);
};
