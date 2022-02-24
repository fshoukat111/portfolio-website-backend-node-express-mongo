import express from "express";
const router = express.Router();
import { createCategory, getCategories } from "@app/controllers/CategoryController/category.controller";
import { authorizeRoles, isAuthenticatedUser } from "@app/middleware/auth";


router.route("/admin/category/create").post(isAuthenticatedUser,authorizeRoles("Admin"),createCategory);
router.route("/categories").get(getCategories);

module.exports = router;
