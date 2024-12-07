import React, { useEffect, useState } from "react";
import Empty from "../../components/empty/Empty";
import { useStateValue } from "../../context";
import { useNavigate } from "react-router-dom";
import Promocode from "../../components/promocode/Promocode";

const Cart = () => {
  const [promoStatus, setPromoStatus] = useState(
    JSON.parse(localStorage.getItem("promo")) || {
      msg: "",
      error: false,
      success: 0,
    }
  );
  const { cart = [], setCart } = useStateValue();
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem("promo", JSON.stringify(promoStatus));
  }, [promoStatus]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleIncrement = (product) => {
    setCart((prev) =>
      prev.map((item) => {
        if (item.id === product.id) {
          return { ...item, amount: item.amount + 1 };
        } else {
          return item;
        }
      })
    );
  };

  const handleDecrement = (product) => {
    if (product.amount > 1) {
      setCart((prev) =>
        prev.map((item) => {
          if (item.id === product.id) {
            return { ...item, amount: item.amount - 1 };
          } else {
            return item;
          }
        })
      );
    }
  };

  const handleDelete = (product) => {
    setCart((prev) => prev.filter(({ id }) => id !== product.id));
  };

  const totalPrice =
    cart?.reduce((sum, item) => sum + item.price * item.amount, 0) || 0;

  return (
    <div className="min-h-[80vh] bg-gray-50 py-10">
      {cart && cart.length ? (
        <div className="container mx-auto flex flex-col lg:flex-row gap-8">
          {/* Left Section: Cart Items */}
          <div className="flex-1 bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-5">Savatcha</h2>
            <div className="space-y-6">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between bg-gray-100 p-4 rounded-lg shadow-sm"
                >
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    className="w-16 h-16 object-contain rounded-md"
                  />
                  <div className="flex-1 ml-4">
                    <h3 className="text-lg font-medium">{item.title}</h3>
                    <p className="text-sm text-gray-500">
                      ${(item.amount * item.price).toFixed(2)}
                    </p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button
                      disabled={item.amount <= 1}
                      onClick={() => handleDecrement(item)}
                      className={`w-8 h-8 rounded-full flex items-center justify-center border ${
                        item.amount <= 1
                          ? "text-gray-300 border-gray-300"
                          : "text-gray-700 border-gray-700 hover:bg-gray-200"
                      }`}
                    >
                      -
                    </button>
                    <span className="text-lg font-semibold">{item.amount}</span>
                    <button
                      onClick={() => handleIncrement(item)}
                      className="w-8 h-8 rounded-full flex items-center justify-center border text-gray-700 border-gray-700 hover:bg-gray-200"
                    >
                      +
                    </button>
                  </div>
                  <button
                    onClick={() => handleDelete(item)}
                    className="ml-4 text-red-500 hover:text-red-700"
                  >
                    O‘chirish
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Right Section: Order Summary */}
          <div className="w-full lg:w-96 bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">
              Buyurtma Tafsilotlari
            </h3>
            <div className="space-y-2">
              <p className="flex justify-between text-gray-700">
                <span>Umumiy narx:</span>
                <span className="font-bold">${totalPrice.toFixed(2)}</span>
              </p>
              <Promocode setPromoStatus={setPromoStatus} />
              {promoStatus.error && (
                <p className="text-sm text-red-500">{promoStatus.msg}</p>
              )}
              {promoStatus.success && (
                <p className="text-sm text-green-500">{promoStatus.msg}</p>
              )}
            </div>
            <button
              onClick={() => navigate("/checkout")}
              className="w-full bg-green-500 text-white py-2 rounded-lg mt-5 hover:bg-green-600 transition"
            >
              Checkout
            </button>
          </div>
        </div>
      ) : (
        <Empty
          title="Savatingiz hozircha bo‘sh"
          url="https://uzum.uz/static/img/shopocat.490a4a1.png"
        />
      )}
    </div>
  );
};

export default Cart;
