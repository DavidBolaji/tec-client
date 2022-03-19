import React from "react";
import { HiMenuAlt1, HiSearch } from "react-icons/hi";
import Logo from "../../assets/img/logo.png";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar_menu">
        <HiMenuAlt1 color="#fff" fontSize="20px" />
      </div>
      <div className="navbar_logo">
        <img src={Logo} alt="tec-logo" />
        {/* <span>TecWorld</span> */}
      </div>
      <div className="navbar_search">
        <HiSearch color="#fff" fontSize="20px" />
      </div>
    </div>
  );
};

export default Navbar;
