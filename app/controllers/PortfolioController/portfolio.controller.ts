import { NextFunction, Request, Response } from "express";

const Portfolio = require("@app/models/PortfolioModel/portfolio.model");
const catchAsyncError = require("@app/middleware/catchAsyncErrors");

/**
 * create Portfolio
 */
export const createPortfolio = catchAsyncError(async (req: Request, res: Response, next: NextFunction) => {
    const portfolio = await Portfolio.create(req.body);
    res.status(200).json({
        sucess: true,
        portfolio,
    });
});

/**
 * get all Portfolio
 */
export const getAllPortfolio = catchAsyncError(async (req: Request, res: Response, next: NextFunction) => {
    const page = Number(req.query.page);
    const limit = Number(req.query.limit);
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;
    const portfolios = await Portfolio.find().populate("categories").skip(startIndex).limit(limit);
    endIndex <= portfolios.length ? portfolios.next = { page: page + 1, limit: limit } : null;
    startIndex > 0 ? portfolios.previous = {page: page - 1,limit: limit}:null;
    res.status(200).json({
        success: true,
        portfolios,
        nextPages: portfolios.next,
        previousPage: portfolios.previous,

    });
});

/**
 * update Portfolio by Id
 */
export const updatePortfolio = catchAsyncError(async (req: Request, res: Response, next: NextFunction) => {
    const portfolio = await Portfolio.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidator: true,
        useFindAndModify: false
    })
    res.status(200).send(portfolio)
});

/**
 * delete Portfolio by Id
 */
export const deletePortfolio = catchAsyncError(async (req: Request, res: Response, next: NextFunction) => {
    const portfolio = await Portfolio.findByIdAndDelete(req.params.id)
    res.send(portfolio)
});