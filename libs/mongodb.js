import mongoose from "mongoose"

const connectMongoDB = async () => {
    try{
        mongoose.connect(process.env.MONGODB_URI);
        console.log("connected with db");
    }
    catch (error) {
        console.log("error connecting with db: " + error);
    }
}

export default connectMongoDB;