import express from "express";
import dotenv from "dotenv";
import path from "path";
import cors from "cors";
import connectDB from "./config/db.js";
import productRoutes from "./routes/productRoute.js";
import userRoutes from "./routes/userRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
import uploadRoutes from "./routes/uploadRoutes.js";

// Load .env file from backend directory
dotenv.config({ path: path.join(process.cwd(), "backend", ".env") });

connectDB();
const app = express();

// CORS configuration - allow requests from frontend
app.use(
  cors({
    origin: process.env.FRONTEND_URL || "*",
    credentials: true,
  })
);

app.use(express.json());

app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/upload", uploadRoutes);

app.get("/api/config/paypal", (req, res) => {
  res.send(process.env.PAYPAL_CLIENT_ID);
});

// Use path.resolve() for root directory (for static files)
const rootDir = path.resolve();
app.use("/uploads", express.static(path.join(rootDir, "/uploads")));

// Only serve frontend build files if NOT on Vercel
// Vercel handles static files separately via vercel.json
if (process.env.NODE_ENV == "production" && !process.env.VERCEL) {
  app.use(express.static(path.join(rootDir, "/frontend/build")));

  app.get("*", (req, res) =>
    res.sendFile(path.resolve(rootDir, "frontend", "build", "index.html"))
  );
} else {
  app.get("/", (req, res) => {
    res.json("Api is running");
  });
}

app.use(notFound);
app.use(errorHandler);

// Export app for Vercel serverless functions
export default app;

// Only start server if not in serverless environment (Vercel)
// Vercel sets VERCEL environment variable
if (!process.env.VERCEL) {
  const PORT = process.env.PORT || 5001;
  app.listen(PORT, () => {
    console.log(
      `app is listening in ${process.env.NODE_ENV} mode on port ${PORT}`
    );
  });
}
