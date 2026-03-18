const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const productRoutes = require("./routes/products"); // your file above
// const authRoutes = require("./routes/auth"); // when you finish auth
const authRoutes = require("./routes/auth"); 
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// connect to Mongo
connectDB();

// routes
app.use("/api/products", productRoutes);
app.use("/api/auth", authRoutes);     
// app.use("/api/auth", authRoutes); // later

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


