import React from "react";
import "./styles.scss";
import logoBmind from "../../images/logo-bmind.png";

function Footer() {
  return (
    <footer className="Footer">
      <p className="Footer__copyright">Created by Adalabers © 2019</p>
      <a href="https://www.bmind.es/es/" target="_blank" rel="noopener noreferrer">
        <img src={logoBmind} alt="logo Bmind" className="Footer__image" />
      </a>
    </footer>
  );
}

export default Footer;
