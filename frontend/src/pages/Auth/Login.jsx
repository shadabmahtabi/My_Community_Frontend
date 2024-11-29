import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Perform authentication here
    navigate("/"); // Redirect to homepage after successful login
  };

  const handleAdminLogin = () => {
    // Navigate to the admin login route
    navigate("/admin-login"); // Redirect to a dedicated admin login page
  };

  return (
    <div className="min-h-screen bg-white flex flex-col justify-center items-center p-4">
      <img
        src="../../../joda masjid logo.png"
        alt="Logo"
        className="w-2/4 h-2/4"
      />

      <div className="w-full max-w-sm bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-center mb-4 text-primary">
          Login
        </h1>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <Label htmlFor="email" className="block mb-2 text-sm font-medium">
              Email Address
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="Enter your email"
              className="w-full"
              required
            />
          </div>
          <div className="mb-4">
            <Label
              htmlFor="password"
              className="block mb-2 text-sm font-medium"
            >
              Password
            </Label>
            <Input
              id="password"
              type="password"
              placeholder="Enter your password"
              className="w-full"
              required
            />
          </div>
          <Button type="submit" className="w-full">
            Login
          </Button>
        </form>
        <div className="text-center mt-4">
          <Link
            to="/forgot-password"
            className="text-sm text-blue-500 hover:underline"
          >
            Forgot Password?
          </Link>
        </div>
        <div className="text-center mt-4">
          <p className="text-sm">
            Don't have an account?{" "}
            <Link to="/signup" className="text-blue-500 hover:underline">
              Signup
            </Link>
          </p>
        </div>
        <div className="mt-4">
          <Button
            type="button"
            className="w-full mb-2 bg-red-700 text-white"
            onClick={() => alert("Signup with Google is not yet implemented")}
          >
            Login with Google
          </Button>
          <Button
            type="button"
            className="w-full bg-blue-700 text-white"
            onClick={() => alert("Signup with Facebook is not yet implemented")}
          >
            Login with Facebook
          </Button>
        </div>
        <div className="mt-4 text-center">
          <Button
            type="button"
            className="w-full bg-gray-800 text-white"
            onClick={handleAdminLogin}
          >
            Admin Login
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Login;
