import User from "../models/user";
import dbConnect from "./dbConnect";

export const findUser = async (email: string) => {
  await dbConnect();
  const response = await User.findOne({ email });
  return response;
};
