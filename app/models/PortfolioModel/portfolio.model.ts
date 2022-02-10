import { mongoose } from "@app/config/database";

const portfolioSchema = new mongoose.Schema({
  portfolioTitle: {
    type: String,
    required: [true, "Please Enter Portfolio Title"],
  },
  categories:[{
    type:mongoose.Schema.ObjectId,
    ref: 'Category',
    required:true
  }],
  portfolioDescription: {
    type: String,
    required: [true, "Please Enter Portfolio Description"],
  },
  // portfolioImages: [
  //   {
  //     publicId: {
  //       type: String,
  //       required: true,
  //     },
  //     imageUrl: {
  //       type: String,
  //       required: true,
  //     },
  //   },
  // ],
  portfolioUrl: {
    type: String,
    required: [true, 'Please Enter Portfolio Url'],
  },
});
module.exports = mongoose.model("Portfolio", portfolioSchema);
