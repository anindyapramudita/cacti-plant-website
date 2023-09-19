import type { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "@/db/utils/dbConnect";
import Image from "@/db/models/image";
import User from "@/db/models/user";
import fs from "fs/promises";
import path from "path";
import { Form } from "multiparty";

export const config = {
  api: {
    bodyParser: false, // Disable default body parsing
  },
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    try {
      await dbConnect();

      const form = new Form();

      form.parse(req, async (err, fields, files) => {
        if (err) {
          console.error("Error parsing form:", err);
          return res.status(500).json({ error: "Image upload failed" });
        }

        const imageFile = files.image[0]; // Assuming you have an <input type="file" name="image" />
        const email = fields.email[0]; // Extract email from fields

        if (!imageFile) {
          return res.status(400).json({ error: "No file uploaded" });
        }

        if (!email) {
          return res.status(400).json({ error: "User is not logged in" });
        }

        const imagePath = path.join("./uploads", imageFile.originalFilename);

        // Move the uploaded file to the desired location
        await fs.rename(imageFile.path, imagePath);

        const profilePicture = {
          data: await fs.readFile(imagePath),
          contentType: imageFile.headers["content-type"],
        };

        await User.findOneAndUpdate({ email }, { profilePicture });
        // const image = new Image({
        //   name: imageFile.originalFilename,
        //   data: await fs.readFile(imagePath),
        //   contentType: imageFile.headers["content-type"],
        //   email: email, // Store email in the Image model or handle it as needed
        // });

        // await image.save();

        res.status(201).json({ message: "Image uploaded successfully" });
      });
    } catch (error) {
      console.error("Error uploading image:", error);
      res.status(500).json({ error: "Image upload failed" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
