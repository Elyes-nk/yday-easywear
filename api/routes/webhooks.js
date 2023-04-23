require("dotenv").config();
const Order = require("../models/Order");

const stripe = require("stripe")(process.env.STRIPE_KEY);
const router = require("express").Router();

router.post(
  "/stripe",
  (stripewebhook = (req, res) => {
    let data;
    let eventType;
    const webhookSecret = process.env.WEBHOOK_SECRET_KEY;

    if (webhookSecret) {
      let event;
      let signature = req.headers["stripe-signature"];

      try {
        event = stripe.webhooks.constructEvent(
          req.body,
          signature,
          webhookSecret
        );
      } catch (err) {
        console.log(`⚠️  Webhook signature verification failed.`, err);
        return res.sendStatus(400);
      }
      data = event.data;
      eventType = event.type;
    } else {
      data = req.body.data;
      eventType = req.body.type;
    }

    console.log(eventType);
    if (eventType === "payment_intent.succeeded") {
      const transaction = new Order({
        userId: data.object.metadata.userId,
        products: JSON.parse(data.object.metadata.products),
        address: data.object.metadata.address,
        amount: data.object.metadata.amount,
        status: "Approved",
      });
      transaction.save().catch((err) => console.log(err));
    }
    res.sendStatus(200);
  })
);

module.exports = router;
