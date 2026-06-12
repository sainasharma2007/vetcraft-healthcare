// // import React, { useEffect, useState } from "react";
// // import Navbar from "../utilities/Navbar";
// // import { useSearch } from "../../context/SearchContext";
// // import { useNavigate } from "react-router-dom";
// // import axios from "axios";

// // const CATEGORIES = ["All", "Animal Feed Supplement", "Medicine"];

// // const bgStyle = {
// //   backgroundImage:
// //     "linear-gradient(rgba(255,255,255,0.55), rgba(255,255,255,0.55)), url('https://images.unsplash.com/photo-1500595046743-cd271d694d30?auto=format&fit=crop&w=1600&q=60')",
// //   backgroundSize: "cover",
// //   backgroundPosition: "center",
// // };

// // const Home = () => {
// //   const { searchQuery, setSearchQuery } = useSearch();
// //   const navigate = useNavigate();

// //   const [products, setProducts] = useState([]);
// //   const [loading, setLoading] = useState(true);
// //   const [activeCategory, setActiveCategory] = useState(
// //     () => sessionStorage.getItem("activeCategory") || "All"
// //   );

// //   useEffect(() => {
// //     axios.get("http://localhost:5000/api/products")
// //       .then(res => setProducts(res.data))
// //       .catch(console.error)
// //       .finally(() => setLoading(false));
// //   }, []);

// //   // Save active category to session
// //   useEffect(() => {
// //     sessionStorage.setItem("activeCategory", activeCategory);
// //   }, [activeCategory]);

// //   // Save scroll position continuously
// //   useEffect(() => {
// //     const save = () => sessionStorage.setItem("homeScroll", window.scrollY);
// //     window.addEventListener("scroll", save);
// //     return () => window.removeEventListener("scroll", save);
// //   }, []);

// //   // Restore scroll after products load
// //   useEffect(() => {
// //     if (!loading) {
// //       const pos = sessionStorage.getItem("homeScroll");
// //       if (pos) setTimeout(() => window.scrollTo(0, Number(pos)), 100);
// //     }
// //   }, [loading]);

// //   const filtered = products.filter(p => {
// //     const q = searchQuery.toLowerCase();
// //     const matchSearch =
// //       p.title?.toLowerCase().includes(q) ||
// //       p.category?.toLowerCase().includes(q);
// //     const matchCat = activeCategory === "All" || p.category === activeCategory;
// //     return matchSearch && matchCat;
// //   });

// //   if (loading) {
// //     return (
// //       <div style={bgStyle} className="min-h-screen pt-24">
// //         <Navbar />
// //         <div className="text-center py-10 text-gray-600">Loading products...</div>
// //       </div>
// //     );
// //   }

// //   return (
// //     <div style={bgStyle} className="min-h-screen pt-24">
// //       <Navbar />
// //       <div className="max-w-6xl mx-auto px-4 py-8">

// //         <h1 className="text-3xl font-bold text-center text-red-700 mb-6">
// //           Vetcraft Healthcare Products
// //         </h1>

// //         {/* Category filters */}
// //         <div className="flex flex-wrap justify-center gap-3 mb-6">
// //           {CATEGORIES.map(cat => (
// //             <button
// //               key={cat}
// //               onClick={() => setActiveCategory(cat)}
// //               style={{
// //                 padding: "8px 22px",
// //                 borderRadius: "50px",
// //                 border: activeCategory === cat ? "none" : "1.5px solid #CC1111",
// //                 background: activeCategory === cat ? "#CC1111" : "#fff",
// //                 color: activeCategory === cat ? "#fff" : "#CC1111",
// //                 fontWeight: "600",
// //                 fontSize: "13px",
// //                 cursor: "pointer",
// //                 transition: "all 0.2s ease",
// //                 boxShadow: activeCategory === cat ? "0 4px 14px rgba(204,17,17,0.3)" : "none",
// //               }}
// //             >
// //               {cat}
// //             </button>
// //           ))}
// //         </div>

// //         {/* Clear search */}
// //         {searchQuery && (
// //           <div className="flex justify-center mb-6">
// //             <button
// //               onClick={() => {
// //                 setSearchQuery("");
// //                 setActiveCategory("All");
// //                 sessionStorage.removeItem("homeScroll");
// //               }}
// //               className="px-4 py-2 bg-gray-300 hover:bg-gray-400 text-gray-800 rounded-lg"
// //             >
// //               Clear Search
// //             </button>
// //           </div>
// //         )}

