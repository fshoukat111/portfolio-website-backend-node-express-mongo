import { Router } from "express";

import { 
    registerUser,loginUser,
    logout, 
    getAllUsers } from "@app/controllers/UserController/user.controller";
export const UserRoutes = Router();


//post single Portfolio
UserRoutes.route("/register").post(registerUser);
UserRoutes.route("/login").post(loginUser);
UserRoutes.route("/users").get(getAllUsers);
UserRoutes.route("/logout").post(logout);
