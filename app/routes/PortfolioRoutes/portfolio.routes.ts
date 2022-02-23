import express from "express";
const router = express.Router();
import {
    createPortfolio,
    deletePortfolio,
    getAllPortfolio,
    updatePortfolio
} from "@app/controllers/PortfolioController/portfolio.controller";
import { authorizeRoles, isAuthenticatedUser } from "@app/middleware/auth";

//get all Portfolio
router.route("/portfolio").get(getAllPortfolio);
//post single Portfolio
router.route("/admin/portfolio/create").post(isAuthenticatedUser, authorizeRoles("Admin"), createPortfolio);
//delete and update single Portfolio
router.route("/admin/portfolio/:id").put(isAuthenticatedUser, authorizeRoles("Admin"), updatePortfolio)
    .delete(isAuthenticatedUser, authorizeRoles("Admin"), deletePortfolio);



module.exports = router;