// //         {/* Count */}
// //         <p className="text-center text-sm text-gray-600 mb-6">
// //           Showing {filtered.length} product{filtered.length !== 1 ? "s" : ""}
// //           {activeCategory !== "All" ? ` in "${activeCategory}"` : ""}
// //         </p>

// //         {/* Product grid */}
// //         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
// //           {filtered.map(product => (
// //             <div
// //               key={product._id}
// //               className="bg-white/80 backdrop-blur rounded-xl shadow-md hover:shadow-xl transition duration-200 p-4"
// //             >
// //               <div className="h-52 rounded-lg overflow-hidden">
// //                 <img
// //                   src={product.image}
// //                   alt={product.title}
// //                   className="w-full h-full object-cover hover:scale-105 transition duration-200"
// //                 />
// //               </div>

// //               <span style={{
// //                 display: "inline-block",
// //                 marginTop: "12px",
// //                 background: product.category === "Medicine" ? "#fff0f0" : "#f0fff4",
// //                 color: product.category === "Medicine" ? "#CC1111" : "#276749",
// //                 border: `1px solid ${product.category === "Medicine" ? "#ffcccc" : "#b2f5c8"}`,
// //                 borderRadius: "20px",
// //                 padding: "2px 10px",
// //                 fontSize: "11px",
// //                 fontWeight: "600",
// //               }}>
// //                 {product.category}
// //               </span>

// //               <h2 className="text-xl font-semibold mt-2 text-red-700">
// //                 {product.title}
// //               </h2>

// //               <button
// //                 onClick={() => navigate(`/productdetails/${product._id}`)}
// //                 className="mt-4 w-full bg-red-600 hover:bg-red-700 text-white py-2 rounded transition"
// //               >
// //                 View Product
// //               </button>
// //             </div>
// //           ))}
// //         </div>

// //         {filtered.length === 0 && (
// //           <p className="text-center mt-10 text-gray-700">No products found.</p>
// //         )}

// //       </div>
// //     </div>
// //   );
// // };

// // export default Home;

// import React, { useEffect, useState, useRef } from "react";
// import Navbar from "../utilities/Navbar";
// import { useSearch } from "../../context/SearchContext";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";

// const CATEGORIES = ["All", "Animal Feed Supplement", "Medicine"];

// const Home = () => {
//   const { searchQuery, setSearchQuery } = useSearch();
//   const navigate = useNavigate();

//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [activeCategory, setActiveCategory] = useState(
//     () => sessionStorage.getItem("vetcraft_activeCategory") || "All"
//   );
//   const restoredScroll = useRef(false);

//   const bgStyle = {
//     backgroundImage:
//       "linear-gradient(rgba(255,255,255,0.55), rgba(255,255,255,0.55)), url('https://images.unsplash.com/photo-1500595046743-cd271d694d30?auto=format&fit=crop&w=1600&q=60')",
//     backgroundSize: "cover",
//     backgroundPosition: "center",
//   };

//   useEffect(() => {
//     async function load() {
//       try {
//         const res = await axios.get("http://localhost:5000/api/products");
//         setProducts(res.data);
//       } catch (err) {
//         console.error("Error fetching products:", err);
//       } finally {
//         setLoading(false);
//       }
//     }
//     load();
//   }, []);

//   // Restore scroll position once products are loaded
//   useEffect(() => {
//     if (!loading && !restoredScroll.current) {
//       const savedY = sessionStorage.getItem("vetcraft_scrollY");
//       if (savedY) {
//         requestAnimationFrame(() => {
//           window.scrollTo(0, parseInt(savedY, 10));
//         });
//       }
//       restoredScroll.current = true;
//     }
//   }, [loading]);

//   // Save scroll position continuously
//   useEffect(() => {
//     const onScroll = () => {
//       sessionStorage.setItem("vetcraft_scrollY", String(window.scrollY));
//     };
//     window.addEventListener("scroll", onScroll);
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   // Persist category choice
//   useEffect(() => {
//     sessionStorage.setItem("vetcraft_activeCategory", activeCategory);
//   }, [activeCategory]);

//   const filtered = products.filter((p) => {
//     const matchesSearch =
//       p.title?.toLowerCase().includes(searchQuery.trim().toLowerCase()) ||
//       p.category?.toLowerCase().includes(searchQuery.trim().toLowerCase());
//     const matchesCategory =
//       activeCategory === "All" || p.category === activeCategory;
//     return matchesSearch && matchesCategory;
//   });

//   const getImage = (p) =>
//     p.image && p.image.length
//       ? p.image
//       : `https://placehold.co/400x300?text=${encodeURIComponent(p.title || "Product")}`;

