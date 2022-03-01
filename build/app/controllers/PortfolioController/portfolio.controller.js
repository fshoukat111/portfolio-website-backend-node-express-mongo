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
exports.deletePortfolio = exports.updatePortfolio = exports.getAllPortfolio = exports.createPortfolio = void 0;
const controllers_1 = require("@app/controllers");
const catchAsyncErrors_1 = require("@app/middleware/catchAsyncErrors");
const apifeatures_1 = require("@app/utils/apifeatures");
exports.createPortfolio = (0, catchAsyncErrors_1.catchAsyncError)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const portfolio = yield controllers_1.Portfolio.create(req.body);
    res.status(200).json({
        sucess: true,
        portfolio,
    });
}));
exports.getAllPortfolio = (0, catchAsyncErrors_1.catchAsyncError)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const portfolioCount = yield controllers_1.Portfolio.countDocuments();
    const resultPerPage = 3;
    let apiFeatures = new apifeatures_1.ApiFeatures(controllers_1.Portfolio.find().populate("categories"), req.query)
        .pagination(resultPerPage);
    const portfolios = yield apiFeatures.query;
    res.status(200).json({
        success: true,
        portfolios,
        portfolioCount,
    });
}));
exports.updatePortfolio = (0, catchAsyncErrors_1.catchAsyncError)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const portfolio = yield controllers_1.Portfolio.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidator: true,
        useFindAndModify: false,
    });
    res.status(200).send(portfolio);
}));
exports.deletePortfolio = (0, catchAsyncErrors_1.catchAsyncError)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const portfolio = yield controllers_1.Portfolio.findByIdAndDelete(req.params.id);
    res.send(portfolio);
}));
//# sourceMappingURL=portfolio.controller.js.map