import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://PickUp:1234@cluster0.nudpyzt.mongodb.net/food-del').then(() => console.log("MongoDB connected successfully"));
}