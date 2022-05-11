import { NextFunction, Request, Response } from "express";
import { Category } from "@app/controllers";
import { catchAsyncError } from "@app/middleware/catchAsyncErrors";

/**
 * category list for user
 */
export const getCategories = catchAsyncError(async (req: Request, res: Response, next: NextFunction) => {
    const categories = await Category.find();
    res.status(200).send(categories);
});
