import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { SearchProvider } from "./context/SearchContext";

import IntroPage from "./components/screens/IntroPage";
import Home from "./components/screens/Home";
import ProductDetails from "./components/screens/ProductDetails";
import Description from "./components/screens/Description";

const App = () => {
  return (
    <BrowserRouter>
      <SearchProvider>
        <Routes>
          <Route path="/" element={<IntroPage />} />
          <Route path="/products" element={<Home />} />
          <Route path="/productdetails/:id" element={<ProductDetails />} />
          <Route path="/description/:id" element={<Description />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </SearchProvider>
    </BrowserRouter>
  );
};

export default App;