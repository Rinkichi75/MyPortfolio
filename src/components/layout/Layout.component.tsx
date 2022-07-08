import React, { FunctionComponent } from "react";
import { Navbar } from "../navbar";
import "./Layout.style.scss";

export const Layout: FunctionComponent = ({ children }) => {
  return (
    <div className="layout">
      <div className="nav">
        <Navbar />
      </div>
      <div className="content">{children}</div>
    </div>
  );
};
