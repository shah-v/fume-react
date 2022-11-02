import React from "react";
import { NavLink } from "react-router-dom";
import "../../styles/navbar.css";

const NavBar = () => {
  return (
    <ul className="navMain">
      <li className="navTitle"> FUME </li>
      <li className="navLink">
        <NavLink
          to="/games"
          style={{ color: "black" }}
          activeStyle={{
            color: "#A19E9E",
          }}
        >
          Games
        </NavLink>
      </li>
      <li className="navLink">
        <NavLink
          to="/login"
          style={{ color: "black" }}
          activeStyle={{
            color: "#A19E9E",
          }}
        >
          Login
        </NavLink>
      </li>
      <li className="navLink">
        <NavLink
          to="/register"
          style={{ color: "black" }}
          activeStyle={{
            color: "#A19E9E",
          }}
        >
          Register
        </NavLink>
      </li>
    </ul>
  );
};

export default NavBar;
