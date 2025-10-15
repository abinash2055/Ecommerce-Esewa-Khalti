const fetch = require("node-fetch");

exports.verifyPayment = async (req, res, next) => {
  try {
    const { token, amount, oid } = req.body; // token from Khalti checkout, amount in paisa
    const KHALTI_SECRET_KEY = process.env.KHALTI_SECRET_KEY;

    const response = await fetch("https://khalti.com/api/v2/payment/verify/", {
      method: "POST",
      headers: {
        Authorization: `Key ${KHALTI_SECRET_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        token,
        amount,
      }),
    });

    const data = await response.json();
    console.log("Khalti Verification Response:", data);

    if (data.state && data.state.name === "Completed") {
      // Payment successful
      next();
    } else {
      return res
        .status(400)
        .json({ error: "Payment verification failed", details: data });
    }
  } catch (err) {
    console.error(err);
    return res.status(400).json({ error: err.message });
  }
};
