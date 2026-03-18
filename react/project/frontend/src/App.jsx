import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider, useAuth } from "./context/AuthContext";

import Login from "./components/screens/Login";
import Signup from "./components/screens/Signup";
import Home from "./components/screens/Home";
import ProductDetails from "./components/screens/ProductDetails";
import Description from "./components/screens/Description";

const RequireAuth = ({ children }) => {
  const { isAuthenticated } = useAuth();
  if (!isAuthenticated) return <Navigate to="/" replace />;
  return children;
};

const App = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          {/* public routes */}
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          {/* protected routes */}
          <Route
            path="/products"
            element={
              <RequireAuth>
                <Home />
              </RequireAuth>
            }
          />
          <Route
            path="/productdetails/:id"
            element={
              <RequireAuth>
                <ProductDetails />
              </RequireAuth>
            }
          />
          <Route
            path="/description/:id"
            element={
              <RequireAuth>
                <Description />
              </RequireAuth>
            }
          />

          {/* fallback */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
};

export default App;












