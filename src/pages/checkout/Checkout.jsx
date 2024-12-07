import React, { useRef } from "react";
import { useStateValue } from "../../context";
import { Navigate } from "react-router-dom";

const BOT_TOKEN = "7823622931:AAHNnsoPWkHA7Y_N_YVJHA0M4ii-cNvD3Q4";
const CHAT_ID = "-4749368920";

const Checkout = () => {
  const { cart, setCart } = useStateValue();

  if (!cart.length) {
    return <Navigate replace to={"/cart"} />;
  }

  const fname = useRef(null);
  const lname = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    let text = "Order %0A%0A";
    text += `Name: ${fname.current.value} %0A`;
    text += `LastName: ${lname.current.value} %0A%0A`;

    cart.forEach((product) => {
      text += `Name: ${product.title} %0A`;
      text += `Amount: ${product.amount} %0A`;
      text += `Price: ${product.price} %0A%0A`;
    });
    text += `Total: ${cart.reduce(
      (sum, item) => sum + item.amount * item.price,
      0
    )}`;

    let url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage?chat_id=${CHAT_ID}&text=${text}`;
    let api = new XMLHttpRequest();

    api.open("GET", url, true);
    api.send("");
    setCart([]);
  };

  return (
    <div className="container min-h-[80vh] flex flex-col justify-center items-center py-10">
      <h2 className="text-3xl font-bold mb-5">Checkout</h2>
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white shadow-md rounded-lg p-8 space-y-6"
      >
        {/* First Name */}
        <div>
          <label
            htmlFor="fname"
            className="block text-gray-700 text-sm font-semibold mb-2"
          >
            First Name
          </label>
          <input
            ref={fname}
            id="fname"
            type="text"
            required
            placeholder="Enter your first name"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
          />
        </div>
        {/* Last Name */}
        <div>
          <label
            htmlFor="lname"
            className="block text-gray-700 text-sm font-semibold mb-2"
          >
            Last Name
          </label>
          <input
            ref={lname}
            id="lname"
            type="text"
            required
            placeholder="Enter your last name"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
          />
        </div>
        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-green-500 text-white font-semibold py-2 rounded-md hover:bg-green-600 transition duration-300"
        >
          Submit Order
        </button>
      </form>
    </div>
  );
};

export default Checkout;
