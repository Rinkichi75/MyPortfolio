import React, { FunctionComponent } from "react";
import "./FormationInfo.style.scss";

interface FormationProps {
  date: string;
  school: string;
  name: string;
  describe: string;
}

export const FormationInfo: FunctionComponent<FormationProps> = ({
  date,
  school,
  name,
  describe,
}) => {
  return (
    <>
      <div className="formation-date">{date}</div>
      <div className="formation-school">{school}</div>
      <div className="formation-name">{name}</div>
      <div className="formation-describe">{describe}</div>
    </>
  );
};
