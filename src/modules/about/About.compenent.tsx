import { FunctionComponent } from "react";
import xiao from "./../../assets/xiao.jpg";
import "./About.style.scss";

export const About: FunctionComponent = () => {
  return (
    <div className="about">
      <h1 className="about-title"> À Propos</h1>
      <hr />
      <div className="about-container">
        <img className="about-picture" src={xiao} alt="Profile" />
        <div className="about-name">Mithulan VANNIYASINGAM</div>
        <div className="about-description">
          Etudiant à Université Technologique de Troyes majeur en Informatique
          et Systèmes d'Informations. Actuellement en recherche de stage d'une
          durée d'au moins 4 mois à partir du 26 avril 2021
        </div>
      </div>
    </div>
  );
};
