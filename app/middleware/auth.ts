import { NextFunction, Request, Response } from "express";
import { ErrorHandler } from "@app/utils/errorhandler";
import { catchAsyncError } from "@app/middleware/catchAsyncErrors";
import { User } from "@app/controllers";

import jwt from "jsonwebtoken";

export const isAuthenticatedUser = catchAsyncError(async (req: Request, res: Response, next: NextFunction) => {
    const { token } = req.cookies;
    const secret = String(process.env.JWT_SECRET);

    if (!token) {
        return next(new ErrorHandler("Please Login to access this resource", 401));
    }
    const decodedData = jwt.verify(token, secret);
    req.body.user = await User.findById((decodedData as any).id);
    next();
});


export const authorizeRoles = (...roles: any[]) => {
    return (req: Request, res: Response, next: NextFunction) => {
        if (!roles.includes(req.body.user.role)) {
            return next(
                new ErrorHandler(
                    `Role: ${req.body.user.role} is not allowed to access this resouce `,
                    403
                )
            );
        }
        next();
    };
};