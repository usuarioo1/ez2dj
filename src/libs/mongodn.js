import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB)
        console.log("conectado bbdd");
    } catch (error) {
        console.error(error);
    }

}

export default connectDB;