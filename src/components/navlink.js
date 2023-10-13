import React from "react";
import { NavLink } from "react-router-dom";
import { UINavLink } from "../styles/styles";

export const NavigationLink = ({ children, path, className }) => {
  return (
    <UINavLink className={className ? className : ""}>
      <NavLink
        to={`/${path}`}
        className={({ isActive }) => {
          return `navLink ${isActive ? " ActiveNavLink " : ""}`;
        }}
      >
        {children ? children : path.toUpperCase()}
      </NavLink>
    </UINavLink>
  );
};
