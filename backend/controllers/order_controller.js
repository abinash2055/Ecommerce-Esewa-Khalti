const Order = require("../models/order");

// Middleware to get order by ID
exports.getOrderById = async (req, res, next, id) => {
  try {
    const order = await Order.findById(id);
    if (!order) return res.status(400).json({ error: "No order found" });
    req.order = order;
    next();
  } catch (err) {
    return res.status(400).json({ error: err?.message || "No Order found" });
  }
};

// Middleware to mark order as paid (after payment verification)
exports.getOrderForPayment = async (req, res, next) => {
  try {
    const order = await Order.findById(req.body.oid);
    if (!order) return res.status(400).json({ error: "No order found" });

    // Here you could verify payment based on payment_method
    // For example:
    // if (order.payment_method === 'esewa') verifyEsewa(req.body.payment_id)
    // else if (order.payment_method === 'khalti') verifyKhalti(req.body.payment_id)

    order.status = "paid and processing";
    const updatedOrder = await order.save();
    req.order = updatedOrder;
    next();
  } catch (err) {
    return res.status(400).json({ error: err?.message || "No Order found" });
  }
};

// Create a new order
exports.createOrder = async (req, res) => {
  try {
    req.body.user = req.user._id;
    let amount = 0;

    for (const item of req.body.products) {
      // item.product is expected to be populated with the product object or id
      amount += item.quantity * item.product.discounted_price;
    }

    req.body.amount = amount;
    const order = new Order(req.body);
    const createdOrder = await order.save();

    res.json({ message: "Order Created Successfully", order: createdOrder });
  } catch (err) {
    return res
      .status(400)
      .json({ error: err?.message || "Cannot create order" });
  }
};

// Get all orders (admins see all, users see only their orders)
exports.getAllOrders = async (req, res) => {
  try {
    const filter = req.user.role !== 1 ? { user: req.user._id } : {};
    const orders = await Order.find(filter);
    res.json(orders);
  } catch (err) {
    return res.status(400).json({ error: err?.message || "No Orders found" });
  }
};

// Update order status
exports.updateOrder = async (req, res) => {
  try {
    const order = req.order;
    order.status = req.body.status;
    const updatedOrder = await order.save();
    res.json({ message: "Order Updated Successfully", order: updatedOrder });
  } catch (err) {
    return res.status(400).json({ error: err?.message || "No Order found" });
  }
};

// Delete an order
exports.deleteOrder = async (req, res) => {
  try {
    const order = req.order;
    await order.deleteOne();
    res.json({ message: "Order Deleted Successfully" });
  } catch (err) {
    return res.status(400).json({ error: err?.message || "No Order found" });
  }
};
