import React from 'react';
import compassLogo from './images/compass-logo.svg';
import { Grid, Row } from 'react-flexbox-grid';
import './style/style.css';
import './style/complex.css';

export default () =>
  <header className="header-main">
    <Grid>
      <img src={compassLogo} />
      <nav className="menu">
        <a className="menu-item" href="#">
          Купить
        </a>
        <a className="menu-item" href="#">
          Снять
        </a>
        <a className="menu-item" href="#">
          Наши агенты
        </a>
      </nav>
    </Grid>
  </header>;
