import { Router } from "express";

import { 
    registerUser,loginUser,
    logout, 
    getAllUsers } from "@app/controllers/user/user.controller";
export const userRoutes = Router();


//post single Portfolio
userRoutes.route("/register").post(registerUser);
userRoutes.route("/login").post(loginUser);
userRoutes.route("/users").get(getAllUsers);
userRoutes.route("/logout").post(logout);
