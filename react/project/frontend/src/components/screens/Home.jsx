import React, { useEffect, useState } from "react";
import Navbar from "../utilities/Navbar";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Home = () => {
  const { searchQuery, setSearchQuery } = useAuth();
  const navigate = useNavigate();

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Shared background (same across Home, ProductDetails, Description)
  const bgStyle = {
    backgroundImage:
      "linear-gradient(rgba(255,255,255,0.55), rgba(255,255,255,0.55)), url('https://images.unsplash.com/photo-1518791841217-8f162f1e1131?auto=format&fit=crop&w=1600&q=60')",
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  // Fetch all products from backend
  useEffect(() => {
    async function load() {
      try {
        const res = await axios.get("http://localhost:5000/api/products");
        setProducts(res.data);
      } catch (err) {
        console.error("Error fetching products:", err);
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  // Filter products dynamically
  const filtered = products.filter(
    (p) =>
      p.title?.toLowerCase().includes(searchQuery.trim().toLowerCase()) ||
      p.category?.toLowerCase().includes(searchQuery.trim().toLowerCase())
  );

  // Fallback image if no product image
  const getImage = (p) =>
    p.image && p.image.length
      ? p.image
      : `https://via.placeholder.com/400x300?text=${encodeURIComponent(
          p.title || "Product"
        )}`;

  if (loading) {
    return (
      <div style={bgStyle} className="min-h-screen pt-20">
        <Navbar />
        <div className="max-w-6xl mx-auto py-12 px-4">Loading...</div>
      </div>
    );
  }

  return (
    <div style={bgStyle} className="min-h-screen pt-20">
      {/* Navbar visible only after login */}
      <Navbar />

      <div className="max-w-6xl mx-auto py-12 px-4">
        <h1 className="text-3xl font-bold text-red-700 mb-8 text-center drop-shadow-sm">
          Vetcraft Healthcare Products
        </h1>

        {/* Back Button when searching */}
        {searchQuery.trim() !== "" && (
          <div className="mb-6 flex justify-center">
            <button
              onClick={() => setSearchQuery("")}
              className="px-5 py-2 bg-gray-300 hover:bg-gray-400 text-gray-800 rounded-lg shadow"
            >
              Back
            </button>
          </div>
        )}

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((product) => (
            <div
              key={product._id}
              className="bg-white/70 backdrop-blur-lg rounded-xl p-4 shadow-md hover:shadow-xl transition duration-200"
            >
              <div className="h-48 rounded-lg overflow-hidden mb-4">
                <img
                  src={getImage(product)}
                  alt={product.title}
                  className="w-full h-full object-cover hover:scale-105 transition"
                />
              </div>

              <h3 className="text-xl font-semibold text-red-700">
                {product.title}
              </h3>
              <p className="text-sm text-gray-700">{product.category}</p>

              <div className="flex mt-5">
                <button
                  onClick={() => navigate(`/productdetails/${product._id}`)}
                  className="w-full py-2 rounded bg-red-600 text-white font-medium hover:bg-red-700 transition"
                >
                  View Product
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filtered.length === 0 && (
          <p className="text-center text-gray-700 mt-12 text-lg">
            No products match your search.
          </p>
        )}
      </div>
    </div>
  );
};

export default Home;


























