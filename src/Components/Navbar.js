import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav>
      <Link to="/">
        <h1>User Managment System</h1>
      </Link>

      <ul>
        <Link to="/">Home</Link>
        <Link to="/contacts">contacts</Link>
        <Link to="/setting">setting</Link>
      </ul>
    </nav>
  );
};

export default Navbar;
