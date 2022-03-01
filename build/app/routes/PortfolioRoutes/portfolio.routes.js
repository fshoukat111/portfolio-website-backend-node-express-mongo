"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PortfolioRoutes = void 0;
const express_1 = require("express");
const portfolio_controller_1 = require("@app/controllers/PortfolioController/portfolio.controller");
const auth_1 = require("@app/middleware/auth");
exports.PortfolioRoutes = (0, express_1.Router)();
exports.PortfolioRoutes.route("/portfolio").get(portfolio_controller_1.getAllPortfolio);
exports.PortfolioRoutes.route("/admin/portfolio/create").post(auth_1.isAuthenticatedUser, (0, auth_1.authorizeRoles)("Admin"), portfolio_controller_1.createPortfolio);
exports.PortfolioRoutes.route("/admin/portfolio/:id").put(auth_1.isAuthenticatedUser, (0, auth_1.authorizeRoles)("Admin"), portfolio_controller_1.updatePortfolio)
    .delete(auth_1.isAuthenticatedUser, (0, auth_1.authorizeRoles)("Admin"), portfolio_controller_1.deletePortfolio);
//# sourceMappingURL=portfolio.routes.js.map