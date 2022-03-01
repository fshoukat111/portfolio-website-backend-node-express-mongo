import { Document, Schema, Types, model } from "mongoose";

export interface IPortfolio extends Document {
  portfolioTitle?: string;
  categories?: [];
  portfolioDescription?: string;
  portfolioImages?: [];
  portfolioUrl?: string;
}

const portfolioSchema: Schema = new Schema({
  portfolioTitle: {
    type: String,
    required: [true, "Please Enter Portfolio Title"],
  },
  categories: [
    {
      type: Schema.Types.ObjectId,
      ref: "Category",
      // required: true
    },
  ],
  portfolioDescription: {
    type: String,
    required: [true, "Please Enter Portfolio Description"],
  },
  portfolioImages: [
    {
      publicId: {
        type: String,
        required: true,
      },
      imageUrl: {
        type: String,
        required: true,
      },
    },
  ],
  portfolioUrl: {
    type: String,
    required: [true, "Please Enter Portfolio Url"],
  },
});
export const Portfolio = model("Portfolio", portfolioSchema);
