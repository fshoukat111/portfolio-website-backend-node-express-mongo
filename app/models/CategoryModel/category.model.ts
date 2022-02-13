import { mongoose } from "@app/config/database";

const categorySchema = new mongoose.Schema({
    categoryTitle: {
        type: String,
        required: [true, "Please Enter Category Title"],
    }
});
module.exports = mongoose.model("Category", categorySchema);
