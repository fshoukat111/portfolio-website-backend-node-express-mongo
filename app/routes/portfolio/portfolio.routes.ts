import { Router } from "express";
import {

    getAllPortfolio,
    getPortfolioById,
} from "@app/controllers/portfolio/portfolio.controller";
export const portfolioRoutes = Router();


//get all Portfolio
portfolioRoutes.route("/portfolio").get(getAllPortfolio);
portfolioRoutes.route("/portfolio/:id").get(getPortfolioById);
