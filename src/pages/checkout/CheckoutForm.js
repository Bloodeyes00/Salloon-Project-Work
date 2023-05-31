import React, { useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import axios from "axios";
import Checkout from "../../api/checkout";
import CartApi from "../../api/cart";
import { useHistory } from 'react-router-dom';


export const CheckoutForm = (props) => {
  let [billingAddress, SetbillingAddress] = useState('')
  const stripe = useStripe();
  const elements = useElements();
  const history = useHistory();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });
    if (!error) {

      let services = []
      let Staff = ""
      let products = []
      let Appointment_Date = "";
      let Time_Slot = "";
      if (props.cart.Services != null) {
        Staff = props.cart.Services.Staff._id
        Appointment_Date = props.cart.Services.Appointment_Date;
        Time_Slot = props.cart.Services.Time_Slot;
        services = props.cart.Services.Services.map((data) => {
          return data._id
        })
      }
      if (props.cart.Products.length > 0) {
        products = props.cart.Products.map((data) => {
          return { Product: data._id, Quantity: data.quantity }
        })
      }

      let data1 = {
        Services: services,
        Products: products,
        Total_Price: props.totalprice,
        Coupon_id: props.Coupon_id,
        Staff: Staff,
        Saloon: props.cart.Saloon._id,
        Appointment_Date,
        Time_Slot,
        stripeToken: paymentMethod.id,
        Shipping_Address: billingAddress
      }
      ("data", data1)
      //send token to backend here
      try {
        const payres = await CartApi.payment(data1)
        if (payres.data.success == true) {
          history.push("/bookinginfo")
        }
        else if (payres.data.success == false) {
          alert("payment failed")
        }
        // const { id } = paymentMethod;
        // // const response = await Checkout.submitStripeToken({id : id , amount: 999})

        // ("Stripe 35 | data", response.data.success);
        // if (response.data.success) {
        //   ("CheckoutForm.js 25 | payment successful!");
        // }
      } catch (error) {

      }
    } else {
     
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: "100%" }}>
      {
        (props.cart.Products.length > 0) && (props.cart.Services == null) ?
          <input value={billingAddress} onChange={(e) => { SetbillingAddress(e.target.value) }} placeholder="Billing Address" />
          :
          ""
      }
      <CardElement />
      <div className="submit_payemnt_btn text-right">
        <button className="btn btn-primary">Pay</button>

      </div>
    </form>
  );
};