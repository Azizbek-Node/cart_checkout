import React from "react";

const Hero = () => {
  return (
    <div className="h-screen bg-hero-pattern bg-cover bg-center flex justify-center items-center">
      <div className="container px-6 sm:px-10 text-center max-w-3xl">
        <div className="bg-white bg-opacity-70 p-10 rounded-lg shadow-xl backdrop-blur-md">
          <p className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
            🌱 The nature candle
          </p>
          <p className="text-lg md:text-xl font-light text-gray-700 leading-relaxed mb-8">
            All handmade with natural soy wax, Candleaf is a companion for all
            your pleasure moments
          </p>
          <button className="px-8 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg font-medium shadow-md transition">
            Discovery Our Collection
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
