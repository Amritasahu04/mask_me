import mongoose from "mongoose";

const connectDB = async () => {
  try {
    let uri = process.env.MONGO_URI;

    // Help fix common mistake: URL-encoded or malformed URI from browser
    if (uri && !uri.startsWith("mongodb://") && !uri.startsWith("mongodb+srv://")) {
      try {
        const decoded = decodeURIComponent(uri);
        if (
          decoded.startsWith("mongodb://") ||
          decoded.startsWith("mongodb+srv://")
        ) {
          uri = decoded;
          console.warn(
            "[connectDB] MONGO_URI was URL-encoded; decoded it automatically."
          );
        }
      } catch (e) {
        console.warn(
          "[connectDB] MONGO_URI does not look like a valid Mongo URI and could not be decoded."
        );
      }
    }

    if (!uri) {
      throw new Error("MONGO_URI is not set in .env");
    }

    await mongoose.connect(uri);
    console.log("MongoDB Connected");
  } catch (error) {
    console.error("MongoDB connection error:", error.message || error);
    process.exit(1);
  }
};

export default connectDB;


