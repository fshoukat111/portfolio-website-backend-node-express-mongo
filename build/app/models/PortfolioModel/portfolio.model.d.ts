/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/error" />
import { Document } from "mongoose";
export interface IPortfolio extends Document {
    portfolioTitle?: string;
    categories?: [];
    portfolioDescription?: string;
    portfolioImages?: [];
    portfolioUrl?: string;
}
export declare const Portfolio: import("mongoose").Model<any, {}, {}, {}>;
