import React from "react";
import { useStateValue } from "../../context";
import Products from "../../components/products/Products";
import { useNavigate } from "react-router-dom";

const Wishes = () => {
  const { wishlist } = useStateValue();
  const navigate  = useNavigate()
  return (
    <div>
      {wishlist.length ? (
        <Products data={wishlist} />
      ) : (
        <div className="text-center">
          <img
            className="w-72 mx-auto mt-20"
            src="https://uzum.uz/static/img/hearts.cf414be.png"
            alt="hearts"
          />
          <p className="text-[#5E6E89] text-lg mb-8">
            Order it for you or for your beloved ones
          </p>

          <button
            onClick={() => navigate("/")}
            className="inline-flex text-white bg-[#2563eb] hover:bg-[#1e40af] focus:ring-4 focus:outline-none focus:ring-[#93c5fd] font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-[#1e3a8a] my-4"
          >
            Back to Homepage
          </button>
        </div>
      )}
    </div>
  );
};

export default Wishes;
