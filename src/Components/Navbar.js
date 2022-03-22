import React from "react";
import logo from "../Assets/logo.png";
import { navStyles } from "../Styles/Styles";

const Navbar = () => {
  return (
    <div className={navStyles.main}>
      <img className={navStyles.logo} src={logo} alt="" />
      <button className={navStyles.btn}>Contact</button>
    </div>
  );
};

export default Navbar;
