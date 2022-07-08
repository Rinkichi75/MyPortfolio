import React, { FunctionComponent } from "react";
import "./Contact.style.scss";

export const Contact: FunctionComponent = () => {
  return (
    <div className="contact">
      <h1 className="contact-title">Contact</h1>
      <hr />

      <div className="email">
        <h3>E-mail</h3>
        <a href="mailto:cocmithulan@gmail.com">cocmithulan@gmail.com</a>
      </div>
      <div className="telephone">
        <h3>Téléphone</h3>
        <p>06 51 82 99 93</p>
      </div>
      <div className="address">
        <h3>Adresse</h3>
        <p>Paris, France</p>
      </div>
      <div className="linkedIn">
        <h3>LinkedIn</h3>
      </div>
    </div>
  );
};
