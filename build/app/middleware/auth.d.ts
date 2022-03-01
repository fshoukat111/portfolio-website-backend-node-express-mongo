/// <reference types="qs" />
import { NextFunction, Request, Response } from "express";
export declare const isAuthenticatedUser: (req: Request<import("express-serve-static-core").ParamsDictionary, any, any, import("qs").ParsedQs, Record<string, any>>, res: Response<any, Record<string, any>>, next: NextFunction) => void;
export declare const authorizeRoles: (...roles: any[]) => (req: Request, res: Response, next: NextFunction) => void;
