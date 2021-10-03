import React, { useState } from "react";
import { NavContainer, NavList } from "../../styles/headerStyle/navStyle";

const Nav = (props) => {
  const [nav, setNav] = useState(true);
  const [margin, setMargin] = useState("-4000px");

  const openNav = () => {
    setNav(false);
    setMargin("335px");
  };
  const closeNav = () => {
    setNav(true);
    setMargin("-4000px");
  };

  function switchNav() {
    if (nav) {
      openNav();
    } else {
      closeNav();
    }
  }

  return (
    <>
      <div
        style={{
          position: "relative",
        }}
      >
        <NavContainer>
          <input type="checkbox" id="menu_checkbox" />

          <label htmlFor="menu_checkbox" onClick={() => switchNav()}>
            <div></div>
            <div></div>
            <div></div>
          </label>
          <p className={props.hideNav}>MENU</p>
        </NavContainer>
      </div>
      <NavList
        style={{
          marginTop: margin,
        }}
      >
        <ul style={{ listStyle: "none" }}>
          INFORMATIONS
          <li>
            <i class="fas fa-info-circle"></i> Conseils Candidat
          </li>
          <li>
            <i className="far fa-file-alt"></i> Actualités
          </li>
          <li>
            <i class="fas fa-map"></i> En région
          </li>
        </ul>
      </NavList>
    </>
  );
};

export default Nav;
