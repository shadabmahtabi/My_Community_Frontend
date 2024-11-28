import React from "react";

const ContactInfo = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
      <h2 className="text-lg font-semibold mb-4">Community Contact Information</h2>

      {/* Email */}
      <div className="mb-4">
        <p className="text-sm text-gray-700 font-medium">Email</p>
        <p className="text-sm text-blue-500">community@example.com</p>
      </div>

      {/* Phone */}
      <div className="mb-4">
        <p className="text-sm text-gray-700 font-medium">Phone</p>
        <p className="text-sm text-blue-500">+123 456 7890</p>
      </div>

      {/* Address */}
      <div className="mb-4">
        <p className="text-sm text-gray-700 font-medium">Address</p>
        <p className="text-sm text-gray-600">1234 Community St, City, Country</p>
      </div>
    </div>
  );
};

export default ContactInfo;
