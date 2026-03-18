import React, { useEffect, useState } from "react";
import Navbar from "../utilities/Navbar";
import { useParams, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import axios from "axios";

const ProductDetails = () => {
  const { id } = useParams();              // id from URL = Mongo _id
  const navigate = useNavigate();
  const { setSearchQuery } = useAuth();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  // Background Style
  const bgStyle = {
    backgroundImage:
      "linear-gradient(rgba(255,255,255,0.55), rgba(255,255,255,0.55)), url('https://images.unsplash.com/photo-1518791841217-8f162f1e1131?auto=format&fit=crop&w=1600&q=60')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: "100vh",
  };

  // Fetch single product from backend using _id
  useEffect(() => {
    async function load() {
      try {
        const res = await axios.get(
          `http://localhost:5000/api/products/${id}`
        );
        setProduct(res.data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
    load();
  }, [id]);

  if (loading) {
    return (
      <div style={bgStyle} className="pt-20">
        <Navbar />
        <div className="max-w-3xl mx-auto py-10 text-center">
          Loading...
        </div>
      </div>
    );
  }

  // If no product found
  if (!product) {
    return (
      <div style={bgStyle} className="pt-20">
        <Navbar />
        <div className="max-w-3xl mx-auto py-10 text-center text-red-700 font-semibold">
          Product not found
        </div>
      </div>
    );
  }

  // Proper image handler
  const productImage = product.image
    ? product.image
    : `https://via.placeholder.com/600x400?text=${encodeURIComponent(
        product.title
      )}`;

  return (
    <div style={bgStyle} className="pt-20">
      <Navbar />

      <div className="max-w-3xl mx-auto py-12 px-4">
        <div className="bg-white/80 backdrop-blur rounded-lg shadow-lg p-6">
          {/* Product Image */}
          <div className="mb-4">
            <img
              src={productImage}
              alt={product.title}
              className="w-full max-h-[600px] object-contain rounded-md shadow"
            />
          </div>

          <h2 className="text-2xl font-bold text-red-700 mb-2">
            {product.title}
          </h2>

          <div className="flex items-center justify-between mb-3">
            <div className="text-lg font-semibold text-gray-800">
              ₹ {product.price}
            </div>
            <div className="text-sm text-gray-700">⭐ {product.rating}</div>
          </div>

          <div className="text-sm text-gray-600 mb-4">
            Category: {product.category}
          </div>

          {/* Buttons */}
          <div className="flex gap-3">
            <button
              onClick={() => navigate(`/description/${product._id}`)}
              className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded transition"
            >
              View Details
            </button>

            <button
              onClick={() => {
                setSearchQuery("");
                navigate("/products");
              }}
              className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-md"
            >
              ← Back to All Products
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;



















