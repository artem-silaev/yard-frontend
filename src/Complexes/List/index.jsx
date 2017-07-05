import React from 'react';
import { Helmet } from 'react-helmet';
import { Grid } from 'react-flexbox-grid';

import Logo from "./Logo";
import Discover from "./Discover";
import Card from "./Card";

export default () => (
  <div>
    <Helmet>
      <title>Complexes</title>
    </Helmet>
    <Logo />
    <main className="content">
      <Grid>
        <Discover />
          <div className="cards">
            <Card
              url="#"
              location={"South Beach, San Francisco"}
              address={"764 Metropolitan Avenue"}
              description={"The Lewis Steel Building is a masterful industrial conversion located in the heart of Williamsburg. Located at 76 North 4th Street, the former 1930's steel factory has been transformed into 83 individually unique and luxury loft apartments."}
              image={"./images/bitmap1.png"}
            />
            <Card
              url="#"
              location={"South Beach, San Francisco"}
              address={"764 Metropolitan Avenue"}
              description={"The Lewis Steel Building is a masterful industrial conversion located in the heart of Williamsburg. Located at 76 North 4th Street, the former 1930's steel factory has been transformed into 83 individually unique and luxury loft apartments."}
              image={"./images/bitmap1.png"}
            />
            <Card
              url="#"
              location={"South Beach, San Francisco"}
              address={"764 Metropolitan Avenue"}
              description={"The Lewis Steel Building is a masterful industrial conversion located in the heart of Williamsburg. Located at 76 North 4th Street, the former 1930's steel factory has been transformed into 83 individually unique and luxury loft apartments."}
              image={"./images/bitmap1.png"}
            />
          </div>
      </Grid>
    </main>
  </div>
);
