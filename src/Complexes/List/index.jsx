import React from 'react';
import { Helmet } from 'react-helmet';
import { Grid } from 'react-flexbox-grid';
import styled from 'styled-components';
import Logo from './Logo';
import Discover from './Discover';
import Card from './Card';

const Content = styled.main`
  display: block;
`;

const Cards = styled.div`
  margin-top: 4rem;
`;

export default () =>
  <div>
    <Helmet>
      <title>Complexes</title>
    </Helmet>
    <Logo />
    <Content>
      <Grid>
        <Discover />
        <Cards>
          <Card
            url="/complex/1"
            location="South Beach, San Francisco"
            address="764 Metropolitan Avenue"
            description="The Lewis Steel Building is a masterful industrial conversion located in the heart of Williamsburg. Located at 76 North 4th Street, the former 1930's steel factory has been transformed into 83 individually unique and luxury loft apartments."
            image="./images/bitmap1.png"
          />
          <Card
            url="/complex/2"
            location="South Beach, San Francisco"
            address="764 Metropolitan Avenue"
            description="The Lewis Steel Building is a masterful industrial conversion located in the heart of Williamsburg. Located at 76 North 4th Street, the former 1930's steel factory has been transformed into 83 individually unique and luxury loft apartments."
            image="./images/bitmap1.png"
          />
          <Card
            url="/complex/3"
            location="South Beach, San Francisco"
            address="764 Metropolitan Avenue"
            description="The Lewis Steel Building is a masterful industrial conversion located in the heart of Williamsburg. Located at 76 North 4th Street, the former 1930's steel factory has been transformed into 83 individually unique and luxury loft apartments."
            image="./images/bitmap1.png"
          />
      </Cards>
      </Grid>
    </Content>
  </div>;
