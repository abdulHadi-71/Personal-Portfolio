import dotenv from "dotenv";

dotenv.config();

const defaultMongoUri = "mongodb+srv://portfolio_db_user:774420%40aH@cluster0.m1cxlws.mongodb.net/portfolio?retryWrites=true&w=majority&appName=Cluster0";

export const env = {
  NODE_ENV: process.env.NODE_ENV ?? "development",
  PORT: Number(process.env.PORT ?? 5000),
  FRONTEND_URL: process.env.FRONTEND_URL ?? "http://localhost:5173",
  MONGODB_URI: process.env.MONGODB_URI ?? defaultMongoUri,
  CONTACT_RECEIVER: process.env.CONTACT_RECEIVER ?? "abdullah.two00four@gmail.com",
  SMTP_HOST: process.env.SMTP_HOST ?? "",
  SMTP_PORT: Number(process.env.SMTP_PORT ?? 587),
  SMTP_USER: process.env.SMTP_USER ?? "",
  SMTP_PASS: process.env.SMTP_PASS ?? "",
  SMTP_SECURE: process.env.SMTP_SECURE === "true"
};
