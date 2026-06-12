import React, { useEffect, useState } from "react";
import Navbar from "../utilities/Navbar";
import { useParams, useNavigate } from "react-router-dom";
import { useSearch } from "../../context/SearchContext";
import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { setSearchQuery } = useSearch();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  const bgStyle = {
    backgroundImage:
      "linear-gradient(rgba(255,255,255,0.55), rgba(255,255,255,0.55)), url('https://images.unsplash.com/photo-1500595046743-cd271d694d30?auto=format&fit=crop&w=1600&q=60')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: "100vh",
  };

  useEffect(() => {
    async function load() {
      try {
        const res = await axios.get(`${API_URL}/api/products/${id}`);
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
      <div style={bgStyle} className="pt-24">
        <Navbar />
        <div className="max-w-3xl mx-auto py-10 text-center">Loading...</div>
      </div>
    );
  }

  if (!product) {
    return (
      <div style={bgStyle} className="pt-24">
        <Navbar />
        <div className="max-w-3xl mx-auto py-10 text-center text-red-700 font-semibold">
          Product not found
        </div>
      </div>
    );
  }

  const productImage = product.image
    ? product.image
    : `https://placehold.co/600x400?text=${encodeURIComponent(product.title)}`;

  const variants = product.variants && product.variants.length
    ? product.variants
    : [{ mrp: "", packSize: "" }];

  const goBack = () => {
    setSearchQuery("");
    navigate(-1);
  };

  return (
    <div style={bgStyle} className="pt-24">
      <Navbar />
      <div className="max-w-3xl mx-auto py-12 px-4">
        <div className="bg-white/80 backdrop-blur rounded-lg shadow-lg p-6">

          <div className="mb-4">
            <img
              src={productImage}
              alt={product.title}
              className="w-full max-h-[600px] object-contain rounded-md shadow"
            />
          </div>

          <h2 className="text-2xl font-bold text-red-700 mb-3">{product.title}</h2>

          <div className="mb-3 space-y-2">
            {variants.map((v, i) => (
              <div
                key={i}
                className="flex items-center justify-between bg-red-50/70 rounded-md px-3 py-2"
              >
                <div className="text-base font-semibold text-gray-800">
                  MRP: {v.mrp}
                </div>
                <div className="text-sm text-gray-700">
                  Pack Size: {v.packSize}
                </div>
              </div>
            ))}
          </div>

          <div className="text-sm text-gray-600 mb-4">
            Category: {product.category}
          </div>

          <div className="flex gap-3">
            <button
              onClick={() => navigate(`/description/${product._id}`)}
              className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded transition"
            >
              View Details
            </button>
            <button
              onClick={goBack}
              className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-md"
            >
              Back to All Products
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ProductDetails;