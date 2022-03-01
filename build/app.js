"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const body_parser_1 = __importDefault(require("body-parser"));
const routes_1 = require("@app/routes");
const errors_1 = __importDefault(require("@app/middleware/errors"));
const cors_1 = __importDefault(require("cors"));
exports.app = (0, express_1.default)();
if (process.env.NODE_ENV !== "PRODUCTION") {
    require("dotenv").config({ path: ".env" });
}
exports.app.use(express_1.default.json());
exports.app.use((0, cookie_parser_1.default)());
exports.app.use((0, cors_1.default)({
    origin: "http://localhost:4200",
}));
exports.app.use(body_parser_1.default.urlencoded({ extended: true }));
exports.app.use("/api/v1", routes_1.CategoryRoutes);
exports.app.use("/api/v1", routes_1.PortfolioRoutes);
exports.app.use("/api/v1", routes_1.UserRoutes);
exports.app.use(errors_1.default);
//# sourceMappingURL=app.js.map