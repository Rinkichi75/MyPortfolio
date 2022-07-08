import React, { FunctionComponent } from "react";

import lanota from "./../../assets/lanota-gif.gif";
import mithu from "./../../assets/mithu secouriste.jpg";
import "./Activities.style.scss";
import "./../../animations/animations.scss";

export const Activities: FunctionComponent = () => {
  return (
    <div className="activity">
      <h1 className="activity-title">Activité et Passion</h1>
      <hr />
      <div className="activity-container">
        <div className="activity-secourisme">
          <h2 className="sub-activity-title">Secourisme</h2>
          <img
            src={mithu}
            className="fade"
            height={328}
            width={328}
            alt="secourisme"
          />
          <p className="secourisme-description">
            Equipier-Secouriste pour l'association SEC'UTT.
            <br />
            Participation à plusieurs dispositives de poste de secours dans des
            motocross, ou match de foot.
            <br />
            Participation en tant que préleveur dans des dispositives de
            dépistage à Orly.
            <br />
            Participation à des Gardes SAMU avec le SAMU 94.
          </p>
        </div>
        <div className="activity-violon">
          <h2 className="sub-activity-title">Violoniste</h2>
          <p className="violon-description">
            Orientation sur le style musical oriental:
            <br />
            Carnatic Music.
          </p>
        </div>

        <div className="activity-games">
          <h2 className="sub-activity-title">Jeux</h2>
          <img
            src={lanota}
            className="fade"
            alt="lanota"
            height={328}
            width={584}
          />
        </div>
      </div>
      <div className="activity-japon">
        <h2 className="sub-activity-title">Culture Japonnaise</h2>
      </div>
    </div>
  );
};
