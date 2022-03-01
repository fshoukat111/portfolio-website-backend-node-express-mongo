import { Router } from "express";
import { createCategory, getCategories } from "@app/controllers/CategoryController/category.controller";
import { authorizeRoles, isAuthenticatedUser } from "@app/middleware/auth";
export const CategoryRoutes = Router();


CategoryRoutes.route("/admin/category/create")
    .post(isAuthenticatedUser, authorizeRoles("Admin"), createCategory);
CategoryRoutes.route("/categories").get(getCategories);

