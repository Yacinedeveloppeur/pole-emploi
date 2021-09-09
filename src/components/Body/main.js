import React from "react";
import { Fragment } from "react/cjs/react.production.min";
import Card from "./card";

//IMAGES :

import accueilImg from "../../images/accueil.jpg";
import mapImg from "../../images/map.jpg";
import jeuneMentor from "../../images/1jeune1mentor.jpg";
import train from "../../images/train.jpg";
import worker from "../../images/worker.jpg";
import smartPhone from "../../images/smartPhone.jpg";
import zen from "../../images/zen.jpg";
import findJob from "../../images/findJob.jpg";

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
        <Card
          title="1 Jeune, 1 mentor: Elargissez vos perspectives d'avenir!"
          description="Objectif : accompagner 100 000 jeunes, en 2021, en les aidant dans leur projet professionnel."
          image={jeuneMentor}
        />
        <Card
          title=" Un train pour le conseil, l’orientation et l’embauche des demandeurs d’emploi "
          description="Lancé à grande vitesse dans 12 villes de France, le Train de la Relance offre, du 6 septembre au 2 octobre, des espaces de rencontre pour les candidats et les entreprises."
          image={train}
        />
        <Card
          title="Application mobile Pôle emploi Mes Offres"
          description="L'application Mes Offres permet de trouver rapidement des offres parmi les milliers issues de Pôle emploi ou d'un de ses nombreux partenaires et de postuler facilement."
          image={smartPhone}
        />
        <Card
          title=" Journées Nationales d’Action contre l’Illettrisme  du 6 au 12 septembre "
          description="Pôle emploi agit au quotidien pour offrir des solutions concrètes aux publics en difficulté avec la lecture, l’écriture et les usages numériques."
          image={findJob}
        />
        <Card
          title="Bien dans mon quotidien"
          description="Vie pratique, santé, travail, sport, culture,… autant de sujets du quotidien à retrouver avec pour objectifs : se faciliter la vie et rendre le quotidien de la recherche d’emploi plus agréable."
          image={zen}
        />
        <Card
          title=" Secteur de la logistique : des entreprises recrutent sur tout le territoire ! "
          description="Découvrez des acteurs clés de la logistique qui s’activent chaque jour au service de l’entreposage et de la distribution de marchandises."
          image={worker}
        />
        <button>PLUS D'ACTUALITES</button>
      </div>
    </Fragment>
  );
};

export default Main;
