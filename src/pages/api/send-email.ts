import dbConnect from "../../../db/utils/dbConnect";
import type { NextApiRequest, NextApiResponse } from "next";
import { createTransport } from "nodemailer";

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse
) {
  dbConnect();

  const complainMessage = {
    from: {
      name: "Cacti Assistant",
      address: process.env.GMAIL_EMAIL_ADDRESS || "",
    },
    to: process.env.GMAIL_EMAIL_ADDRESS || "",
    subject: "Reset Password",
    html: `<div><p>${request.body.name}</p><p>${request.body.email}</p><p>${request.body.message}</p></div>`,
  };

  const thankyouMessage = {
    from: {
      name: "Cacti Assistant",
      address: process.env.GMAIL_EMAIL_ADDRESS || "",
    },
    to: request.body.email,
    subject: "Thank you for contacting us",
    html: `<p>Thank you for contacting us. Our representative will reply to you as soon as possible.</p>`,
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
    transporter.sendMail(complainMessage, (err: any, info: any) => {
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

    transporter.sendMail(thankyouMessage, (err: any, info: any) => {
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
