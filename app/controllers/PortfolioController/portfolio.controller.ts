import { NextFunction, Request, Response } from "express";

const Portfolio = require("@app/models/PortfolioModel/portfolio.model");
const Category = require("@app/models/CategoryModel/category.model");
const catchAsyncError = require("@app/middleware/catchAsyncErrors");

/**
 * create Portfolio
 */
const createPortfolio = catchAsyncError(async (req: Request, res: Response, next: NextFunction) => {
    const portfolio = await Portfolio.create(req.body);
    // const portfolio = await Portfolio.create(req.body).populate("categories");

    res.status(200).json({
        sucess: true,
        portfolio,
    });
});

/**
 * get all Portfolio
 */
const getAllPortfolio = catchAsyncError(async (req: Request, res: Response, next: NextFunction) => {
    const portfolios = await Portfolio.find();
    console.log("portfolios",portfolios)
    res.status(200).send(portfolios);
});

/**
 * update Portfolio by Id
 */
const updatePortfolio = catchAsyncError(async (req: Request, res: Response, next: NextFunction) => {
    const portfolio = await Portfolio.findByIdAndUpdate(req.params.id,req.body ,{
        new:true,
        runValidator:true,
        useFindAndModify:false
    })
    res.status(200).send(portfolio)
});

/**
 * delete Portfolio by Id
 */
const deletePortfolio = catchAsyncError(async (req: Request, res: Response, next: NextFunction) => {
    const portfolio = await Portfolio.findByIdAndDelete(req.params.id)
    res.send(portfolio)
});

export {
    createPortfolio,
    getAllPortfolio,
    updatePortfolio,
    deletePortfolio
}