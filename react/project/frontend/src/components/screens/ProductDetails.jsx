import React, { useEffect, useState } from "react";
import Navbar from "../utilities/Navbar";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const bgStyle = {
  backgroundImage:
    "linear-gradient(rgba(255,255,255,0.55), rgba(255,255,255,0.55)), url('https://images.unsplash.com/photo-1500595046743-cd271d694d30?auto=format&fit=crop&w=1600&q=60')",
  backgroundSize: "cover",
  backgroundPosition: "center",
};

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(`http://localhost:5000/api/products/${id}`)
      .then(res => setProduct(res.data))
      .catch(console.error)
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) {
    return (
      <div style={bgStyle} className="min-h-screen pt-24">
        <Navbar />
        <div className="text-center py-10">Loading...</div>
      </div>
    );
  }

  if (!product) {
    return (
      <div style={bgStyle} className="min-h-screen pt-24">
        <Navbar />
        <div className="text-center py-10 text-red-600">Product not found.</div>
      </div>
    );
  }

  return (
    <div style={bgStyle} className="min-h-screen pt-24">
      <Navbar />
      <div className="max-w-4xl mx-auto p-6">
        <div className="bg-white/85 backdrop-blur rounded-xl shadow-lg p-6">

          {/* Product image */}
          <img
            src={product.image}
            alt={product.title}
            className="w-full max-h-[500px] object-contain rounded-lg"
          />

          {/* Title */}
          <h1 className="text-3xl font-bold text-red-700 mt-6">
            {product.title}
          </h1>

          {/* MRP left, Pack Size right */}
          <div className="flex items-center justify-between mt-3">
            <p className="text-lg font-semibold text-gray-800">
              MRP: {product.mrp}
            </p>
            <p className="text-sm text-gray-600">
              Pack Size: {product.packSize}
            </p>
          </div>

          {/* Category */}
          <p className="mt-2 text-sm text-gray-500">
            Category: {product.category}
          </p>

          {/* Buttons */}
          <div className="mt-8 flex gap-3">
            <button
              onClick={() => navigate(-1)}
              className="px-5 py-2 bg-red-600 hover:bg-red-700 text-white rounded transition"
            >
              Back
            </button>
            <button
              onClick={() => navigate(`/description/${product._id}`)}
              className="px-5 py-2 bg-gray-800 hover:bg-black text-white rounded transition"
            >
              View Description
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ProductDetails;