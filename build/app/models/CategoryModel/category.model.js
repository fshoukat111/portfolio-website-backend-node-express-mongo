"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Category = void 0;
const mongoose_1 = require("mongoose");
const categorySchema = new mongoose_1.Schema({
    categoryTitle: {
        type: String,
        required: [true, "Please Enter Category Title"],
    }
});
exports.Category = (0, mongoose_1.model)("Category", categorySchema);
//# sourceMappingURL=category.model.js.map