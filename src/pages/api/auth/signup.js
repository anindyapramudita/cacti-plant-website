import User from "../../../../db/models/user";
import dbConnect from "../../../../db/utils/dbConnect";

async function handler(req, res) {
  dbConnect();

  await User.create(req.body);

  res.status(201).json({ message: "Created user!" });
}

export default handler;
