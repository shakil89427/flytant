import React from "react";
import logo from "../Assets/logo.png";

const Navbar = () => {
  return (
    <div className="bg-black flex items-center justify-between p-2 md:px-24 md:py-5 fixed w-full top-0">
      <img className="w-24 md:w-48 lg:w-56" src={logo} alt="" />
      <button className="border border-white text-white rounded-md px-5 py-1 md:px-12 md:py-1 lg:py-2 text-sm md:text-2xl font-semibold hover:bg-white hover:text-black ease-in duration-150">
        Contact
      </button>
    </div>
  );
};

export default Navbar;
