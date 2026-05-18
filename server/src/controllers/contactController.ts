import { Request, Response } from "express";
import nodemailer from "nodemailer";
import { ContactMessage } from "../models/ContactMessage";
import { env } from "../config/env";

const createTransporter = () => {
  if (!env.SMTP_HOST || !env.SMTP_USER || !env.SMTP_PASS) {
    return null;
  }

  return nodemailer.createTransport({
    host: env.SMTP_HOST,
    port: env.SMTP_PORT,
    secure: env.SMTP_SECURE,
    auth: {
      user: env.SMTP_USER,
      pass: env.SMTP_PASS
    }
  });
};

export const submitContactMessage = async (req: Request, res: Response) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ ok: false, message: "Please provide name, email, and message." });
  }

  try {
    const contactMessage = new ContactMessage({ name, email, message });
    await contactMessage.save();

    const transporter = createTransporter();
    if (transporter) {
      await transporter.sendMail({
        from: `${name} <${env.SMTP_USER}>`,
        to: env.CONTACT_RECEIVER,
        subject: `New portfolio contact from ${name}`,
        text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
        html: `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Message:</strong></p><p>${message}</p>`
      });
    }

    return res.status(201).json({ ok: true, message: "Message received. Thank you!" });
  } catch (error) {
    console.error("Contact save failed:", error);
    return res.status(500).json({ ok: false, message: "Unable to save message." });
  }
};
