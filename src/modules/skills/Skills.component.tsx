import React, { FunctionComponent } from "react";
import french from "../../assets/french.png";
import british from "../../assets/british.png";
import spanish from "../../assets/spanish.png";
import "./Skills.style.scss";

export const Skills: FunctionComponent = () => {
  return (
    <div id="skills" className="skills">
      <h1 className="skill-title">Compétences </h1>
      <hr />

      <h2 className="sub-skill-title">Programmation :</h2>
      <div className="skill-prog">
        <div className="skill-prog-title">Langages de Programmation</div>
        <p className="skill-prog-content">Java , Python</p>
        <div className="skill-prog-title">Web Development</div>
        <p className="skill-prog-content">
          HTML/CSS, PHP, Javascript, Node.js, React, SQL
        </p>
      </div>

      <h2 className="sub-skill-title">Graphisme/Design :</h2>
      <div className="skill-prog">
        <div className="skill-prog-title">Suite Adobe</div>
        <p className="skill-prog-content">
          Adobe Photoshop , Adobe Illustrator, Adobe XD
        </p>
        <div className="skill-prog-title">Web Design</div>
        <p className="skill-prog-content">Figma</p>
      </div>

      <h2 className="sub-skill-title">Langues :</h2>

      <div className="skill-lang">
        <p className="skill-lang-name">Tamil : Couramment</p>
        <img className="skill-lang-flag" src={british} alt="English" />
        <span className="skill-lang-name"> Anglais : Avancé (LinguaSkill)</span>
        <img className="skill-lang-flag" src={spanish} alt="Spanish" />
        <p className="skill-lang-name"> Espagnol : Pré-Intermédiare</p>
      </div>
    </div>
  );
};
