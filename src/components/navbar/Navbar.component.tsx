import React, { FunctionComponent } from "react";
import { HashLink } from "react-router-hash-link";
import { useTranslation } from "react-i18next";
import logo from "../../assets/MV.png";
import "./Navbar.style.scss";
import { PATHS } from "../../modules/navigation/services";

const sideBarDatas = [
  {
    title: "À Propos De Moi",
    path: PATHS.ABOUT_PAGE.ROUTE,
  },

  {
    title: "Formations",
    path: PATHS.FORMATIONS_PAGE.ROUTE,
  },
  {
    title: "Compétences",
    path: PATHS.SKILLS_PAGE.ROUTE,
  },
  {
    title: "Expériences",
    path: PATHS.EXPERIENCES_PAGE.ROUTE,
  },
  {
    title: "Activités & Passions",
    path: PATHS.ACTIVITIES_PAGE.ROUTE,
  },
  {
    title: "Contact",
    path: PATHS.CONTACT_PAGE.ROUTE,
  },
];

export const Navbar: FunctionComponent = () => {
  const { t } = useTranslation();

  return (
    <div id="navbar">
      <HashLink to="/">
        <img
          className="logo"
          src={logo}
          alt="logo"
          height={150}
          width={330}
        ></img>
      </HashLink>

      <nav>
        {sideBarDatas.map(({ title, path }) => (
          <HashLink to={path} style={{ textDecoration: "none" }}>
            <div className={`nav-button`}>{title}</div>
          </HashLink>
        ))}
      </nav>
    </div>
  );
};
