import React, { useState } from "react";
import PropTypes from "prop-types";

export default function Navbar(props) {
  let a1 = () => {
    if (props.name.length === 0) {
      const para = document.createElement("h3");
      const node = document.createTextNode("Nothing to show in the cart.");
      para.appendChild(node);
      const element = document.getElementById("div1");
      element.appendChild(para);
    } else {
      for (let i = 0; i < props.name.length; i++) {
        const para = document.createElement("h3");
        const node = document.createTextNode(props.name[i]);
        para.appendChild(node);
        const element = document.getElementById("div1");
        element.appendChild(para);
      }
    }
  };

  return (
    <>
      <section id="cart-section">
        <button onClick={a1}>Show Cart</button>
        <div id="div1"></div>
      </section>
    </>
  );
}
