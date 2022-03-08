import mongoose from "mongoose";
import { ConnectOptions } from "mongodb";

export const connectDataBase = () => {
    mongoose.connect('mongodb://localhost:27017/portfolio', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }as ConnectOptions).then((data:any) => {
    });
    // mongoose.connect(`${process.env.MONGO_URI}` || 'localhost:27017/portfolio', {
    //     useNewUrlParser: true,
    //     useUnifiedTopology: true,
    // }as ConnectOptions).then((data:any) => {
    // });
}
