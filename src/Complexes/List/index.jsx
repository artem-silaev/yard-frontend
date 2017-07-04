import React from 'react';
import { Helmet } from 'react-helmet';

import Logo from "./Logo";
import Discover from "./Discover";
import Cards from "./Cards.jsx";

export default () => (
  <div>
    <Helmet>
      <title>Complexes</title>
    </Helmet>
    <Logo />
    <main className="content">
      <div className="container">
        <Discover />
        <Cards />
      </div>
    </main>
  </div>
);
