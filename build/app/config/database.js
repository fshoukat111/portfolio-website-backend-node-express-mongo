"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectDataBase = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const connectDataBase = () => {
    mongoose_1.default.connect('mongodb://localhost:27017/portfolio', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then((data) => {
    });
};
exports.connectDataBase = connectDataBase;
//# sourceMappingURL=database.js.map