import React from "react";

export default function KhaltiFailed() {
  return (
    <div className="mx-auto max-w-7xl px-2 lg:px-0">
      <div className="mx-auto max-w-2xl py-8 lg:max-w-7xl text-center">
        <h2 className="text-2xl font-bold text-red-600 mb-4">
          Khalti Payment Failed
        </h2>
        <p className="text-gray-700">
          Your Khalti payment could not be completed. Please try again or
          contact support if the issue persists.
        </p>
      </div>
    </div>
  );
}
