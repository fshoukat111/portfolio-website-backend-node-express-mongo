import { NextFunction, Request, Response } from "express";

module.exports = (theFunc: Function) => (req: Request, res: Response, next: NextFunction) => {
    Promise.resolve(theFunc(req, res, next)).catch(next);
}