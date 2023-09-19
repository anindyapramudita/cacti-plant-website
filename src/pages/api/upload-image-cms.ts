import { createReadStream } from "fs";
import { basename } from "path";
import { Form } from "multiparty";
import { createClient } from "next-sanity";
import { NextApiRequest, NextApiResponse } from "next";
// import sanityClient from '../../path-to-sanityClient'; // Import your Sanity client configuration

const client = createClient({
  projectId: "rb0oc6we",
  dataset: "production",
  // Add your Sanity API token here (store it securely, don't hardcode it)
  token:
    "skrb4KQw7SLyeAaQar881asUbfnnp4gVBMvQC2Q0N3jruRtpAtwNJDVgVI8Wdrjd4zqvNHZuz1siEPT3733zrHsMO5wBcZBk52j4QkdKfm2fiaBOwA2IvC9BiyaVK7d3GjaV7L7S522i43yiJiX7wAGatM7aD8ri1MaQMgXduHQ1pCtl2bYR",
  apiVersion: "2021-10-21",
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    try {
      const form = new Form();

      form.parse(req, async (err, fields, files) => {
        if (err) {
          console.error("Error parsing form:", err);
          return res.status(500).json({ error: "Image upload failed" });
        }

        if (files.image) {
          const imageFile = files.image[0]; // Assuming you have an <input type="file" name="image" />

          // Specify the path where the temporary file will be stored
          const tempFilePath = imageFile.path;

          client.assets
            .upload("image", createReadStream(tempFilePath), {
              filename: basename(tempFilePath),
            })
            .then((imageAsset) => {
              // Here you can decide what to do with the returned asset document.
              // If you want to set a specific asset field you can to the following:
              const altText = fields.alt || "Default Picture"; // You can extract alt text from the form data

              const mediaDocument = {
                _type: "media",
                src: {
                  _type: "image",
                  asset: {
                    _type: "reference",
                    _ref: imageAsset._id,
                  },
                },
                alt: altText, // Set the alt text here
              };

              const response = client.create(mediaDocument);

              return res
                .status(201)
                .json({ message: "Image uploaded successfully", response });

              // return client
              //   .patch('some-document-id')
              //   .set({
              //     theImageField: {
              //       _type: 'image',
              //       asset: {
              //         _type: "reference",
              //         _ref: imageAsset._id
              //       }
              //     }
              //   })
              //   .commit()
            })
            .then(() => {
              console.log("Done!");
            });
        } else {
          return res.status(400).json({ error: "No file uploaded" });
        }
      });
    } catch (error) {
      console.error("Error uploading image:", error);
      return res.status(500).json({ error: "Image upload failed" });
    }
  } else {
    return res.status(405).json({ error: "Method not allowed" });
  }
}
// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse
// ) {
//   if (req.method === "POST") {
//     try {
//       const form = new Form();

//       form.parse(req, async (err, fields, files) => {
//         if (err) {
//           console.error("Error parsing form:", err);
//           return res.status(500).json({ error: "Image upload failed" });
//         }

//         if (files.image) {
//           const imageFile = files.image[0]; // Assuming you have an <input type="file" name="image" />

//           // Specify the path where the temporary file will be stored
//           const tempFilePath = imageFile.path;

//           // Upload the image to Sanity as an asset with the "image" type
//           const imageAsset = await sanityClient.assets.upload(
//             "image",
//             createReadStream(tempFilePath),
//             {
//               filename: basename(tempFilePath),
//             }
//           );

//           const altText = fields.alt || "Default Picture"; // You can extract alt text from the form data

//           const mediaDocument = {
//             _type: "media",
//             src: {
//               _type: "image",
//               asset: {
//                 _type: "reference",
//                 _ref: imageAsset._id,
//               },
//             },
//             alt: altText, // Set the alt text here
//           };

//           const response = await sanityClient.create(mediaDocument);
//           return res
//             .status(201)
//             .json({ message: "Image uploaded successfully", response });
//         } else {
//           return res.status(400).json({ error: "No file uploaded" });
//         }
//       });
//     } catch (error) {
//       console.error("Error uploading image:", error);
//       return res.status(500).json({ error: "Image upload failed" });
//     }
//   } else {
//     return res.status(405).json({ error: "Method not allowed" });
//   }
// }
