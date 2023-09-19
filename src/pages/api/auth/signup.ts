import User from "@/db/models/user";
import dbConnect from "@/db/utils/dbConnect";
import { NextApiRequest, NextApiResponse } from "next";

async function handler(request: NextApiRequest, response: NextApiResponse) {
  dbConnect();

  await User.create(request.body);

  response.status(201).json({ message: "Created user!" });
}

export default handler;
