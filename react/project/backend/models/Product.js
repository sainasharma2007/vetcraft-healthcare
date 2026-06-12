// import mongoose from "mongoose";

// const productSchema = new mongoose.Schema(
//   {
//     title: { type: String, required: true, trim: true },
//     category: { type: String, required: true, trim: true },
//     image: { type: String, default: "" },
//     mrp: { type: String, default: "" },
//     packSize: { type: String, default: "" },
//     description: { type: [String], default: [] },
//   },
//   { timestamps: true }
// );

// const Product = mongoose.model("Product", productSchema);
// export default Product;

import mongoose from "mongoose";

const variantSchema = new mongoose.Schema(
  {
    mrp: { type: String, default: "" },
    packSize: { type: String, default: "" },
  },
  { _id: false }
);

const productSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    category: { type: String, required: true, trim: true },
    image: { type: String, default: "" },
    variants: { type: [variantSchema], default: [] },
    description: { type: [String], default: [] },
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", productSchema);
export default Product;