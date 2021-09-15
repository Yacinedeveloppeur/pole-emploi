import React from "react";
import Card from "./card";
import cards from "../../data/cards";

//STYLES :
import { MainContainer } from "../../styles/bodyStyle";

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
    <MainContainer>
      <div>
        <div className="titleAndInput">
          <h1>Acutalités de l'emploi</h1>
          <div className="inputAndSearchContainer">
            <input
              className="input1"
              type="text"
              placeholder="Ex: actualisation, aide à l'embauche..."
            ></input>
            <button className="searchBtn">
              <i className="fas fa-search"></i>
            </button>
          </div>
        </div>
        <div>
          <div className="bigCard">
            <div className="firstBigCard">
              <img src={accueilImg} alt="accueil" />
              <div>
                <h2>Pôle emploi face à la crise sanitaire covid-19</h2>
                <p>FOIRE AUX QUESTIONS</p>
                <button>EN SAVOIR PLUS</button>
              </div>
            </div>
            <div className="secondBigCard">
              <img src={mapImg} alt="carte" />
              <div>
                <h2>En direct des régions !</h2>
                <p>
                  Des actualités, des événements, des opportunités d'emploi et
                  de formation près de chez vous
                </p>
                <button>L'ACTU EN REGION</button>
              </div>
            </div>
          </div>
          <button>PLUS D'ACTUALITES</button>
        </div>
      </div>
      {displayCards}
    </MainContainer>
  );
};

export default Main;
