/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/error" />
import { Document } from 'mongoose';
export interface IUser extends Document {
    email?: string;
    userName?: string;
    password?: string;
    role?: string;
    createdAt?: Date;
}
export declare const User: import("mongoose").Model<any, {}, {}, {}>;
