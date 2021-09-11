import React from "react";
import { Fragment } from "react/cjs/react.production.min";
import Card from "./card";
import cards from "../../data/cards";

//IMAGES :

import accueilImg from "../../images/bodyImg/accueil.jpg";
import mapImg from "../../images/bodyImg/map.jpg";

const displayCards = cards.map(function (card) {
  return (
    <Card
      key={card.id}
      title={card.title}
      description={card.description}
      image={card.image}
    ></Card>
  );
});

const Main = () => {
  return (
    <Fragment>
      <div>
        <h1>Acutalités de l'emploi</h1>
        <input
          type="text"
          placeholder="Ex: actualisation, aide à l'embauche..."
        ></input>
        <button>Search</button>
      </div>
      <div>
        <div>
          <img src={accueilImg} alt="accueil" />
          <div>
            <h2>Pôle emploi face à la crise sanitaire covid-19</h2>
            <p>FOIRE AUX QUESTIONS</p>
            <button>EN SAVOIR PLUS</button>
          </div>
          <div>
            <img src={mapImg} alt="carte" />
            <h2>En direct des régions !</h2>
            <p>
              Des actualités, des événements, des opportunités d'emploi et de
              formation près de chez vous
            </p>
            <button>L'ACTU EN REGION</button>
          </div>
        </div>
        <button>PLUS D'ACTUALITES</button>
      </div>
      {displayCards}
    </Fragment>
  );
};

export default Main;
