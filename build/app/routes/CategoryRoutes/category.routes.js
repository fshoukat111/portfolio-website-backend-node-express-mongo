"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryRoutes = void 0;
const express_1 = require("express");
const category_controller_1 = require("@app/controllers/CategoryController/category.controller");
const auth_1 = require("@app/middleware/auth");
exports.CategoryRoutes = (0, express_1.Router)();
exports.CategoryRoutes.route("/admin/category/create")
    .post(auth_1.isAuthenticatedUser, (0, auth_1.authorizeRoles)("Admin"), category_controller_1.createCategory);
exports.CategoryRoutes.route("/categories").get(category_controller_1.getCategories);
//# sourceMappingURL=category.routes.js.map