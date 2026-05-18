import express from "express";
import cors from "cors";
import helmet from "helmet";
import path from "path";
import contactRoutes from "./routes/contactRoutes";
import { env } from "./config/env";

export const app = express();

app.use(helmet());
const allowedOrigins = [
  env.FRONTEND_URL,
  "http://localhost:5173",
  "http://localhost:5174",
  "http://localhost:5175"
];

app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin || allowedOrigins.includes(origin)) {
        return callback(null, true);
      }
      return callback(new Error("Not allowed by CORS"));
    },
    methods: ["GET", "POST"],
    credentials: true
  })
);
app.use(express.json({ limit: "2mb" }));

app.get("/api/health", (_req, res) => {
  res.status(200).json({ ok: true, message: "Portfolio API is running." });
});

app.get("/api/cv", (req, res) => {
  const cvPath = path.resolve(process.cwd(), "../client/assets/Hadi_CV.pdf");
  res.download(cvPath, "Abdul-Hadi-CV.pdf", (err) => {
    if (err) {
      res.status(500).json({ ok: false, message: "Unable to download CV." });
    }
  });
});

app.use("/api", contactRoutes);
