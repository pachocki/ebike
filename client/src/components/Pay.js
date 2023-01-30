import React, { useEffect, useState } from "react";
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";


const MySwal = withReactContent(Swal);

const Pay = () => {
  const [stripeToken, setStripeToken] = useState(null);

  const onToken = (token) => {
    setStripeToken(token);
  };
  const handleSuccess = () => {
    MySwal.fire({
      icon: 'success',
      title: 'Payment was successful',
      time: 4000,
    });
  };
  const handleFailure = () => {
    MySwal.fire({
      icon: 'error',
      title: 'Payment was not successful',
      time: 4000,
    });
  };
  useEffect(() => {
    const makeRequest = async () => {
            try {
              const response = await axios({
                url: 'https://ebike.onrender.com/payment',
                method: 'post',
                data: {
                  amount:1000,
                  tokenId: stripeToken.id ,
                },
              });
              if (response.status === 200) {
                handleSuccess();
              }
            } catch (error) {
              handleFailure();
              console.log(error);
              console.log(stripeToken);
            }
    }
    stripeToken && makeRequest();
  }, [stripeToken]);

  return (
    <div>
      <StripeCheckout
        name="E-bike"
        stripeKey = {process.env.REACT_APP_STRIPE_KEY }
        billingAddress
        shippingAddress
        description="your total is $100"
        amount={10000}
        token={onToken}
        
      >
        <button className="bg-black text-white hover:opacity-50 py-4 px-4 dark:border-none text-xl border-2 tablet:text-lg  tablet:py-2 mobile:text-sm">Pay Now</button>
      </StripeCheckout>
    </div>
  );
};

export default Pay;