import axios from "axios";
import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { apiUrl } from "../../../../constants";

export default function KhaltiSuccess() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const oid = searchParams.get("oid"); // Order ID
  const token = searchParams.get("token"); // Khalti token
  const amount = searchParams.get("amount"); // Amount in paisa

  const navigate = useNavigate();

  const gotoOrderDetails = () => {
    navigate(`/users/orders/${oid}`);
  };

  useEffect(() => {
    const verifyKhaltiPayment = () => {
      axios
        .post(`${apiUrl}/api/khalti/verify/${oid}`, { token, amount })
        .then((res) => {
          gotoOrderDetails();
        })
        .catch((err) => {
          console.log(err);
        });
    };

    if (oid && token && amount) {
      verifyKhaltiPayment();
    }
  }, [oid, token, amount]);

  return (
    <div className="mx-auto max-w-7xl px-2 lg:px-0">
      <div className="mx-auto max-w-2xl py-8 lg:max-w-7xl text-center">
        <h2 className="text-2xl font-bold text-green-600 mb-4">
          Khalti Payment Successful
        </h2>
        <p className="text-gray-700">
          Thank you for your payment. You will be redirected to your order
          details shortly.
        </p>
      </div>
    </div>
  );
}
