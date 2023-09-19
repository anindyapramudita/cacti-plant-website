import { findUser } from "@/db/utils/find-user";
import dbConnect from "@/db/utils/dbConnect";
import type { NextApiRequest, NextApiResponse } from "next";
import { getEmailHTML } from "@/shared/utils/get-email-html";
import { sign } from "jsonwebtoken";
import { createTransport } from "nodemailer";

const secret = process.env.SECRET || "";

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse
) {
  dbConnect();

  const user = await findUser(request?.body?.email);

  if (!user) {
    response.status(404).json({
      error: `Email not found`,
    });
  }

  const { name, email } = user;

  const token = sign({ name, email }, secret, {
    expiresIn: "12h",
  });

  const message = {
    from: {
      name: "Cacti Assistant",
      address: process.env.GMAIL_EMAIL_ADDRESS || "",
    },
    to: request.body.email,
    subject: "Reset Password",
    text: "hello",
    html: getEmailHTML(name, token),
  };

  let transporter = createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_EMAIL_ADDRESS,
      pass: process.env.GMAIL_APP_PASSWORD,
    },
    tls: { rejectUnauthorized: false },
  });

  if (request.method === "POST") {
    transporter.sendMail(message, (err: any, info: any) => {
      if (err) {
        response.status(404).json({
          error: `Connection refused at ${err.address}`,
          err,
        });
      } else {
        response.status(250).json({
          success: `Message delivered to ${info.accepted}`,
        });
      }
    });
  }
}
