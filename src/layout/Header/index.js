import React from "react";
import { NavLink } from "react-router-dom";
import { BackButton } from "../../components";

import "./style.css";
export const Header = () => {
  const checkActive = ({ isActive }) => (isActive ? "active" : undefined);
  return (
    <nav className="header">
      <ul className="navbar">
        <li>
          <NavLink className={checkActive} to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className={checkActive} to="/About">
            About
          </NavLink>
        </li>
        <li>
          <NavLink className={checkActive} to="/Leon">
            Leon
          </NavLink>
        </li>
        <li>
          <BackButton />
        </li>
      </ul>
    </nav>
  );
};
