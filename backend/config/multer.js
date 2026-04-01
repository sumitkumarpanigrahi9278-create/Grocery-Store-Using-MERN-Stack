import multer from "multer";

// Use memory storage — files will be uploaded to Cloudinary manually
const storage = multer.memoryStorage();

export const upload = multer({ storage });
