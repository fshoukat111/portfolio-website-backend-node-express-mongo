import { Router } from "express";
import {
    createPortfolio,
    deletePortfolio,
    getAllPortfolio,
    updatePortfolio
} from "@app/controllers/PortfolioController/portfolio.controller";
import { authorizeRoles, isAuthenticatedUser } from "@app/middleware/auth";
export const PortfolioRoutes = Router();


//get all Portfolio
PortfolioRoutes.route("/portfolio").get(getAllPortfolio);
//post single Portfolio
PortfolioRoutes.route("/admin/portfolio/create").post(isAuthenticatedUser, authorizeRoles("Admin"), createPortfolio);
//delete and update single Portfolio
PortfolioRoutes.route("/admin/portfolio/:id").put(isAuthenticatedUser, authorizeRoles("Admin"), updatePortfolio)
    .delete(isAuthenticatedUser, authorizeRoles("Admin"), deletePortfolio);