import mongoose from "mongoose";
import validator from "validator";
import { hash, compare } from "bcrypt";

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
    required: [true, "Please enter your email"],
    minLength: [6, "Your password must be at least 6 characters long"],
    select: false, //dont send back password after request
  },
  role: {
    type: String,
    default: "user",
    enum: {
      values: ["user", "admin"],
    },
  },
  profilePicture: {
    data: {
      type: Buffer,
      default: null, // Set the default value to null
    },
    contentType: {
      type: String,
      default: null, // Set the default value to null
    },
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  likedPlants: {
    type: [String],
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
