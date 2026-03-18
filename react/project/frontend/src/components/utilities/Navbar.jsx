import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { FaHome } from "react-icons/fa";

const Navbar = () => {
  const navigate = useNavigate();
  const { isAuthenticated, logout, searchQuery, setSearchQuery } = useAuth();

  const toggleAuth = () => {
    if (isAuthenticated) {
      logout();          // this should remove token + set isAuthenticated=false
      navigate("/");
    } else {
      navigate("/");
    }
  };

  return (
    <nav className="backdrop-blur-sm bg-white/40 fixed w-full z-20 top-0 left-0 border-b border-white/30">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center gap-4">
        {/* Left: Logo & Brand */}
        <div
          className="flex items-center gap-3 cursor-pointer select-none"
          onClick={() => navigate("/products")}
        >
          <div className="w-11 h-11 rounded-md bg-red-200 flex items-center justify-center overflow-hidden shadow-sm hover:scale-105 transition-transform duration-200">
            <img
              src="/logo.png"
              alt="Vetcraft Healthcare Logo"
              className="w-full h-full object-contain"
              loading="lazy"
            />
          </div>

          <span className="text-lg font-semibold text-red-700 tracking-wide">
            Vetcraft Healthcare
          </span>
        </div>

        {/* Center: Search */}
        <div className="flex-1 mx-6">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search products..."
            className="w-full rounded-lg px-4 py-2 bg-white/90 focus:outline-none focus:ring-2 focus:ring-red-200"
          />
        </div>

        {/* Right: Home + Auth */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => navigate("/products")}
            title="Home"
            className="p-2 rounded-md hover:bg-white/30"
          >
            <FaHome className="text-red-600" size={18} />
          </button>

          <button
            onClick={toggleAuth}
            className="px-4 py-1.5 rounded-md bg-red-600 text-white hover:bg-red-700 transition-colors"
          >
            {isAuthenticated ? "Logout" : "Login"}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

