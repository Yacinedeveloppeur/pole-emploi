import React from "react";

//IMAGES :
import logoPoleEmploi from "../../images/headerImg/logoPoleEmploi.svg";
import republique from "../../images/headerImg/Republique.png";
import connection from "../../images/headerImg/connection.png";

//COMPOSANTS :
import Nav from "./nav";
import Carousel from "./carousel";

//STYLES :
import { HeaderContainer } from "../../styles//headerStyle/headerStyle";

const Header = () => {
  return (
    <div>
      <HeaderContainer style={{ position: "relative" }}>
        <div className="logoContainer">
          <img className="logoRepublique" src={republique} alt="république" />
          <img
            className="logoPoleEmploi"
            src={logoPoleEmploi}
            alt="pole emploi"
          />

          <Nav hideNav="hideNav" />
        </div>
        <Carousel hideCarousel="hideCarousel" />

        <div className="logoConnectionContainer">
          <img className="logoConnection" src={connection} alt="connection" />
          <span className="hideConnexion">CONNEXION</span>
        </div>
      </HeaderContainer>
    </div>
  );
};

export default Header;
