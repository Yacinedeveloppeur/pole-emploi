import React from "react";

//COMPOSANTS :
import RoundButton from "./roundButton";

//STYLES :
import { BodyContainer } from "../../styles/bodyStyle";

const Hero = () => {
  return (
    <BodyContainer>
      <h1>1 000 000 offres d'emploi disponibles</h1>
      <div>
        <div>
          <input
            className="input1"
            type="text"
            placeholder="Métier, compétence, mot-clé, n°d'offre"
          ></input>
          <input
            className="input2"
            type="text"
            placeholder="Lieu de travail"
          ></input>
          <button className="searchBtn">
            <i className="fas fa-search"></i>
          </button>
        </div>
        <div className="inputCheckBoxContainer">
          <input type="checkbox" className="inputCheckBox" />
          <label htmlFor="menu_checkbox">
            Inclure les offres de nos partenaires | EN savoir plus
          </label>
        </div>
      </div>
      <div>
        <RoundButton />
        <RoundButton />
        <RoundButton />
        <RoundButton />
        <RoundButton />
        <RoundButton />
        <RoundButton />
      </div>
    </BodyContainer>
  );
};

export default Hero;
