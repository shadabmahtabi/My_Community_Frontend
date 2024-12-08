import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const PaymentPage = () => {
  const navigate = useNavigate();
  const [selectedMethod, setSelectedMethod] = useState("UPI");
  const [upiId, setUpiId] = useState("");
  const [amount, setAmount] = useState(""); // New state for payment amount

  const handlePaymentSubmit = (e) => {
    e.preventDefault();
    if (!amount || isNaN(amount) || amount <= 0) {
      alert("Please enter a valid amount to pay.");
      return;
    }
    alert(`Payment of ₹${amount} initiated via ${selectedMethod}`);
    navigate("/homepage");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center pt-4">
       {/* Logo Section */}
       <div className="mb-6">
        <img
          src="../../../joda masjid logo.png"
          alt="Joda Masjid Logo"
          className="w-32 h-32"
        />
      </div>
   

      {/* Set Payment Amount */}
      <div className="w-full max-w-md bg-white shadow-md p-4 mt-4">
        <h3 className="text-lg font-medium mb-4">Enter Amount</h3>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Enter amount to pay"
          className="w-full border border-gray-300 rounded-md p-2"
        />
      </div>

      {/* Payment Options */}
      <div className="w-full max-w-md bg-white shadow-md p-4 mt-4">
        <h3 className="text-lg font-medium mb-4">Payment Method</h3>
        <div className="flex border-b-2">
          <button
            className={`flex-1 py-2 ${
              selectedMethod === "UPI" ? "border-b-4 border-secondary" : ""
            }`}
            onClick={() => setSelectedMethod("UPI")}
          >
            BHIM UPI
          </button>
          <button
            className={`flex-1 py-2 ${
              selectedMethod === "Debit Card" ? "border-b-4 border-secondary" : ""
            }`}
            onClick={() => setSelectedMethod("Debit Card")}
          >
            DEBIT CARD
          </button>
          <button
            className={`flex-1 py-2 ${
              selectedMethod === "Credit Card" ? "border-b-4 border-secondary" : ""
            }`}
            onClick={() => setSelectedMethod("Credit Card")}
          >
            CREDIT CARD
          </button>
        </div>

        {/* UPI Payment */}
        {selectedMethod === "UPI" && (
          <div className="mt-4">
            <label htmlFor="upiId" className="block text-sm font-medium">
              UPI ID
            </label>
            <input
              type="text"
              id="upiId"
              value={upiId}
              onChange={(e) => setUpiId(e.target.value)}
              placeholder="example@upi"
              className="w-full border border-gray-300 rounded-md p-2 mt-1"
            />
          </div>
        )}
      </div>

      {/* Pay Button */}
      <div className="w-full max-w-md p-4 mt-4">
        <button
          onClick={handlePaymentSubmit}
          className="w-full bg-primary text-white py-3 rounded-md font-medium"
        >
          PAY ₹{amount || "0"}
        </button>
      </div>
    </div>
  );
};

export default PaymentPage;
