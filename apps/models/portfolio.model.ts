const mongoose = require("mongoose");

const portfolioSchema = new mongoose.Schema({
  portfolioTitle: {
    type: String,
    required: [true, "Please Enter Portfolio Title"],
  },
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
    required: true,
  },
});
module.exports = mongoose.model("Portfolio", portfolioSchema);
