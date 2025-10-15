const FormData = require("form-data");
const fetch = require("node-fetch");

exports.verifyPayment = async (req, res, next) => {
  try {
    const { amt, refId, oid } = req.body;

    if (!amt || !refId || !oid) {
      return res.status(400).json({ error: "Payment details missing" });
    }

    var form = new FormData();
    form.append("amt", encodeURIComponent(amt));
    form.append("rid", encodeURIComponent(refId));
    form.append("pid", encodeURIComponent(oid));
    form.append("scd", encodeURIComponent(process.env.ESEWA_MERCHANT_CODE));

    const response = await fetch(`${process.env.ESEWA_URL}/epay/transrec`, {
      method: "POST",
      body: form,
    });

    const body = await response.text();

    console.log("eSewa response:", body);

    if (body.includes("Success")) {
      next();
    } else {
      return res.status(400).json({ error: "Payment verification failed" });
    }
  } catch (err) {
    console.log(err);
    return res.status(400).json({ error: err.message });
  }
};
