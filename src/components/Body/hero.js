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
            type="text"
            placeholder="Métier, compétence, mot-clé, n°d'offre"
          ></input>
          <input type="text" placeholder="Lieu de travail"></input>
          <button>Search</button>
        </div>
        <p>Inclure les offres de nos partenaires | EN savoir plus</p>
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
