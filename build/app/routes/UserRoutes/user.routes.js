"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRoutes = void 0;
const express_1 = require("express");
const user_controller_1 = require("@app/controllers/UserController/user.controller");
exports.UserRoutes = (0, express_1.Router)();
exports.UserRoutes.route("/register").post(user_controller_1.registerUser);
exports.UserRoutes.route("/login").post(user_controller_1.loginUser);
exports.UserRoutes.route("/users").get(user_controller_1.getAllUsers);
exports.UserRoutes.route("/logout").post(user_controller_1.logout);
//# sourceMappingURL=user.routes.js.map