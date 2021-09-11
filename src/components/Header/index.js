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
    <HeaderContainer>
      <div className="logoContainer">
        <img className="logoRepublique" src={republique} alt="république" />
        <img
          className="logoPoleEmploi"
          src={logoPoleEmploi}
          alt="pole emploi"
        />

        <Nav />
      </div>
      <Carousel />
      <div className="logoConnectionContainer">
        <img className="logoConnection" src={connection} alt="connection" />
        <span>CONNEXION</span>
      </div>
    </HeaderContainer>
  );
};

export default Header;
