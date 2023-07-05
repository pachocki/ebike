import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import HeroSubPages from "../components/HeroSubPages";
import { useSelector, useDispatch } from "react-redux";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import StripeCheckout from "react-stripe-checkout";
import { userRequest } from "../Hooks/requestMethods";
import { addReset, removeProduct } from "../redux/cartRedux";

const MySwal = withReactContent(Swal);

const OrderSummary = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const [stripeToken, setStripeToken] = useState(null);
  const quantity = useSelector((state) => state.cart.quantity);

  const onToken = (token) => {
    setStripeToken(token);
  };

  const handleSuccess = () => {
    MySwal.fire({
      icon: "success",
      title: "Payment was successful",
      time: 4000,
    }).then(function () {
      window.location.href = "/";
      dispatch(addReset(quantity));
    });
  };

  const handleFailure = () => {
    MySwal.fire({
      icon: "error",
      title: "Payment was not successful",
      time: 4000,
    });
  };

  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await userRequest.post("/checkout/payment", {
          tokenId: stripeToken.id,
          amount: 500,
        });
        if (res.status === 200) {
          handleSuccess();
        }
      } catch (error) {
        handleFailure();
        console.log(error);
        console.log(stripeToken);
      }
    };

    if (stripeToken) {
      makeRequest();
    }
  }, [stripeToken]);

  const handleRemove = (productId) => {
    dispatch(removeProduct(productId));
    if (cart.products.length === 1) {
      dispatch(addReset(0));
    }
  };

  return (
    <div>
      <HeroSubPages
        bg="bg-image-seven big-screen:h-[70vh] mobile:h-[60vh] "
        title="Thank You"
      />
      <h1 className="text-8xl text-center py-10 screen:text-7xl mobile:text-6xl small-mobile:text-5xl mobile:py-5">
        Your Bag
      </h1>
      <div
        className={`flex ${
          cart.products.length > 0 ? "justify-between" : "justify-center"
        } pb-20 px-10 screen:px-5 w-full items-center gap-5 mobile:pb-10 mobile:px-1`}
      >
        <div>
          <Link to="/shop">
            {" "}
            <button className="bg-white py-4 px-4 hover:bg-gray-300 hover:text-white text-xl border-2 dark:text-black tablet:text-lg laptop:px-2 laptop:py-2  mobile:text-sm">
              Continue Shopping
            </button>
          </Link>
        </div>

        {cart.products.length > 0 ? (
          <div>
            <StripeCheckout
              name="E-bike"
              stripeKey="pk_test_51LysaEGITaNFIpTDcgnxAje6xIPs90IPi7ZEmFyHxwNZ7a2ByUd7fZdegXYnrXz8BA4mZIvgxvmK9yonpnTrlqoY00Pg4RHKeQ"
              billingAddress
              shippingAddress
              description={`Your total is ${cart.total} NOK`}
              amount={100}
              token={onToken}
            >
              <button className="bg-black text-white hover:opacity-50 py-4 px-4 dark:border-none text-xl border-2 tablet:text-lg laptop:px-2 laptop:py-2  mobile:text-sm">
                <p>Pay Now</p>
              </button>
            </StripeCheckout>
          </div>
        ) : null}
      </div>
      <div className="grid grid-cols-[4fr_1fr] laptop:grid-cols-[3fr_1fr] tablet:flex tablet:flex-col laptop:gap-2 relative gap-10 pb-10">
        <div className="flex flex-col">
          <div className="pb-10 flex justify-between tablet:pt-0 flex-col">
            {cart.products.length > 0
              ? cart.products.map((product) => (
                  <div
                    className="flex justify-between gap-2 pb-10 items-center w-full tablet:flex-col tablet:pb-5 tablet:px-5 mobile:px-2"
                    key={product._id}
                  >
                    <div className="w-1/2 tablet:w-full relative ">
                      <button
                        className="text-white bg-cyan-700 dark:bg-red-600 absolute bottom-2 right-3 px-2 py-1 bg-teal"
                        onClick={() => handleRemove(product._id)}
                      >
                        Remove
                      </button>
                      <img
                        className="object-cover w-full rounded-xl border dark:border-none"
                        src={product.img}
                        alt="bike"
                      />
                    </div>
                    <div className="flex tablet:w-full tablet:justify-center">
                      <div className="flex flex-col gap-1 text-5xl laptop:text-4xl screen:text-2xl tablet:text-4xl mobile:text-3xl">
                        <h2>{product.title}</h2>
                        <span>{product._id}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 flex-col text-4xl laptop:text-3xl tablet:gap-2 tablet:text-4xl mobile:text-3xl">
                      <div className="flex gap-5 screen:gap-2 text-3xl ">
                        <span>Quantity</span>
                        <span>{product.quantity}</span>
                      </div>
                      <div>
                        <span className="tablet:text-3xl text-green-500">
                          {product.price} NOK
                        </span>
                      </div>
                    </div>
                  </div>
                ))
              : null}
          </div>
        </div>

        <div className="border-2  bg-gray-100 dark:bg-zinc-800 dark:border-none px-2 py-5 relative h-full tablet:fixed tablet:bottom-0 tablet:z-40 tablet:bg-cyan-700 tablet:dark:bg-zinc-900 tablet:border-none tablet:text-white tablet:h-[4rem] tablet:w-full ">
          <p className="big-screen:text-5xl pb-10 laptop:text-4xl tablet:text-2xl screen:text-2xl tablet:hidden ">
            Order Summary
          </p>
          <div className="flex flex-col gap-10 tablet:gap-5 justify-between big-screen:text-4xl screen:text-2xl">
            <div className="flex justify-between gap-2 tablet:hidden tablet:text-xl">
              <p>Subtotal:</p>
              <p>{cart.total} NOK</p>
            </div>
            <div className="flex justify-between tablet:hidden ">
              <p>Shipping:</p>
              <p>0 NOK</p>
            </div>
            <div className="flex justify-between font-bold screen:text-3xl   ">
              <p>Total:</p>
              <p>{cart.total} NOK</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
