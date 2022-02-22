import express from "express";
const router = express.Router();
import { createCategory, getCategories } from "@app/controllers/CategoryController/category.controller";


router.route("/admin/category/create").post(createCategory);
router.route("/categories").get(getCategories);

module.exports = router;
