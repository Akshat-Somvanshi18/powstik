import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
export default function Navbar(props) {

  return (
    <>
      <nav id="navbar1">
      <a href="/"><img src="./images/logo.png" alt="powstick-logo" id="logo"></img></a>
      <input type="search" placeholder="Search for products" id="search-bar"></input>
      <Link to="/Login" id="login-btn">Login / Register</Link>
      <Link to="/Cart" id="cart-btn">Cart</Link>
      </nav>
      <nav id="navbar2">
        <a href="/" className="nav-items">Healthy Snacks</a>
        <a href="/" className="nav-items">Millets</a>
        <a href="/" className="nav-items">Super Foods</a>
        <a href="/" className="nav-items">Plant Proteins</a>
        <a href="/" className="nav-items">Beverages</a>
        <a href="/" className="nav-items">Medical Nutrition</a>
        <a href="/" className="nav-items">Organic Staples</a>
        <a href="/" className="nav-items">Services</a>
        <a href="/" className="nav-items">All</a>
      </nav>
    </>
  );
}

