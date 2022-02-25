import { NextFunction, Request, Response } from "express";
import { sendToken } from "@app/utils/jwtToken";
import { ErrorHandler } from "@app/utils/errorhandler";
import { User } from "@app/controllers";
import { catchAsyncError } from "@app/middleware/catchAsyncErrors";

/**
 * register user
 */
export const registerUser = catchAsyncError(async (req: Request, res: Response, next: NextFunction) => {
    const { userName, email, password } = req.body;
    const user = await User.create({
        userName,
        email,
        password
    });
    sendToken(user, 201, res);
});

/**
 * login user
 */
export const loginUser = catchAsyncError(async (req: Request, res: Response, next: NextFunction) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return next(new ErrorHandler("Please Enter Email and Password", 400));
    }
    const user = await User.findOne({ email }).select("+password");

    if (!user) {
        return next(new ErrorHandler("Invalid Email or Password", 401));
    }
    let isPasswordMatched = await user.comparePassword(password);

    if (!isPasswordMatched) {
        return next(new ErrorHandler("Password Not match", 401));
    }
    sendToken(user, 200, res);
});

export const getAllUsers = catchAsyncError(async (req: Request, res: Response, next: NextFunction) => {
    const users = await User.find();
    res.status(200).json({
        success: true,
        users,
    });
});


/**
 * logout
 */
export const logout = catchAsyncError(async (req: Request, res: Response, next: NextFunction) => {
    res.cookie("token", null, {
        expires: new Date(Date.now()),
        httpOnly: true,
    });

    res.status(200).json({
        success: true,
        message: "Logged Out",
    });
});