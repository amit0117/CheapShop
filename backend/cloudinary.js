import { v2 as cloudinary } from "cloudinary";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import dotenv from "dotenv";
import path from "path";
import { ALLOWED_IMAGE_TYPES } from "./constants/uploadConstants.js";

// Load .env file before configuring Cloudinary
dotenv.config({ path: path.join(process.cwd(), "backend", ".env") });

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_KEY,
  api_secret: process.env.CLOUDINARY_SECRET,
});

const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: "cheapshop",
    allowedFormats: ALLOWED_IMAGE_TYPES,
  },
});

export { cloudinary, storage };
