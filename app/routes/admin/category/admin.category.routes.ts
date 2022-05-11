import { Router } from "express";
import { 
    createAdminCategory,
    getAdminCategories,
    updateAdminCategory,
    deleteAdminCategory } from "@app/controllers/admin/category/admin.category.controller";
import { authorizeRoles, isAuthenticatedUser } from "@app/middleware/auth";
export const categoryAdminRoutes = Router();


categoryAdminRoutes.route("/admin/category/create")
    .post(isAuthenticatedUser, authorizeRoles("Admin"), createAdminCategory);
categoryAdminRoutes.route("/admin/categories").get(isAuthenticatedUser, authorizeRoles("Admin"),getAdminCategories);

categoryAdminRoutes.route("/admin/category/:id")
    .put(isAuthenticatedUser, authorizeRoles("Admin"), updateAdminCategory)
    .delete(isAuthenticatedUser, authorizeRoles("Admin"), deleteAdminCategory);