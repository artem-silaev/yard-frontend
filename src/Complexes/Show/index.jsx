import React from 'react';
import { Helmet } from 'react-helmet';
import BodyClassName from 'react-body-classname';
import { Grid } from 'react-flexbox-grid';

import MainTitle from './MainTitle';
import Carousel from './Carousel';
import MainInformation from './MainInformation';
import Characteristics from './Characteristics';
import Description from './Description';
import Infrastructure from './Infrastructure';
import Offers from './Offers';
import District from './District';
import Location from './Location';

export default () =>
  (<div>
    <Helmet>
      <title>Compass - ЖК Полянка/44</title>
    </Helmet>
    <BodyClassName className="complex-page">
      <div>
        <MainTitle />
        <Carousel />
        <Grid>
          <MainInformation />
          <Characteristics />
          <Description />
          <Infrastructure />
        </Grid>
        <Offers />
        <District />
        <Location />
      </div>
    </BodyClassName>
  </div>);
