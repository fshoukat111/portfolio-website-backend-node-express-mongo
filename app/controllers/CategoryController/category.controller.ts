import { NextFunction, Request, Response } from "express";
const catchAsyncError = require("@app/middleware/catchAsyncErrors");
const Category = require("@app/models/CategoryModel/category.model");

export const createCategory = catchAsyncError(async (req: Request, res: Response, next: NextFunction) => {
    const category = await Category.create(req.body);
    res.status(200).json({
        sucess: true,
        category
    });
});

export const getCategories = catchAsyncError(async (req: Request, res: Response, next: NextFunction) => {
    const categories = await Category.find();
    res.status(200).send(categories);
});

