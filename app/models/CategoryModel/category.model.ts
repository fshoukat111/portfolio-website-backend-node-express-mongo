import { Document, Schema, Types, model } from 'mongoose';

const categorySchema = new Schema({
    categoryTitle: {
        type: String,
        required: [true, "Please Enter Category Title"],
    }
});
export const Category =  model("Category", categorySchema);
