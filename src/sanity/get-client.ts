import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "rb0oc6we",
  dataset: "production",
  apiVersion: "2021-10-21",
});
