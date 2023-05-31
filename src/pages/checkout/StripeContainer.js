import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import { CheckoutForm } from "./CheckoutForm";

const PUBLIC_KEY = "pk_test_51JQslcLnbF7BsxGc12ixZM95mOTizy9pTg5y0cFC3PkyP0eBPtNv9jrVDpSVgTg9uPfrlCwGqD9s07VD5Gnpg4D000sJG4pMA0";

const stripeTestPromise = loadStripe(PUBLIC_KEY);

const Stripe = () => {
  return (
    <Elements stripe={stripeTestPromise}>
      <CheckoutForm />
    </Elements>
  );
};

export default Stripe;