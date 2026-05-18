import { Router } from "express";
import { submitContactMessage } from "../controllers/contactController";

const router = Router();
router.post("/contact", submitContactMessage);

export default router;
