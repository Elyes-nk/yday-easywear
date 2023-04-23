require("dotenv").config();
const router = require("express").Router();

const stripe = require("stripe")(process.env.STRIPE_KEY);

const initiateStripeSession = async (req) => {
  const line_items = req.body.products.map((prod) => {
    return {
      price_data: {
        currency: "eur",
        product_data: {
          name: prod.product.title,
        },
        unit_amount: (prod.product.price * 100).toFixed(0),
      },
      quantity: prod.amount,
    };
  });
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items,
    payment_intent_data: {
      metadata: {
        userId: req.body.userId,
        products: JSON.stringify(
          req.body.products.map((prod) => {
            return {
              productId: prod?.product?._id,
              quantity: prod?.amount,
            };
          })
        ),
        amount: req.body.amount,
        address: req.body.address,
      },
    },
    mode: "payment",
    success_url: `${process.env.CLIENT_URL}/success`,
    cancel_url: `${process.env.CLIENT_URL}/canceled`,
  });

  return session;
};

router.post(
  "/",
  (createSession = async function (req, res) {
    try {
      const session = await initiateStripeSession(req);
      // eslint-disable-next-line
      console.log("## :", session);
      res.status(200).json({
        id: session.id,
        price: session.amout_total,
        currency: session.currency,
        success_url: session.success_url,
      });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  })
);
module.exports = router;
