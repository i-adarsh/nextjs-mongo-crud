import mongoose from "mongoose";

const connectMongoDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI); // Added await here
    console.log("connected with db");
  } catch (error) {
    console.log("error connecting with db: " + error);
    // It's good practice to throw the error or handle it more robustly
    // if the DB connection fails, as the app likely can't function.
    throw new Error("Failed to connect to MongoDB: " + error.message);
  }
};

export default connectMongoDB;