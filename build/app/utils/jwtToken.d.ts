import { Response } from "express";
import { User } from "@app/models/UserModel/user.model";
export declare const sendToken: (user: InstanceType<typeof User>, statusCode: any, res: Response) => void;
