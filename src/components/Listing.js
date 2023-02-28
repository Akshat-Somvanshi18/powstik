import React, { useState } from "react";
import PropTypes from "prop-types";

export default function Login(props) {

    let add=(event)=>{
        const c=event.target.value;
        (props.name).push(c);
    };
  return (
    <>
    <section id="listing">
    <div>
        <img src="./images/l1.webp"></img>
        <p>Keeros – Combo Roasted Supersnacks</p>
        <p>Rs. 100</p>
        <button onClick={add} value="Keeros – Combo Roasted Supersnacks" id="btn1">ADD TO CART</button>
    </div>
    <div>
        <img src="./images/l2.webp"></img>
        <p>Keeros-Roasted SuperSnack Quinoa Millets</p>
        <p>Rs. 100</p>
        <button onClick={add} value="Keeros-Roasted SuperSnack Quinoa Millets" id="btn2">ADD TO CART</button>
    </div>
    <div>
        <img src="./images/l3.webp"></img>
        <p>Keeros-Roasted SuperSnack Multigrain Minty Lime</p>
        <p>Rs. 100</p>
        <button onClick={add} value="Keeros-Roasted SuperSnack Multigrain Minty Lime" id="btn3">ADD TO CART</button>
    </div>
    <div>
        <img src="./images/l4.webp"></img>
        <p>Ecofresh-Organic Millet Ragi Whole 500 Gm</p>
        <p>Rs. 100</p>
        <button onClick={add} value="Ecofresh-Organic Millet Ragi Whole 500 Gm" id="btn4">ADD TO CART</button>
    </div>
    <div>
        <img src="./images/l5.webp"></img>
        <p>Ecofresh-Organic Rajma Red 500 GM</p>
        <p>Rs. 100</p>
        <button onClick={add} value="Ecofresh-Organic Rajma Red 500 GM" id="btn5">ADD TO CART</button>
    </div>
    <div>
        <img src="./images/l6.jpg"></img>
        <p>Mindful Cashew – Oregano 300gm</p>
        <p>Rs. 100</p>
        <button onClick={add} value="Mindful Cashew – Oregano 300gm" id="btn6">ADD TO CART</button>
    </div>
    <div>
        <img src="./images/l7.jpg"></img>
        <p>Mindful Coconut Orange Protein Energy Balls</p>
        <p>Rs. 100</p>
        <button onClick={add} value="Mindful Coconut Orange Protein Energy Balls" id="btn7">ADD TO CART</button>
    </div>
    <div>
        <img src="./images/l8.webp"></img>
        <p>Mindful Hazelnut Protein Energy Balls</p>
        <p>Rs. 100</p>
        <button onClick={add} value="Mindful Hazelnut Protein Energy Balls" id="btn8">ADD TO CART</button>
    </div>
    </section>


    </>
  );
}
