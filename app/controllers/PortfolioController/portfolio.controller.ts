import { NextFunction, Request, Response } from "express";
import { Portfolio } from "@app/controllers";
import { catchAsyncError } from "@app/middleware/catchAsyncErrors";
import { ApiFeatures } from "@app/utils/apifeatures";

/**
 * create Portfolio
 */
export const createPortfolio = catchAsyncError(
    async (req: Request, res: Response, next: NextFunction) => {
        const portfolio = await Portfolio.create(req.body);
        res.status(200).json({
            sucess: true,
            portfolio,
        });
    }
);

/**
 * get all Portfolio
 */
export const getAllPortfolio = catchAsyncError(
    async (req: Request, res: Response, next: NextFunction) => {
        const portfolioCount = await Portfolio.countDocuments();
        const resultPerPage = 3;
        let apiFeatures = new ApiFeatures(
            Portfolio.find().populate("categories"), req.query)
            .pagination(resultPerPage);
        const portfolios = await apiFeatures.query;
        res.status(200).json({
            success: true,
            portfolios,
            portfolioCount,
        });
    }
);

/**
 * update Portfolio by Id
 */
export const updatePortfolio = catchAsyncError(
    async (req: Request, res: Response, next: NextFunction) => {
        const portfolio = await Portfolio.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new: true,
                runValidator: true,
                useFindAndModify: false,
            }
        );
        res.status(200).send(portfolio);
    }
);

/**
 * delete Portfolio by Id
 */
export const deletePortfolio = catchAsyncError(
    async (req: Request, res: Response, next: NextFunction) => {
        const portfolio = await Portfolio.findByIdAndDelete(req.params.id);
        res.send(portfolio);
    }
);
