import React from "react";
import { NavContainer } from "../../styles/headerStyle/navStyle";

const Nav = () => {
  return (
    <NavContainer>
      <input type="checkbox" id="menu_checkbox" />

      <label htmlFor="menu_checkbox">
        <div></div>
        <div></div>
        <div></div>
      </label>
      <p>MENU</p>
    </NavContainer>
  );
};

export default Nav;
