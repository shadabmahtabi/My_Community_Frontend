import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const ForgotPassword = () => {
  const navigate = useNavigate();

  const handleForgotPasswordSubmit = (e) => {
    e.preventDefault();
    // Add logic for sending reset link or OTP here
    alert("Password reset instructions have been sent to your email!");
    navigate("/"); // Redirect to homepage or login page
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100 px-4">
      {/* Logo Section */}
      <div className="mb-6">
        <img
          src="../../../joda masjid logo.png"
          alt="Joda Masjid Logo"
          className="w-32 h-32"
        />
      </div>

      {/* Form Section */}
      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold text-center text-primary mb-4">
          Forgot Password
        </h1>
        <p className="text-sm text-gray-600 text-center mb-6">
          Enter your registered email address, and we'll send you instructions to reset your password.
        </p>
        <form onSubmit={handleForgotPasswordSubmit}>
          {/* Email Input */}
          <div className="mb-6">
            <Label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
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

          {/* Submit Button */}
          <Button type="submit" className="w-full bg-primary text-white py-2 rounded-md hover:bg-primary-dark">
            Send Reset Instructions
          </Button>
        </form>

        {/* Back to Login */}
        <div className="mt-4 text-center">
          <p className="text-sm text-gray-600">
            Remember your password?{" "}
            <button
              onClick={() => navigate("/login")}
              className="text-primary font-semibold hover:underline"
            >
              Log In
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
