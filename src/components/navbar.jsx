import React from "react";
import { Link } from "react-router-dom";
// import { ShoppingCart } from "phosphor-react";
// import AiOutlineShoppingCart from "@ant-design/icons";
import "./navbar.css";

export const Navbar = ({ placeholder, data }) => {
  return (
    <div className="navbar">
      <p className="pa">
        <Link to="/shop">BookStore</Link>
      </p>
      <div className="links">
        <Link to="/search">Search</Link>
        <Link to="/cart">
          Cart
        </Link>
        <Link to="/shop"> Home </Link>
        <Link to="/"> LogOut </Link>
      </div>
    </div>
  );
};
