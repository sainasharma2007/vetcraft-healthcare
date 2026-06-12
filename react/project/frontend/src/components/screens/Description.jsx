import React, { useEffect, useState } from "react";
import Navbar from "../utilities/Navbar";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const Description = () => {
  const { id } = useParams();
  const navigate = useNavigate();
const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  const bgStyle = {
    backgroundImage:
      "linear-gradient(rgba(255,255,255,0.55), rgba(255,255,255,0.55)), url('https://images.unsplash.com/photo-1500595046743-cd271d694d30?auto=format&fit=crop&w=1600&q=60')",
    backgroundSize: "cover",
    backgroundPosition: "center",
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
      <div style={bgStyle} className="min-h-screen pt-20">
        <Navbar />
        <div className="max-w-3xl mx-auto py-10">Loading...</div>
      </div>
    );
  }

  if (!product) {
    return (
      <div style={bgStyle} className="min-h-screen pt-20">
        <Navbar />
        <div className="max-w-3xl mx-auto py-10">Product not found</div>
      </div>
    );
  }

  return (
    <div style={bgStyle} className="min-h-screen pt-20">
      <Navbar />
      <div className="max-w-3xl mx-auto py-12 px-4">
        <div className="bg-white/80 backdrop-blur rounded-lg shadow p-6">

          <h2 className="text-2xl font-bold text-red-700 mb-4">{product.title}</h2>

          <div className="text-sm text-gray-700 mb-4">
            <strong>Category:</strong> {product.category}
          </div>

          <h3 className="text-lg font-semibold mb-2">Description</h3>
          <ul className="list-disc ml-6 text-gray-700">
            {product.description && product.description.length ? (
              product.description.map((d, i) => <li key={i}>{d}</li>)
            ) : (
              <li>No description available.</li>
            )}
          </ul>

          <div className="mt-6 flex gap-3">
            <button
              onClick={() => navigate(-1)}
              className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition"
            >
              Back
            </button>
            <button
              onClick={() => navigate("/products")}
              className="px-4 py-2 border border-red-400 text-red-600 rounded hover:bg-red-50 transition"
            >
              All Products
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Description;
