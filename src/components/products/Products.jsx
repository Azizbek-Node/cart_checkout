import React from "react";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { useStateValue } from "../../context";
import { IoCartOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const Products = ({ data }) => {
  const { setWishlist, wishlist, setCount, setCart, cart } = useStateValue();
  const navigate = useNavigate();
  
  const handleLike = (product) => {
    const isInWishlist = wishlist.some((item) => item.id === product.id);
    if (isInWishlist) {
      setWishlist((prev) => prev.filter((item) => item.id !== product.id));
      setCount((prev) => prev - 1);
    } else {
      setWishlist((prev) => [...prev, product]);
      setCount((prev) => prev + 1);
    }
  };

  const handleAddToCart = (product) => {
    if (!cart) {
      console.error("Cart is undefined");
      setCart(() => [{ ...product, amount: 1 }]);
      return;
    }
    const index = cart.findIndex((item) => item.id === product.id);
    if (index < 0) {
      setCart((prev) => [...prev, { ...product, amount: 1 }]);
    }
  };

  const productItems = data?.map((product) => (
    <div
      key={product.id}
      className="shadow-md flex flex-col bg-white rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
    >
      <div className="relative h-[200px] bg-gray-100">
        <img
          onClick={() => navigate(`/product/${product.id}`)}
          className="w-full h-full object-contain"
          src={product.thumbnail}
          alt=""
        />
        <button
          onClick={() => handleLike(product)}
          className="absolute top-3 right-3 text-xl text-red-500 hover:scale-110 transition-transform"
        >
          {wishlist.some((item) => item.id === product.id) ? (
            <FaHeart />
          ) : (
            <FaRegHeart />
          )}
        </button>
        <button
          onClick={() => handleAddToCart(product)}
          className="absolute top-10 right-3 text-xl"
        >
          <IoCartOutline />
        </button>
      </div>

      <div className="p-5 flex flex-col justify-between flex-1">
        <h3 className="text-lg font-semibold text-gray-800 truncate">
          {product.title}
        </h3>
        <p className="text-xl font-bold text-[#56B280] text-right">
          ${product.price}
        </p>
      </div>
    </div>
  ));

  return (
    <div className="container text-center my-24 font-poppins">
      <h2 className="text-4xl font-semibold mb-3">Our Products</h2>
      <p className="text-gray-500 text-lg mb-10">
        Treat yourself or your loved ones with these amazing products.
      </p>

      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {productItems}
      </div>
    </div>
  );
};

export default Products;
