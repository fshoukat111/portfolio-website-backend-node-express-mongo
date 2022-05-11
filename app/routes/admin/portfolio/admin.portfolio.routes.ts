import { Router } from "express";
import {
    createAdminPortfolio,
    getAllAdminPortfolio,
    getAdminPortfolioById,
    updateAdminPortfolio,
    deleteAdminPortfolio
} from "@app/controllers/admin/portfolio/admin.portfolio";
import { authorizeRoles, isAuthenticatedUser } from "@app/middleware/auth";
import { upload } from "@app/middleware/multer";
export const adminPortfolioRoutes = Router();


//get all Portfolio for admin
adminPortfolioRoutes.route("/admin/portfolio").get(isAuthenticatedUser, authorizeRoles("Admin"),getAllAdminPortfolio);
//get single Portfolio by id
adminPortfolioRoutes.route("/admin/portfolio/:id").get(isAuthenticatedUser, authorizeRoles("Admin"),getAdminPortfolioById);
//post single Portfolio
adminPortfolioRoutes.route("/admin/portfolio/create")
    .post(isAuthenticatedUser, authorizeRoles("Admin"), upload.array('image'), createAdminPortfolio);
//delete and update single Portfolio
adminPortfolioRoutes.route("/admin/portfolio/:id")
    .put(isAuthenticatedUser, authorizeRoles("Admin"), updateAdminPortfolio)
    .delete(isAuthenticatedUser, authorizeRoles("Admin"), deleteAdminPortfolio);