import User from "../models/user";

export const findUser = async (email) => {
  const response = await User.findOne({ email });
  return response;
};
