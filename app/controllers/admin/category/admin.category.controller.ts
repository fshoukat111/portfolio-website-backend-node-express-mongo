import { NextFunction, Request, Response } from "express";
import { Category } from "@app/controllers";
import { catchAsyncError } from "@app/middleware/catchAsyncErrors";

/**
 * admin create Category
 */
 export const createAdminCategory = catchAsyncError(async (req: Request, res: Response, next: NextFunction) => {
    const category = await Category.create(req.body);
    res.status(200).json({
        sucess: true,
        category
    });
});

/**
 *  category list for admin
 */
export const getAdminCategories = catchAsyncError(async (req: Request, res: Response, next: NextFunction) => {
    const categories = await Category.find();
    res.status(200).send(categories);
});

/**
 * admin update Category by Id
 */
 export const updateAdminCategory = catchAsyncError(
    async (req: Request, res: Response, next: NextFunction) => {
        const category = await Category.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new: true,
                runValidator: true,
                useFindAndModify: false,
            }
        );
        res.status(200).send(category);
    }
);

/**
 * admin delete Category by Id
 */
export const deleteAdminCategory = catchAsyncError(
    async (req: Request, res: Response, next: NextFunction) => {
        const category = await Category.findByIdAndDelete(req.params.id);
        res.send(category);
    }
);
