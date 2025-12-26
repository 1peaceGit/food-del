import mongoose from "mongoose";

export const connectDB = async ()=>{
    await mongoose.connect('mongodb+srv://peace:80803170@cluster0.bwhdsxd.mongodb.net/food-del').then(()=>console.log("DB Connected"));
}