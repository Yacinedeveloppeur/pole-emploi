import React from "react";

//COMPOSANTS :
import RoundButton from "./roundButton";

//STYLES :
import { BodyContainer, BackgroundBtn } from "../../styles/bodyStyle";

//IMAGES
import espacePers from "../../images/bodyImg/espacePers.png";
import esImg from "../../images/bodyImg/es.png";

const Hero = () => {
  return (
    <BodyContainer>
      <h1>1 000 000 offres d'emploi disponibles</h1>
      <div className="inputAndSearchContainer">
        <div>
          <input
            className="input1"
            type="text"
            placeholder="Métier, compétence"
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
      <BackgroundBtn>
        <RoundButton
          btnDescription={<i className="fas fa-sync"></i>}
          btnSubTitle="M'actualiser"
          btnSubTitle2="28.08.2021 > 15.09.2021"
        />
        <RoundButton
          btnDescription={
            <img src={espacePers} alt="espace personnel" width="55px" />
          }
          btnSubTitle="Gérer mon dossier,"
          btnSubTitle2="Publier mon CV"
        />
        <RoundButton
          btnDescription={<i className="fas fa-pen-nib"></i>}
          btnSubTitle="M'inscrire, me réinscrire"
          btnSubTitle2="(demandeur d'emploi)"
          hideBtn="hideBtn"
        />
        <RoundButton
          btnDescription={<i className="far fa-file-alt"></i>}
          btnSubTitle="Allocations et aides"
          hideBtn="hideBtn"
        />
        <RoundButton
          btnDescription={<i className="fas fa-book"></i>}
          btnSubTitle="Trouver ma"
          btnSubTitle2="formation"
          hideBtn="hideBtn"
        />
        <RoundButton
          btnDescription={
            <img src={esImg} alt="espace personnel" width="50px" />
          }
          btnSubTitle="Emploi Store"
          hideBtnEmp="hideBtn"
        />
        <RoundButton
          btnDescription={<i className="fas fa-ellipsis-h"></i>}
          btnSubTitle="Plus de services"
          hideBtnServ="hideBtn"
        />
      </BackgroundBtn>
    </BodyContainer>
  );
};

export default Hero;
