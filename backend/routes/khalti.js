const express = require("express");
const router = express.Router();
const {
  isSignedIn,
  isAuthenticated,
} = require("../controllers/auth_controller");
const { getOrderById } = require("../controllers/order_controller");
const { verifyPayment } = require("../controllers/khalti");

router.param("orderId", getOrderById);

// POST /api/khalti/verify/:orderId
router.post(
  "/:orderId",
  isSignedIn,
  isAuthenticated,
  verifyPayment,
  (req, res) => {
    res.json({
      message: "Khalti payment verified successfully",
      order: req.order,
    });
  }
);

module.exports = router;
