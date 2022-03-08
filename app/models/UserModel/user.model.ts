import { Document, Schema, Types, model } from 'mongoose';
import { NextFunction, Request, Response } from "express";
import validator from "validator";
// import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";


export interface IUser extends Document {
    email?: string;
    userName?: string;
    password?: string;
    createdAt?: Date;
    role?: string;
    token?: string;
}




const userSchema = new Schema({
    userName: {
        type: String,
        required: [true, "Please Enter User Name"],
        maxLength: [30, "Name cannot exceed 30 characters"],
        minLength: [4, "Name should have more than 4 characters"],
    },
    email: {
        type: String,
        required: [true, "Please Enter Your Email"],
        unique: true,
        validate: [validator.isEmail, "Please Enter a valid Email"],
    },
    password: {
        type: String,
        required: [true, "Please Enter Your Password"],
        minLength: [8, "Password should be greater than 8 characters"],
        select: false,
    },
    role: {
        type: String,
        default: "User",
    },
    token: {
        type: String,
        // required: true,
    },
    createdAt: {
        type: Date,
        default: new Date(Date.now()),
    },
});

// bycrpt password
userSchema.pre("save", async function(next: NextFunction) {
    if (!this.isModified("password")) {
        next();
    }
    this.password = await bcrypt.hash(this.password,11);
});

// JWT TOKEN
// userSchema.methods.getJwtToken = function () {
//     const secret = String(process.env.JWT_SECRET);
//     return jwt.sign({ id: this._id }, secret, {
//         expiresIn: process.env.JWT_EXPIRE,
//     });
// };



// userSchema.token = token;

/**
 * compare password
 * @param this 
 * @param password 
 */
userSchema.methods.comparePassword = function (this: any, password: string) {
    return bcrypt.compare(password, this.password);
};
export const User = model("User", userSchema);
