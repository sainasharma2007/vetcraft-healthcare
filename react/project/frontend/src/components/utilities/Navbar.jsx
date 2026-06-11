import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useSearch } from "../../context/SearchContext";
import { FaHome, FaEnvelope } from "react-icons/fa";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { searchQuery, setSearchQuery } = useSearch();

  const handleSearch = (e) => {
    const val = e.target.value;
    setSearchQuery(val);
    // If not on products page, navigate there so search results show
    if (location.pathname !== "/products") {
      navigate("/products");
    }
  };

  return (
    <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 50 }}>

      {/* Email bar */}
      <div style={{ background: "#CC1111", padding: "4px 0", textAlign: "center" }}>
        <a
          href="https://mail.google.com/mail/?view=cm&to=vetcrafthealthcare@gmail.com"
          target="_blank"
          rel="noreferrer"
          style={{
            color: "#fff", fontSize: "12px", letterSpacing: "0.5px",
            textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "6px"
          }}
        >
          <FaEnvelope size={11} />
          vetcrafthealthcare@gmail.com
        </a>
      </div>

      {/* Main bar */}
      <div style={{ background: "rgba(255,255,255,0.92)", backdropFilter: "blur(8px)", borderBottom: "1px solid rgba(0,0,0,0.08)" }}>
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center gap-4">

          {/* Logo */}
          <div
            className="flex items-center gap-3 cursor-pointer select-none flex-shrink-0"
            onClick={() => navigate("/")}
          >
            <div className="w-10 h-10 rounded-md bg-red-50 flex items-center justify-center overflow-hidden shadow-sm">
              <img src="/logo.png" alt="Vetcraft" className="w-full h-full object-contain" />
            </div>
            <span className="text-base font-semibold text-red-700 tracking-wide hidden sm:block">
              Vetcraft Healthcare
            </span>
          </div>

          {/* Search */}
          <div className="flex-1 mx-4">
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearch}
              placeholder="Search products..."
              className="w-full rounded-lg px-4 py-2 border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-red-200 text-sm"
            />
          </div>

          {/* Home icon */}
          <button
            onClick={() => navigate("/products")}
            title="All Products"
            className="p-2 rounded-md hover:bg-red-50 transition flex-shrink-0"
          >
            <FaHome className="text-red-600" size={18} />
          </button>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;