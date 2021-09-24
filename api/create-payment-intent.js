import { createPaymentIntent } from "../src/stripe.js";

export default (req, res) => createPaymentIntent(req, res);
