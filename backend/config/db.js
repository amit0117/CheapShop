import mongoose from "mongoose";

mongoose.set("strictQuery", false);

const connectDB = async () => {
  try {
    // Check if already connected (important for serverless functions)
    if (mongoose.connection.readyState === 1) {
      console.log("MongoDB already connected");
      return;
    }

    // Connect to MongoDB
    await mongoose.connect(process.env.MONGO_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log(`MongoDB connected: ${mongoose.connection.host}`);
  } catch (error) {
    console.error(`MongoDB connection error: ${error.message}`);
    // Don't exit process in serverless functions
    // In local dev, server.js will handle process.exit
    throw error;
  }
};

export default connectDB;
