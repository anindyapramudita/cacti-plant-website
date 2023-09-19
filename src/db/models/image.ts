// db/models/Image.ts
import mongoose, { Document, Schema } from "mongoose";

export interface IImage extends Document {
  name: string;
  data: Buffer;
  contentType: string;
  email?: string; // Add email field if needed
}

const imageSchema = new Schema<IImage>({
  name: String,
  data: Buffer,
  contentType: String,
  email: String, // Define the email field if needed
});

export default mongoose.models.Image ||
  mongoose.model<IImage>("Image", imageSchema);
