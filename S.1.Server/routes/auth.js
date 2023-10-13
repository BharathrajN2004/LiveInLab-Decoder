import express from "express";
import multer from "multer";
import { login, signup } from "../controllers/auth.js";

const router = express.Router();

// Set up storage destination and file naming
const storage = multer.memoryStorage();

const upload = multer({
    storage: storage,
    limits: { fileSize: 10 * 1024 * 1024 }, // 10MB limit
});
// upload.single('picture'),

router.post("/login", login);
router.post("/signup", signup);

export default router;
