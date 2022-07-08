import { FunctionComponent } from "react";
import { FormationInfo } from "../../components/formationInfo";

import "./Formation.style.scss";

export const Formation: FunctionComponent = () => {
  return (
    <div id="formation" className="formation">
      <div className="formation-container">
        <h1 className="formation-title">Formation</h1>
        <hr />
        <div className="formation-info">
          <FormationInfo
            date="2015-2017"
            school="LYCEE DIDEROT, PARIS XIX"
            name="BAC STI2D mention Bien"
            describe="Specialité : Système d'Information et Numérique."
          />
          <FormationInfo
            date="2017-2019"
            school="LYCEE RASPAIL, Paris XIV"
            name="Prépa TSI"
            describe="Mathématique, Physique, Python, Science Ingénieur."
          />
          <FormationInfo
            date="2019-2021"
            school="UNIVERSITE TECHNOLOGOLIQUE DE TROYES"
            name="Information et Système d'Information"
            describe="Java, JavaScript, UI/UX Design,Base de Données, Méthodologie Agile, Management de projet. "
          />
        </div>
      </div>
    </div>
  );
};
