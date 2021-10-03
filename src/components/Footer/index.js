import React from "react";

import { FooterContainer } from "../../styles/footerStyle";

const index = () => {
  return (
    <FooterContainer>
      <div>
        <div>
          <ul>
            <li>
              <p>AUTRES SITES POLE EMPLOI</p>
              <p className="footerBorder1"></p>
            </li>
            <li>
              <ul>
                <li>Institutionnel</li>
                <li>Pôle emploi événements</li>
                <li>Pôle emploi TV</li>
                <li>Pôle emploi spectacle</li>
                <li>Mobilité internationale</li>
                <li>Les métiers porteurs</li>
                <li>Emploi parlons-net</li>
                <li>Emploi Store</li>
                <li>Pôle emploi Salons en ligne</li>
              </ul>
            </li>
          </ul>
        </div>
        <div>
          <ul>
            <li>
              <p>SUR POLE-EMPLOI.FR</p>
              <p className="footerBorder2"></p>
            </li>
            <li>
              <ul>
                <li>Votre pôle emploi</li>
                <li>Foire aux questions</li>
                <li>Info trafic</li>
                <li>Contactez-nous</li>
                <li>Sites utiles</li>
                <li>Plan du site</li>
                <li>Informations légales</li>
                <li>Conditions générales d'utilisation</li>
                <li>Protections des données personnelles</li>
                <li>Cookies</li>
                <li>Accessibilité non conforme</li>
                <li>Algorithmes</li>
                <li>Nos partenaires</li>
              </ul>
            </li>
          </ul>
        </div>
        <div>
          <ul>
            <li>
              <p>CANDIDAT</p>
              <p className="footerBorder3"></p>
            </li>
            <li>
              <ul>
                <li>Mode d'emploi, le mag qui vous simplifie la vie</li>
                <li>Où envoyer mes bulletins de salaire</li>
                <li>Le calendrier des paiements</li>
                <li>Soyez vigilants !</li>
                <li>Votre projet professionnel</li>
                <li>Vos recherches</li>
                <li>Pôle emploi et vous</li>
                <li>En formation</li>
                <li>Découvrir le marché du travail</li>
                <li>Information marché du travail</li>
                <li>Annuaire des pages entreprises</li>
              </ul>
            </li>
          </ul>
        </div>

        <div>
          {" "}
          <ul>
            <li>
              <p>EMPLOYEUR</p>
              <p className="footerBorder4"></p>
            </li>

            <li>
              <ul>
                <li>Conseils pour recruter</li>
                <li>Conseils pour vos déclarations et cotisations</li>
                <li>
                  Sélectionnez et contactez des profils, créez vos abonnements
                </li>
                <li>Recherchez un profil</li>
                <li>Se procurer une attestation</li>
                <li>Déposer une offre d'emploi</li>
                <li>Particulier employeur</li>
                <li>Information marché du travail</li>
                <li>Annuaire des pages entreprises</li>
                <li>
                  Solution recrutement, le webzine du recrutement pour les
                  entreprises
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
      <div className="copyRightContainer">
        <button>
          <a href="#top">VERSION CONTRASTEE</a>
        </button>
        <p>COPYRIGHT 2021 © PÔLE EMPLOI</p>
      </div>
    </FooterContainer>
  );
};

export default index;
