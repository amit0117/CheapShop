import express from "express";
import multer from "multer";
import { storage } from "../cloudinary.js";
import asyncHandler from "express-async-handler";
import { protect } from "../middleware/authMiddleware.js";
import { admin } from "../middleware/authMiddleware.js";

const router = express.Router();

// Use CloudinaryStorage - uploads directly to Cloudinary, no local storage needed
// CloudinaryStorage already validates file types via allowedFormats in cloudinary.js
const upload = multer({
  storage,
});

router.post(
  "/",
  protect,
  admin,
  upload.single("image"),
  asyncHandler(async (req, res) => {
    if (!req.file) {
      res.status(400);
      throw new Error("No file uploaded");
    }

    // With CloudinaryStorage, the file is uploaded directly to Cloudinary
    // req.file.path contains the Cloudinary secure URL
    res.send(req.file.path);
  })
);

export default router;
