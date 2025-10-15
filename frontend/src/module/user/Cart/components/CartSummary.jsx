import React, { useState, useEffect } from "react";

const CheckoutWithSummary = ({ products, orderId }) => {
  const [loading, setLoading] = useState(false);
  const [priceDetails, setPriceDetails] = useState({
    price: 0,
    discount: 0,
  });

  // Calculate total price and discount
  useEffect(() => {
    if (products) {
      let total_price = 0;
      let total_discount = 0;
      products.forEach((cart) => {
        total_price += cart.product.price * cart.quantity;
        total_discount +=
          (cart.product.price - cart.product.discounted_price) * cart.quantity;
      });
      setPriceDetails({
        price: total_price,
        discount: total_discount,
      });
    }
  }, [products]);

  const { price, discount } = priceDetails;
  const orderAmount = price - discount;

  // Payment handler
  const handlePayment = async (method) => {
    try {
      setLoading(true);
      let response;

      if (method === "esewa") {
        const refId = prompt("Enter eSewa Reference ID:");
        if (!refId) {
          alert("Payment cancelled");
          setLoading(false);
          return;
        }

        response = await fetch(`/api/esewa/verify/${orderId}`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ amt: orderAmount, refId, oid: orderId }),
        });
      } else if (method === "khalti") {
        const token = prompt("Enter Khalti Token:");
        if (!token) {
          alert("Payment cancelled");
          setLoading(false);
          return;
        }

        response = await fetch(`/api/khalti/${orderId}`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            token,
            amount: orderAmount * 100,
            oid: orderId,
          }),
        });
      }

      const data = await response.json();
      setLoading(false);

      if (response.ok) {
        alert(`${method.toUpperCase()} payment verified successfully!`);
        console.log("Payment Data:", data);
      } else {
        alert(`Payment failed: ${data.error}`);
      }
    } catch (err) {
      setLoading(false);
      console.error(err);
      alert("Something went wrong during payment.");
    }
  };

  return (
    <section className="mt-16 rounded-md bg-white lg:col-span-4 lg:mt-0 lg:p-0 shadow-lg p-6">
      <h2 className="text-2xl font-bold text-center mb-4">
        Price Details & Checkout
      </h2>

      <dl className="space-y-1 px-2 py-4 border-b border-gray-200">
        <div className="flex justify-between">
          <dt>Price ({products?.length} item)</dt>
          <dd>Rs. {price}</dd>
        </div>
        <div className="flex justify-between">
          <dt>Discount</dt>
          <dd className="text-green-700">- Rs.{discount}</dd>
        </div>
        <div className="flex justify-between">
          <dt>Delivery Charges</dt>
          <dd className="text-green-700">Free</dd>
        </div>
        <div className="flex justify-between border-t border-dashed pt-2">
          <dt className="font-medium">Total Amount</dt>
          <dd className="font-medium">Rs. {orderAmount}</dd>
        </div>
      </dl>

      <div className="my-4 text-green-700 font-medium">
        You will save Rs.{discount} on this order
      </div>

      <button
        onClick={() => handlePayment("esewa")}
        disabled={loading}
        className={`w-full mb-2 px-4 py-2 rounded text-white font-semibold transition ${
          loading
            ? "bg-green-300 cursor-not-allowed"
            : "bg-green-500 hover:bg-green-600"
        }`}
      >
        {loading ? "Processing..." : "Pay with eSewa"}
      </button>

      <button
        onClick={() => handlePayment("khalti")}
        disabled={loading}
        className={`w-full px-4 py-2 rounded text-white font-semibold transition ${
          loading
            ? "bg-blue-300 cursor-not-allowed"
            : "bg-blue-500 hover:bg-blue-600"
        }`}
      >
        {loading ? "Processing..." : "Pay with Khalti"}
      </button>
    </section>
  );
};

export default CheckoutWithSummary;
