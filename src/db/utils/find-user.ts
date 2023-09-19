import User from "../models/user";

export const findUser = async (email: string) => {
  const response = await User.findOne({ email });
  return response;
};
