import StripeLibrary from "stripe";
import dollarsToCents from "./utils/dollarsToCents";

/* const stripe = StripeLibrary(process.env.SECRET_KEY, {
  apiVersion: "2020-08-27",
}); */

const stripe = StripeLibrary(
  "sk_test_51JdKboGqWWVJRmR7cnb2umytxAN3mu7Q1fqgUSrZcMLZolo2PVPGSj4m90okZUTn6sk9ASRtciPATHWPuGeXmY8w00jqEVFLBr",
  {
    apiVersion: "2020-08-27",
  }
);

const createPaymentIntent = async (req, res) => {
  if (req.method !== "POST") {
    return res.status(405).json({
      error: "method not allowed",
    });
  }

  const { amount } = req.body;
  console.log(amount);

  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: dollarsToCents(amount),
      currency: "usd",
      payment_method_types: ["card"],
    });

    res.json({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (error) {
    res.json({
      error: error.message,
    });
  }
};

export { createPaymentIntent };
