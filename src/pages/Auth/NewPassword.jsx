import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const NewPassword = () => {
  const navigate = useNavigate();

  const handleNewPasswordSubmit = (e) => {
    e.preventDefault();
    // Add logic for password validation and updating here
    alert("Password has been successfully updated!");
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
          Set New Password
        </h1>
        <form onSubmit={handleNewPasswordSubmit}>
          {/* New Password Input */}
          <div className="mb-4">
            <Label htmlFor="new-password" className="block text-sm font-medium text-gray-700 mb-1">
              New Password
            </Label>
            <Input
              id="new-password"
              type="password"
              placeholder="Enter your new password"
              className="w-full"
              required
            />
          </div>

          {/* Confirm Password Input */}
          <div className="mb-6">
            <Label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700 mb-1">
              Confirm Password
            </Label>
            <Input
              id="confirm-password"
              type="password"
              placeholder="Confirm your new password"
              className="w-full"
              required
            />
          </div>

          {/* Submit Button */}
          <Button type="submit" className="w-full bg-primary text-white py-2 rounded-md hover:bg-primary-dark">
            Confirm Password
          </Button>
        </form>
      </div>
    </div>
  );
};

export default NewPassword;
