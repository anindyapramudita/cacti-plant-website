import mongoose from "mongoose";
import validator from "validator";
import { hash, compare } from "bcrypt";

const plantCollectionsSchema = new mongoose.Schema({
  title: String,
  plants: [String],
});

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: [true, "Account already exists"],
    validate: [validator.isEmail, "Please enter a valid email"],
  },
  password: {
    type: String,
    minLength: [6, "Your password must be at least 6 characters long"],
    select: false,
  },
  role: {
    type: String,
    default: "user",
    enum: {
      values: ["user", "admin"],
    },
  },
  profilePicture: {
    type: String,
    default:
      "https://cdn.sanity.io/images/rb0oc6we/production/1b91a69b31052b745616261ea36c69134615ebe2-150x150.png",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  likedPlants: {
    type: [String],
    default: [],
  },
  plantCollections: {
    type: [plantCollectionsSchema],
    default: [],
  },
});

// ENCRYPTION
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }
  this.password = await hash(this.password, 10);
  next();
});

userSchema.methods.comparePassword = async function (enteredPassword) {
  return await compare(enteredPassword, this.password);
};

export default mongoose.models.User || mongoose.model("User", userSchema);
