"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Portfolio = void 0;
const mongoose_1 = require("mongoose");
const portfolioSchema = new mongoose_1.Schema({
    portfolioTitle: {
        type: String,
        required: [true, "Please Enter Portfolio Title"],
    },
    categories: [
        {
            type: mongoose_1.Schema.Types.ObjectId,
            ref: "Category",
        },
    ],
    portfolioDescription: {
        type: String,
        required: [true, "Please Enter Portfolio Description"],
    },
    portfolioImages: [
        {
            publicId: {
                type: String,
                required: true,
            },
            imageUrl: {
                type: String,
                required: true,
            },
        },
    ],
    portfolioUrl: {
        type: String,
        required: [true, "Please Enter Portfolio Url"],
    },
});
exports.Portfolio = (0, mongoose_1.model)("Portfolio", portfolioSchema);
//# sourceMappingURL=portfolio.model.js.map