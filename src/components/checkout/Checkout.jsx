import React from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import PaymentForm from "../../pages/pay/Pay";

const stripePromise = loadStripe(
  "pk_live_51NKe2gEQkuyRC3iXvFwrdRojEfpkTpL13Poqu0xIVH4fpikCwdEvoKmyz4x3qjFA94HMn4B1NOQJkUlpVGzqboKr00lYNuIZVs"
);

function Checkout() {
  return (
    <div
      style={{ display: "flex", justifyContent: "center", padding: "40px 0" }}
    >
      <div style={{ maxWidth: "400px", width: "100%" }}>
        <h1 style={{ textAlign: "center" }}>Thông tin thanh toán</h1>
        <Elements stripe={stripePromise}>
          <PaymentForm />
        </Elements>
      </div>
    </div>
  );
}

export default Checkout;
