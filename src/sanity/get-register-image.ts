import { groq } from "next-sanity";
import { client } from "./get-client";

export const getRegisterImage = async () => {
  return client.fetch(groq`*[_type == "media" && alt == "register-image"]{
    alt,
    "src": src.asset->url
}`);
};
