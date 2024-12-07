import React from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <section className="flex items-center justify-center h-screen bg-gray-50 dark:bg-gray-800">
      <div className="text-center">
        <h1 className="text-9xl font-extrabold text-gray-900 dark:text-gray-100">
          404
        </h1>
        <p className="text-2xl font-semibold text-gray-700 dark:text-gray-300 mt-4">
          Siz qidirgan sahifa topilmadi!
        </p>
        <p className="text-gray-500 dark:text-gray-400 mt-2">
          Sahifani noto‘g‘ri manzil bilan chaqirdingiz yoki u o‘chirilgan.
          Asosiy sahifaga qaytib ko‘ring.
        </p>
        <button className="mt-6 px-6 py-3 text-white bg-blue-600 rounded-lg shadow hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800">
          Asosiy sahifaga qaytish
        </button>
      </div>
    </section>
  );
};

export default NotFound;
