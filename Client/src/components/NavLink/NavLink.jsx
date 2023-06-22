import React from "react";
import style from "./NavLink.module.css"
import { NavLink as NavLinkComp } from "react-router-dom";

export const NavLink = ({ to, children, ...props })=> {
  return (
    <>
      <NavLinkComp
        {...props}
        to={to}
        /*
        className={({ isActive }) => {
          isActive ? style.isActive : undefined;
        }}
        */
        children={children}
      ></NavLinkComp>
    </>
  );
};
