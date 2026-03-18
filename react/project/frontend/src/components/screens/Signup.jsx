


import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import axios from "axios";

const Signup = () => {
  const navigate = useNavigate();
  const { login } = useAuth(); // we'll reuse login() after signup

  const [showPassword, setShowPassword] = useState(false);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      // call backend signup
await axios.post("http://localhost:5000/api/auth/register", {

        name: `${firstName} ${lastName}`,
        email,
        password,
      });

      // after successful signup, log in via AuthContext (this should call /api/auth/login in your context)
      await login(email, password);
      navigate("/products");
    } catch (err) {
      console.error(err);
      const msg =
        err.response?.data?.message || "Signup failed. Please try again.";
      setError(msg);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-red-50">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg bg-white p-8 rounded-lg shadow"
      >
        <h2 className="text-2xl font-semibold mb-6 text-center text-red-600">
          Create an account
        </h2>

        {/* error message */}
        {error && (
          <p className="mb-4 text-sm text-center text-red-600">{error}</p>
        )}

        <div className="grid grid-cols-2 gap-4">
          <input
            required
            placeholder="First name"
            className="p-2 rounded border"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <input
            required
            placeholder="Last name"
            className="p-2 rounded border"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>

        <input
          required
          type="email"
          placeholder="Email"
          className="w-full p-2 rounded border mt-4"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        {/* Password + Show/Hide Toggle */}
        <div className="relative mt-4">
          <input
            required
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            className="w-full p-2 rounded border"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <span
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-2 cursor-pointer text-sm text-red-600"
          >
            {showPassword ? "Hide" : "Show"}
          </span>
        </div>

        <button
          type="submit"
          className="w-full py-2 bg-red-600 text-white rounded mt-6"
        >
          Sign up
        </button>

        <p className="mt-4 text-sm text-center">
          Already have an account?{" "}
          <span
            className="text-red-600 cursor-pointer"
            onClick={() => navigate("/")}
          >
            Login
          </span>
        </p>
      </form>
    </div>
  );
};

export default Signup;






