import { Document, Schema, Types, model } from 'mongoose';

const portfolioSchema = new Schema({
  portfolioTitle: {
    type: String,
    required: [true, "Please Enter Portfolio Title"],
  },
  categories: [{
    type: Schema.Types.ObjectId,
    ref: 'Category',
    required: true
  }],
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
    required: [true, 'Please Enter Portfolio Url'],
  },
});
export const Portfolio = model("Portfolio", portfolioSchema);
