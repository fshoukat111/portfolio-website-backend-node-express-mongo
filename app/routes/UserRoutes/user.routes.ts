import express from "express";
const router = express.Router();
import { registerUser,loginUser,logout, getAllUsers } from "@app/controllers/UserController/user.controller";

//post single Portfolio
router.route("/register").post(registerUser);
router.route("/login").post(loginUser);
router.route("/users").get(getAllUsers);
router.route("/logout").post(logout);
module.exports = router;