//   const handleViewProduct = (productId) => {
//     // Save current scroll position right before navigating away
//     sessionStorage.setItem("vetcraft_scrollY", String(window.scrollY));
//     navigate(`/productdetails/${productId}`);
//   };

//   if (loading) {
//     return (
//       <div style={bgStyle} className="min-h-screen pt-24">
//         <Navbar />
//         <div className="max-w-6xl mx-auto py-12 px-4 text-center text-gray-600">
//           Loading products...
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div style={bgStyle} className="min-h-screen pt-24">
//       <Navbar />
//       <div className="max-w-6xl mx-auto py-12 px-4">

//         <h1 className="text-3xl font-bold text-red-700 mb-6 text-center drop-shadow-sm">
//           Vetcraft Healthcare Products
//         </h1>

//         {/* Category filter buttons */}
//         <div className="flex justify-center gap-3 mb-8 flex-wrap">
//           {CATEGORIES.map((cat) => (
//             <button
//               key={cat}
//               onClick={() => setActiveCategory(cat)}
//               style={{
//                 padding: "8px 22px",
//                 borderRadius: "50px",
//                 border: activeCategory === cat ? "none" : "1.5px solid #CC1111",
//                 background: activeCategory === cat ? "#CC1111" : "#fff",
//                 color: activeCategory === cat ? "#fff" : "#CC1111",
//                 fontWeight: "600",
//                 fontSize: "13px",
//                 cursor: "pointer",
//                 transition: "all 0.2s ease",
//                 boxShadow: activeCategory === cat ? "0 4px 14px rgba(204,17,17,0.3)" : "none",
//               }}
//             >
//               {cat}
//             </button>
//           ))}
//         </div>

//         {/* Clear search */}
//         {searchQuery.trim() !== "" && (
//           <div className="mb-6 flex justify-center">
//             <button
//               onClick={() => setSearchQuery("")}
//               className="px-5 py-2 bg-gray-300 hover:bg-gray-400 text-gray-800 rounded-lg shadow"
//             >
//               Clear Search
//             </button>
//           </div>
//         )}

//         {/* Count */}
//         <p className="text-center text-sm text-gray-500 mb-6">
//           Showing {filtered.length} product{filtered.length !== 1 ? "s" : ""}
//           {activeCategory !== "All" ? ` in "${activeCategory}"` : ""}
//         </p>

//         {/* Product grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//           {filtered.map((product) => (
//             <div
//               key={product._id}
//               className="bg-white/70 backdrop-blur-lg rounded-xl p-4 shadow-md hover:shadow-xl transition duration-200"
//             >
//               <div className="h-48 rounded-lg overflow-hidden mb-4">
//                 <img
//                   src={getImage(product)}
//                   alt={product.title}
//                   className="w-full h-full object-cover hover:scale-105 transition"
//                 />
//               </div>

//               {/* Category badge */}
//               <span style={{
//                 display: "inline-block",
//                 background: product.category === "Medicine" ? "#fff0f0" : "#f0fff4",
//                 color: product.category === "Medicine" ? "#CC1111" : "#276749",
//                 border: `1px solid ${product.category === "Medicine" ? "#ffcccc" : "#b2f5c8"}`,
//                 borderRadius: "20px",
//                 padding: "2px 10px",
//                 fontSize: "11px",
//                 fontWeight: "600",
//                 marginBottom: "6px",
//                 letterSpacing: "0.3px",
//               }}>
//                 {product.category}
//               </span>

//               <h3 className="text-xl font-semibold text-red-700">{product.title}</h3>

//               <div className="flex mt-5">
//                 <button
//                   onClick={() => handleViewProduct(product._id)}
//                   className="w-full py-2 rounded bg-red-600 text-white font-medium hover:bg-red-700 transition"
//                 >
//                   View Product
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>

//         {filtered.length === 0 && (
//           <p className="text-center text-gray-700 mt-12 text-lg">
//             No products match your search.
//           </p>
//         )}

//       </div>
//     </div>
//   );
// };

// export default Home;

import React, { useEffect, useState, useRef } from "react";
import Navbar from "../utilities/Navbar";
import { useSearch } from "../../context/SearchContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

const CATEGORIES = ["All", "Animal Feed Supplement", "Medicine"];

