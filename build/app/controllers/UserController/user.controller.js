"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.logout = exports.getAllUsers = exports.loginUser = exports.registerUser = void 0;
const jwtToken_1 = require("@app/utils/jwtToken");
const errorhandler_1 = require("@app/utils/errorhandler");
const controllers_1 = require("@app/controllers");
const catchAsyncErrors_1 = require("@app/middleware/catchAsyncErrors");
exports.registerUser = (0, catchAsyncErrors_1.catchAsyncError)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { userName, email, password } = req.body;
    const user = yield controllers_1.User.create({
        userName,
        email,
        password
    });
    (0, jwtToken_1.sendToken)(user, 201, res);
}));
exports.loginUser = (0, catchAsyncErrors_1.catchAsyncError)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    if (!email || !password) {
        return next(new errorhandler_1.ErrorHandler("Please Enter Email and Password", 400));
    }
    const user = yield controllers_1.User.findOne({ email }).select("+password");
    if (!user) {
        return next(new errorhandler_1.ErrorHandler("Invalid Email or Password", 401));
    }
    let isPasswordMatched = yield user.comparePassword(password);
    if (!isPasswordMatched) {
        return next(new errorhandler_1.ErrorHandler("Password Not match", 401));
    }
    (0, jwtToken_1.sendToken)(user, 200, res);
}));
exports.getAllUsers = (0, catchAsyncErrors_1.catchAsyncError)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield controllers_1.User.find();
    res.status(200).json({
        success: true,
        users,
    });
}));
exports.logout = (0, catchAsyncErrors_1.catchAsyncError)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    res.cookie("token", null, {
        expires: new Date(Date.now()),
        httpOnly: true,
    });
    res.status(200).json({
        success: true,
        message: "Logged Out",
    });
}));
//# sourceMappingURL=user.controller.js.map