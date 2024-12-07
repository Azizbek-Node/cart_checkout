import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { LINKS } from "../../static";
import logo from "../../assets/logo.svg";
import cart from "../../assets/Cart.svg";
import profile from "../../assets/Vector.svg";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { useStateValue } from "../../context";

const Header = () => {
  const { count } = useStateValue();
  return (
    <header id="header" className="bg-white border sticky top-0 z-50">
      <nav className="container flex justify-between gap-4 p-4 bg-white text-slate-900">
        <div className="text-base font-[500] flex items-center gap-2 max-md:gap-1 max-md:text-sm whitespace-nowrap">
          {LINKS.map((link) => (
            <NavLink key={link.id} to={link.path} className="px-5 max-md:px-2">
              {link.icon}
              <span>{link.name}</span>
            </NavLink>
          ))}
        </div>
        <div className="flex items-center gap-6">
          <NavLink
            to="/profile"
            className="hover:scale-110 transition-transform"
          >
            <img
              src={profile}
              alt="Profile"
              className="w-6 h-6 md:w-7 md:h-7 text-gray-500 hover:text-blue-600"
            />
          </NavLink>

          <NavLink
            to="/cart"
            className="relative hover:scale-110 transition-transform"
          >
            <img
              src={cart}
              alt="Cart"
              className="w-6 h-6 md:w-7 md:h-7 text-gray-500 hover:text-blue-600"
            />
          </NavLink>

          <NavLink
            to="/wishlist"
            className="relative hover:scale-110 transition-transform"
          >
            <FaRegHeart className="text-gray-500 w-6 h-6 md:w-7 md:h-7 hover:text-red-500" />
            {count > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
                {count}
              </span>
            )}
          </NavLink>
        </div>
      </nav>
    </header>
  );
};

export default Header;
