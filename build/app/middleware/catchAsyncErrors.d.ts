import { NextFunction, Request, Response } from "express";
export declare const catchAsyncError: (theFunc: Function) => (req: Request, res: Response, next: NextFunction) => void;
