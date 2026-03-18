const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");          // you can also use bcryptjs if installed
let User;

// Load User model safely
try {
  User = require("../models/User");
} catch (err) {
  console.error("Error loading User model:", err.message);
}

// JWT secret key from .env
const JWT_SECRET = process.env.JWT_SECRET || "your_jwt_secret_key";

// REGISTER - Create new user  -> POST /api/auth/register
router.post("/register", async (req, res) => {
  if (!User) return res.status(500).json({ message: "User model not loaded" });

  try {
    const { name, email, password } = req.body || {};
    if (!name || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Check if user exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user
    const newUser = new User({ name, email, password: hashedPassword });
    await newUser.save();

    // Generate JWT
    const token = jwt.sign({ userId: newUser._id }, JWT_SECRET, {
      expiresIn: "7d",
    });

    return res.status(201).json({
      message: "User registered successfully ✅",
      token,
      userId: newUser._id,
    });
  } catch (err) {
    console.error("Error in /register:", err.message);
    return res.status(500).json({ message: err.message });
  }
});

// LOGIN - Authenticate user  -> POST /api/auth/login
router.post("/login", async (req, res) => {
  if (!User) return res.status(500).json({ message: "User model not loaded" });

  try {
    const { email, password } = req.body || {};
    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "Email and password are required" });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    // Compare password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    // Generate JWT
    const token = jwt.sign({ userId: user._id }, JWT_SECRET, {
      expiresIn: "7d",
    });

    return res.status(200).json({
      message: "Login successful ✅",
      token,
      userId: user._id,
    });
  } catch (err) {
    console.error("Error in /login:", err.message);
    return res.status(500).json({ message: err.message });
  }
});

module.exports = router;



