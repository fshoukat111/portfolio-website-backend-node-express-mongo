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
      type: Schema.Types.String,     
       ref: "Category",
      required: true
    },
    // {
    //   type: String,     
    //    ref: "Category",
    //   required: true
    // },
  ],
  portfolioDescription: {
    type: String,
    required: [true, "Please Enter Portfolio Description"],
  },
  images: [
    {
      public_id: {
        type: String,
        // required: true,
      },
      url: {
        type: String,
        // required: true,s
      },
    },
  ],
  portfolioUrl: {
    type: String,
    required: [true, "Please Enter Portfolio Url"],
  },
});
export const Portfolio = model("Portfolio", portfolioSchema);
