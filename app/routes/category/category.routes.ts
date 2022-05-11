import { Router } from "express";
import { getCategories } from "@app/controllers/category/category.controller";
export const categoryRoutes = Router();


categoryRoutes.route("/categories").get(getCategories);

