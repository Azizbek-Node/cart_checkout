import axios from "../../api";
import React, { useEffect, useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { useStateValue } from "../../context";

const Detail = () => {
  const { setWishlist, wishlist } = useStateValue();
  const [data, setData] = useState(null);
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`/product/${id}`);
        setData(response.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  const handleLike = (product) => {
    const exists = wishlist.some((item) => item.id === product.id);
    if (exists) {
      setWishlist((prev) => prev.filter((item) => item.id !== product.id));
    } else {
      setWishlist((prev) => [...prev, product]);
    }
  };

  if (loading) {
    return (
      <div className="text-center min-h-52 py-24">
        <p>Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-24">
        <p>{error.message || "Something went wrong!"}</p>
      </div>
    );
  }

  return (
    <div className="container min-h-[80vh] py-5 grid grid-cols-2 gap-8">
      {/* Image Section */}
      <div>
        <div>
          <img
            src={data?.images[index]}
            alt={data?.title || "Product Image"}
            className="w-full h-auto object-cover"
          />
        </div>
        <div className="flex gap-2 mt-4">
          {data?.images?.map((url, inx) => (
            <img
              onClick={() => setIndex(inx)}
              className={`w-20 h-20 cursor-pointer rounded border-2 transition ${
                index === inx
                  ? "opacity-100 border-blue-500"
                  : "opacity-60 border-gray-300"
              }`}
              src={url}
              key={inx}
              alt={`Thumbnail ${inx + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Details Section */}
      <div>
        <h2 className="text-3xl font-semibold mb-4">{data?.title}</h2>
        <p className="text-gray-600 mb-6">{data?.description}</p>
        <button
          onClick={() => handleLike(data)}
          className="flex items-center gap-2 px-4 py-2 bg-gray-100 border rounded shadow-sm hover:bg-gray-200 transition"
          aria-label="Toggle Wishlist"
        >
          {wishlist?.some((item) => item.id === data?.id) ? (
            <FaHeart className="text-red-500" />
          ) : (
            <FaRegHeart />
          )}
          <span className="text-sm font-medium">
            {wishlist?.some((item) => item.id === data?.id)
              ? "Remove from Wishlist"
              : "Add to Wishlist"}
          </span>
        </button>
      </div>
    </div>
  );
};

export default Detail;
