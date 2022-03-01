"use strict";
const errorhandler_1 = require("@app/utils/errorhandler");
module.exports = (error, request, response, next) => {
    error.status = error.status || 500;
    error.message = error.message || "Internal Server Error";
    if (error.name === "CastError") {
        const message = `Resources Not Found. Invalid:${error.path}`;
        error = new errorhandler_1.ErrorHandler(message, 400);
    }
    if (error.code == 1100) {
        const message = `Duplicate ${Object.keys(error.keyValue)} Entered`;
        error = new errorhandler_1.ErrorHandler(message, 400);
    }
    if (error.name === "JsonWebTokenError") {
        const message = `Json Web Token is invalid, Try again `;
        error = new errorhandler_1.ErrorHandler(message, 400);
    }
    if (error.name === "TokenExpiredError") {
        const message = `Json Web Token is Expired, Try again `;
        error = new errorhandler_1.ErrorHandler(message, 400);
    }
    response.status(error.status).json({
        success: false,
        messsage: error.message,
    });
};
//# sourceMappingURL=errors.js.map