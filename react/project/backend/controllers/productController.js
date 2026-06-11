import Product from "../models/Product.js";

export const getAllProducts = async (req, res) => {
  try {
    const { search, category } = req.query;
    let filter = {};
    if (search) filter.$or = [{ title: { $regex: search, $options: "i" } }, { category: { $regex: search, $options: "i" } }];
    if (category) filter.category = { $regex: category, $options: "i" };
    const products = await Product.find(filter).sort({ createdAt: -1 });
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: "Server error fetching products" });
  }
};

export const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ message: "Product not found" });
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: "Server error fetching product" });
  }
};

export const createProduct = async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({ message: "Server error creating product" });
  }
};
