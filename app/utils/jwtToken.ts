import { NextFunction, Request, Response } from "express";
import  {User} from "@app/models/user/user.model";

//create token and saving cookies
export const sendToken = (user: InstanceType<typeof User>, statusCode: any, res: Response) => {
    const token = user.getJwtToken();

    //save cookies and expire
    const option = {
        expiresDate:new Date(Date.now() + Number(process.env.COOKIE_EXPIRE) * 24 * 60 * 60 * 1000
        ),
        httpOnly:false
    }
    res.setHeader('token',token)

    res.status(statusCode).cookie("token",token,option).json({
        success: true,
        user,
        token
    });
}