import React from "react";
import compassLogo from "./images/compass-logo.svg";
import './style/style.css';
import './style/complex.css';

export default () => (
  <header className="header-main">
  <div className="container">
    <img src={compassLogo}/>
    <nav className="menu">
      <a className="menu-item" href="#">Купить</a>
      <a className="menu-item" href="#">Снять</a>
      <a className="menu-item" href="#">Наши агенты</a>
    </nav>
  </div>
</header>
);
