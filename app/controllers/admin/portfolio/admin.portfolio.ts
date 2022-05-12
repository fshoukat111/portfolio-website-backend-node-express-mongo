import { NextFunction, Request, Response } from "express";
import { Portfolio } from "@app/controllers";
import { catchAsyncError } from "@app/middleware/catchAsyncErrors";
import { ApiFeatures } from "@app/utils/apifeatures";
const cloudinary = require("cloudinary")
// const cloudinary = require("@app/utils/cloudinary")

/**
 * admin create Portfolio
 */
export const createAdminPortfolio = catchAsyncError(
    async (req: Request, res: Response, next: NextFunction) => {
        const portfolio = await Portfolio.create(req.body);
        res.status(200).json({
            sucess: true,
            portfolio,
        });
    }
);

/**
 * get all Portfolio list for admin
 */
export const getAllAdminPortfolio = catchAsyncError(
    async (req: Request, res: Response, next: NextFunction) => {
        const resultPerPage = 2;
        const portfolioCount = await Portfolio.countDocuments();
        let apiFeatures = new ApiFeatures(
            Portfolio.find().populate("categories.categoryTitle"), req.query)
            .pagination(resultPerPage);
        const portfolios = await apiFeatures.query;
        res.status(200).send({
            portfolios,
            resultPerPage,
            portfolioCount
        }

        );
    }
);

/**
 * get all Portfolio by id for admin
 */
export const getAdminPortfolioById = catchAsyncError(
    async (req: Request, res: Response, next: NextFunction) => {
        const id = req.params.id;
        const portfolio = await Portfolio.findById(id);
        res.status(200).send(
            portfolio,
        );
    }
);

/**
 * admin update Portfolio by Id
 */
export const updateAdminPortfolio = catchAsyncError(
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
 * admin delete Portfolio by Id
 */
export const deleteAdminPortfolio = catchAsyncError(
    async (req: Request, res: Response, next: NextFunction) => {
        const portfolio = await Portfolio.findByIdAndDelete(req.params.id);
        res.send(portfolio);
    }
);
