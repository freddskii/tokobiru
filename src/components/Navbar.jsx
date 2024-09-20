import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import menu from "../assets/menu.svg";
import shoppingCart from "../assets/shopping-cart.svg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-primary fixed">
      <div className="container mx-auto px-4 py-4 grid grid-cols-2 md:grid-cols-3 items-center">
        {/* Logo */}
        <div className="text-2xl text-white font-bold cursor-pointer">TokoBiru</div>

        {/* Desktop Menu */}
        <div className="hidden md:flex justify-center space-x-10">
          <NavLink to={"/"} className="text-white  hover:scale-110 uppercase">
            Home
          </NavLink>
          <NavLink to={"/product"} className="text-white  hover:scale-110 uppercase">
            Product
          </NavLink>
          <NavLink to={"/contact"} className="text-white  hover:scale-110 uppercase">
            Contact
          </NavLink>
        </div>

        {/* Shopping Cart Icon & Mobile Menu Button */}
        <div className="flex justify-end items-center">
          {/* Desktop Shopping Cart */}
          <div className="hidden md:block">
            <NavLink to={"/cart"}>
              <button className="text-gray-700 hover:text-blue-500">
                <img src={shoppingCart} alt="shopping-cart" className="w-6 h-6" />
              </button>
            </NavLink>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white hover:text-blue-500 focus:outline-none ml-4">
              <img src={menu} alt="menu" className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden pb-4">
          <NavLink to={"/"} onClick={() => setIsOpen(!isOpen)} className="block px-4 py-2 text-white hover:bg-gray-100">
            Home
          </NavLink>
          <NavLink to={"/product"} onClick={() => setIsOpen(!isOpen)} className="block px-4 py-2 text-white hover:bg-gray-100">
            Product
          </NavLink>
          <NavLink to={"/contact"} onClick={() => setIsOpen(!isOpen)} className="block px-4 py-2 text-white hover:bg-gray-100">
            Contact
          </NavLink>
          <NavLink to={"/cart"}>
            <button className="flex w-full text-left px-4 py-2 text-white hover:bg-gray-100 space-x-2">
              <img src={shoppingCart} alt="menu" />
              <p>Cart</p>
            </button>
          </NavLink>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
