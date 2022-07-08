import { FunctionComponent } from "react";
import { ExperienceInfo } from "../../components";
import "./Experience.style.scss";
import ffss from "./../../assets/1309px-Ffss.svg.png";
import uttArena from "./../../assets/utt arena.png";
import ung from "./../../assets/ung.jpg";

export const Experience: FunctionComponent = () => {
  return (
    <div id="experience" className="experience">
      <h1 className="experience-title">Experience</h1>
      <hr />

      <div className="experience-container">
        <ExperienceInfo
          date="Fevrier 2020 - en Cours"
          name="Fédération Francaise de Sauvetage et de Secourisme"
          poste="Equipier Secouriste"
          describe="PSE 1 et PSE 2"
          img={ffss}
        />
        <ExperienceInfo
          date="Septembre 2019 - en Cours"
          name="UTT ARENA"
          poste="Graphiste"
          describe="Réalisation d'affiches et postes pour les réseaux sociaux"
          img={uttArena}
        />
        <ExperienceInfo
          date="Septembre 2020 - en Cours"
          name="UTT Net Group"
          poste="Responsable Designer, Développeur Front"
          describe="Gérer une équipe, faire un suivi "
          img={ung}
        />
      </div>
    </div>
  );
};
