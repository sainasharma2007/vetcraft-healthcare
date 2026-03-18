const express = require("express");
const jwt = require("jsonwebtoken");
const Product = require("../models/Product");   // direct import

const router = express.Router();

// JWT secret from .env
const JWT_SECRET = process.env.JWT_SECRET || "your_jwt_secret_key";

// Middleware to verify JWT
function authenticateToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1]; // Expect: Bearer <token>

  if (!token) {
    return res
      .status(401)
      .json({ message: "Access denied. No token provided." });
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded; // attach userId to request
    next();
  } catch (err) {
    return res.status(403).json({ message: "Invalid token" });
  }
}

// -------------------- ROUTES --------------------

// GET all products (public)  -> GET /api/products
router.get("/", async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    console.error("Error fetching products:", err.message);
    res.status(500).json({ message: err.message });
  }
});

// GET single product by _id (public) -> GET /api/products/:id
router.get("/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id); // uses Mongo _id
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.json(product);
  } catch (err) {
    console.error("Error fetching product:", err.message);
    return res.status(400).json({ message: "Invalid id format" });
  }
});

// POST - Add new product (protected) -> POST /api/products
router.post("/", authenticateToken, async (req, res) => {
  const { title, price, category, description, image } = req.body || {};

  if (!title || price == null || !category) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  try {
    const newProduct = await Product.create({
      title,
      price,
      category,
      description,
      image,
    });

    res
      .status(201)
      .json({ message: "Product added successfully ✅", product: newProduct });
  } catch (err) {
    console.error("Error adding product:", err.message);
    res.status(500).json({ message: err.message });
  }
});

// PUT - Update product by _id (protected) -> PUT /api/products/:id
router.put("/:id", authenticateToken, async (req, res) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!updatedProduct) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.json({
      message: "Product updated successfully ✅",
      product: updatedProduct,
    });
  } catch (err) {
    console.error("Error updating product:", err.message);
    res.status(500).json({ message: err.message });
  }
});

// DELETE - Remove product by _id (protected) -> DELETE /api/products/:id
router.delete("/:id", authenticateToken, async (req, res) => {
  try {
    const deletedProduct = await Product.findByIdAndDelete(req.params.id);

    if (!deletedProduct) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.json({ message: "Product deleted successfully ✅" });
  } catch (err) {
    console.error("Error deleting product:", err.message);
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;




