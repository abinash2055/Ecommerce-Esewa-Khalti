const Payment = require("../models/payment");

exports.createPayment = async (req, res) => {
  try {
    req.body.user = req.order.user; // user from the order
    req.body.source_payment_id = req.body.refId; // payment gateway reference ID
    req.body.amount = req.body.amt; // amount paid
    req.body.order = req.order._id; // linked order
    req.body.source = req.body.payment_method || "esewa"; // default to Esewa if not provided

    const payment = new Payment(req.body);
    const createdPayment = await payment.save();

    res.json({
      message: "Payment Created Successfully",
      payment: createdPayment,
    });
  } catch (err) {
    return res
      .status(400)
      .json({ error: err?.message || "Payment creation failed" });
  }
};
