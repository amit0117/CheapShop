import express from "express";
import dotenv from "dotenv";
import path from "path";
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

if (process.env.NODE_ENV == "production") {
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
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(
    `app is listening in ${process.env.NODE_ENV} mode on port ${PORT}`
  );
});
