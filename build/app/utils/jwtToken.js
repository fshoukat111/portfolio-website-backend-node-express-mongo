"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendToken = void 0;
const sendToken = (user, statusCode, res) => {
    const token = user.getJwtToken();
    const option = {
        expiresDate: new Date(Date.now() + Number(process.env.COOKIE_EXPIRE) * 24 * 60 * 60 * 1000),
        httpOnly: true
    };
    res.status(statusCode).cookie("token", token, option).json({
        success: true,
        user,
        token
    });
};
exports.sendToken = sendToken;
//# sourceMappingURL=jwtToken.js.map