import mongoose from "mongoose";
import { ConnectOptions } from "mongodb";

export const connectDataBase = () => {
    mongoose.connect(`${process.env.MONGO_URI}`, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }as ConnectOptions).then((data:any) => {
    })
}
