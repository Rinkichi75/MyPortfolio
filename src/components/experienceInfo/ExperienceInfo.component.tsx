import React, { FunctionComponent } from "react";
import "./ExperienceInfo.style.scss";

interface ExperienceProps {
  date: string;
  name: string;
  poste: string;
  describe: string;
  img: string;
}

export const ExperienceInfo: FunctionComponent<ExperienceProps> = ({
  date,
  name,
  poste,
  describe,
  img,
}) => {
  return (
    <>
      <div className="experience-info">
        <div className="experience-date">{date}</div>
        <div className="fade">
          <img
            className="assosLogo"
            src={img}
            height={150}
            width={150}
            alt="association logo"
          />
          <span className="experience-name">{name}</span>
        </div>
        <div className="experience-poste">{poste}</div>
        <div className="experience-describe">{describe}</div>
      </div>
    </>
  );
};