const Home = () => {
  const { searchQuery, setSearchQuery } = useSearch();
  const navigate = useNavigate();

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState(
    () => sessionStorage.getItem("vetcraft_activeCategory") || "All"
  );
  const restoredScroll = useRef(false);

  const bgStyle = {
    backgroundImage:
      "linear-gradient(rgba(255,255,255,0.55), rgba(255,255,255,0.55)), url('https://images.unsplash.com/photo-1500595046743-cd271d694d30?auto=format&fit=crop&w=1600&q=60')",
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  useEffect(() => {
    async function load() {
      try {
        const res = await axios.get(`${API_URL}/api/products`);
        setProducts(res.data);
      } catch (err) {
        console.error("Error fetching products:", err);
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  // Restore scroll position once products are loaded
  useEffect(() => {
    if (!loading && !restoredScroll.current) {
      const savedY = sessionStorage.getItem("vetcraft_scrollY");
      if (savedY) {
        requestAnimationFrame(() => {
          window.scrollTo(0, parseInt(savedY, 10));
        });
      }
      restoredScroll.current = true;
    }
  }, [loading]);

  // Save scroll position continuously
  useEffect(() => {
    const onScroll = () => {
      sessionStorage.setItem("vetcraft_scrollY", String(window.scrollY));
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Persist category choice
  useEffect(() => {
    sessionStorage.setItem("vetcraft_activeCategory", activeCategory);
  }, [activeCategory]);

  const filtered = products.filter((p) => {
    const matchesSearch =
      p.title?.toLowerCase().includes(searchQuery.trim().toLowerCase()) ||
      p.category?.toLowerCase().includes(searchQuery.trim().toLowerCase());
    const matchesCategory =
      activeCategory === "All" || p.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  const getImage = (p) =>
    p.image && p.image.length
      ? p.image
      : `https://placehold.co/400x300?text=${encodeURIComponent(p.title || "Product")}`;

  const handleViewProduct = (productId) => {
    sessionStorage.setItem("vetcraft_scrollY", String(window.scrollY));
    navigate(`/productdetails/${productId}`);
  };

  if (loading) {
    return (
      <div style={bgStyle} className="min-h-screen pt-24">
        <Navbar />
        <div className="max-w-6xl mx-auto py-12 px-4 text-center text-gray-600">
          Loading products...
        </div>
      </div>
    );
  }

  return (
    <div style={bgStyle} className="min-h-screen pt-24">
      <Navbar />
      <div className="max-w-6xl mx-auto py-12 px-4">

        <h1 className="text-3xl font-bold text-red-700 mb-6 text-center drop-shadow-sm">
          Vetcraft Healthcare Products
        </h1>

        <div className="flex justify-center gap-3 mb-8 flex-wrap">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              style={{
                padding: "8px 22px",
                borderRadius: "50px",
                border: activeCategory === cat ? "none" : "1.5px solid #CC1111",
                background: activeCategory === cat ? "#CC1111" : "#fff",
                color: activeCategory === cat ? "#fff" : "#CC1111",
                fontWeight: "600",
                fontSize: "13px",
                cursor: "pointer",
                transition: "all 0.2s ease",
                boxShadow: activeCategory === cat ? "0 4px 14px rgba(204,17,17,0.3)" : "none",
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {searchQuery.trim() !== "" && (
          <div className="mb-6 flex justify-center">
            <button
              onClick={() => setSearchQuery("")}
              className="px-5 py-2 bg-gray-300 hover:bg-gray-400 text-gray-800 rounded-lg shadow"
            >
              Clear Search
            </button>
          </div>
        )}

        <p className="text-center text-sm text-gray-500 mb-6">
          Showing {filtered.length} product{filtered.length !== 1 ? "s" : ""}
          {activeCategory !== "All" ? ` in "${activeCategory}"` : ""}
        </p>

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

              <span style={{
                display: "inline-block",
                background: product.category === "Medicine" ? "#fff0f0" : "#f0fff4",
                color: product.category === "Medicine" ? "#CC1111" : "#276749",
                border: `1px solid ${product.category === "Medicine" ? "#ffcccc" : "#b2f5c8"}`,
                borderRadius: "20px",
                padding: "2px 10px",
                fontSize: "11px",
                fontWeight: "600",
                marginBottom: "6px",
                letterSpacing: "0.3px",
              }}>
                {product.category}
              </span>

              <h3 className="text-xl font-semibold text-red-700">{product.title}</h3>

              <div className="flex mt-5">
                <button
                  onClick={() => handleViewProduct(product._id)}
                  className="w-full py-2 rounded bg-red-600 text-white font-medium hover:bg-red-700 transition"
                >
                  View Product
                </button>
              </div>
            </div>
          ))}
        </div>

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