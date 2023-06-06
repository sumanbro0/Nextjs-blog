import mongoose from "mongoose";

let isConnected = false;

export const connect = async () => {
    mongoose.set("strictQuery", true);

    if (isConnected) {
        console.log("Already Connected To MongoDB");
        return;
    }
    try {
        await mongoose.connect(process.env.MONGO, {
            dbName: "blog",
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Connected")
    } catch (e) {
        console.log(e);
    }
};