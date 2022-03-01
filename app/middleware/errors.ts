import { NextFunction, Request, Response } from "express";
import {ErrorHandler} from '@app/utils/errorhandler'

export = (
  error: any,
  request: Request,
  response: Response,
  next: NextFunction
) => {
  error.status = error.status || 500;
  error.message = error.message || "Internal Server Error";

  //Wrong Mongodb Id error
  if (error.name === "CastError") {
    const message = `Resources Not Found. Invalid:${error.path}`;
    error = new ErrorHandler(message, 400);
  }

  //Mongoose Duplicate key error
  if (error.code == 1100) {
    const message = `Duplicate ${Object.keys(error.keyValue)} Entered`;
    error = new ErrorHandler(message, 400);
  }

  // Wrong JWT error
  if (error.name === "JsonWebTokenError") {
    const message = `Json Web Token is invalid, Try again `;
    error = new ErrorHandler(message, 400);
  }

  // JWT EXPIRE error
  if (error.name === "TokenExpiredError") {
    const message = `Json Web Token is Expired, Try again `;
    error = new ErrorHandler(message, 400);
  }

  response.status(error.status).json({
    success: false,
    messsage: error.message,
  });
};
