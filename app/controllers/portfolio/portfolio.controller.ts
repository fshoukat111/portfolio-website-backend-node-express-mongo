import { NextFunction, Request, Response } from "express";
import { Portfolio } from "@app/controllers";
import { catchAsyncError } from "@app/middleware/catchAsyncErrors";
import { ApiFeatures } from "@app/utils/apifeatures";
// import { cloudinary } from "@app/utils/cloudinary";
const cloudinary = require("cloudinary")
// const cloudinary = require("@app/utils/cloudinary")

/**
 * get all Portfolio
 */
export const getAllPortfolio = catchAsyncError(
    async (req: Request, res: Response, next: NextFunction) => {
        const resultPerPage = 3;
        let apiFeatures = new ApiFeatures(
            Portfolio.find().populate("categories.categoryTitle"), req.query)
            .pagination(resultPerPage);
        const portfolios = await apiFeatures.query;
        res.status(200).send(
            portfolios,
            // portfolioCount,
        );
    }
);

export const getPortfolioById = catchAsyncError(
    async (req: Request, res: Response, next: NextFunction) => {
        const id = req.params.id;
        const portfolio = await Portfolio.findById(id);
        res.status(200).send(
            portfolio,
        );
    }
);
