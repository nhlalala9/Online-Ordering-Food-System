import { useEffect, useState } from "react";

import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import { loadStripe } from "@stripe/stripe-js";

function Payment() {
  const [stripePromises, setStripePromise] = useState(null);
  const [clientSecret, setClientSecret] = useState("");
const stripePromise = loadStripe('pk_test_51MTmVOJ4KXUZIvUmY1DwumWudhZOFtjF0zCvZEXpudqsTy2jRYKP1s1GxpoMYAvuCteOEV1spFn65ak11Gyv4nPj00dfOLKEAI')
  // useEffect(() => {
  //   fetch("/config").then(async (r) => {
  //     const { publishableKey } = await r.json();
  //     setStripePromise(loadStripe(publishableKey));
  //   });
  // }, []);

  useEffect(() => {
    fetch("http://localhost:5252/create-payment-intent", {
      method: "POST",
      body: JSON.stringify({}),
    }).then(async (result) => {
      var { clientSecret } = await result.json();
      setStripePromise(stripePromise)
      console.log(stripePromises);
      setClientSecret(clientSecret);
      console.log(clientSecret)

    });
  }, []);

  return (
    <>
      <h1>React Stripe and the Payment Element</h1>
      {/* {clientSecret && stripePromise && ( */}
        <Elements stripe={stripePromises} options={{ clientSecret }}>
          <CheckoutForm />
        </Elements>
      {/* )} */}
    </>
  );
}

export default Payment;
