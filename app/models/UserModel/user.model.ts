import { mongoose } from "@app/config/database";
import { NextFunction, Request, Response } from "express";

const validator = require("validator");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const userSchema = new mongoose.Schema({
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
        default: "user",
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

// bycrpt password
userSchema.pre("save", async function (this: any, next: NextFunction) {
    if (!this.isModified("password")) {
        next();
    }
    this.password = await bcrypt.hash(this.password, 10);
});

// JWT TOKEN
userSchema.methods.getJwtToken = function () {
    return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRE,
    });
};

/**
 * compare password
 * @param this 
 * @param password 
 */
userSchema.methods.comparePassword = async function (this: any, password: string) {
    console.log("password",password)
    return await bcrypt.compare(password, this.password);
};
module.exports = mongoose.model("User", userSchema);
