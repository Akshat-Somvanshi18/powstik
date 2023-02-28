import React, { useState } from "react";
import PropTypes from "prop-types";

export default function Login(props) {
  return (
    <>
    <section id="main">
      <section id="login">
        <h1>Login</h1>
        <p>Username or email address *</p>
        <input type="search"></input>
        <p>Password *</p>
        <input type="search"></input>
        <button>LOG IN</button>
      </section>
      <section id="register">
        <h1>Register</h1>
        <p>
          Registering for this site allows you to access your order status and
          histry, just fill in the fields below, and we'll get a new account set
          up for you in no time. We only ask you for information neccessary to
          make the purchase process fastre and easier
        </p>
        <button>REGISTER</button>
      </section>
      </section>

    </>
  );
}
