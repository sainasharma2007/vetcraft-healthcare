
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth();   // this will call backend and store token

  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      await login(email, password);     // AuthContext should POST to /api/auth/login
      navigate("/products");
    } catch (err) {
      console.error(err);
      const msg =
        err.response?.data?.message || "Login failed. Please try again.";
      setError(msg);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-red-50">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white p-8 rounded-lg shadow"
      >
        <h2 className="text-2xl font-semibold mb-6 text-center text-red-600">
          VetCraft Healthcare
        </h2>

        {error && (
          <p className="mb-4 text-sm text-center text-red-600">{error}</p>
        )}

        {/* Email */}
        <label className="block mb-2 text-sm font-medium">Email</label>
        <input
          required
          type="email"
          className="w-full p-2 rounded border mb-4"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        {/* Password + Show/Hide */}
        <label className="block mb-2 text-sm font-medium">Password</label>
        <div className="relative mb-4">
          <input
            required
            type={showPassword ? "text" : "password"}
            className="w-full p-2 rounded border"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <span
            className="absolute right-3 top-2 cursor-pointer text-sm text-red-600"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? "Hide" : "Show"}
          </span>
        </div>

        <button
          type="submit"
          className="w-full py-2 bg-red-600 text-white rounded"
        >
          Login
        </button>

        <p className="mt-4 text-sm text-center">
          Don't have an account?{" "}
          <span
            className="text-red-600 cursor-pointer"
            onClick={() => navigate("/signup")}
          >
            Sign up
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;








