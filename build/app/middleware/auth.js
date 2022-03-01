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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authorizeRoles = exports.isAuthenticatedUser = void 0;
const errorhandler_1 = require("@app/utils/errorhandler");
const catchAsyncErrors_1 = require("@app/middleware/catchAsyncErrors");
const controllers_1 = require("@app/controllers");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
exports.isAuthenticatedUser = (0, catchAsyncErrors_1.catchAsyncError)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { token } = req.cookies;
    const secret = String(process.env.JWT_SECRET);
    if (!token) {
        return next(new errorhandler_1.ErrorHandler("Please Login to access this resource", 401));
    }
    const decodedData = jsonwebtoken_1.default.verify(token, secret);
    req.body.user = yield controllers_1.User.findById(decodedData.id);
    next();
}));
const authorizeRoles = (...roles) => {
    return (req, res, next) => {
        if (!roles.includes(req.body.user.role)) {
            return next(new errorhandler_1.ErrorHandler(`Role: ${req.body.user.role} is not allowed to access this resouce `, 403));
        }
        next();
    };
};
exports.authorizeRoles = authorizeRoles;
//# sourceMappingURL=auth.js.map