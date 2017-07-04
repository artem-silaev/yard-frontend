import React from 'react';
import { Helmet } from 'react-helmet';
import BodyClassName from 'react-body-classname';

import MainTitle from './MainTitle';
import Carousel from './Carousel';
import Properties from './Properties';
import Characteristics from './Characteristics';
import Description from './Description';
import Infrastructure from './Infrastructure';
import Offers from './Offers';
import District from './District';
import Location from './Location';

export default () => {
  return (
  <div>
  <Helmet>
    <title>Compass - ЖК Полянка/44</title>
  </Helmet>
  <BodyClassName className="complex-page">
  <div>
    <MainTitle />
	<Carousel />
    <main className="container">
	  <Properties />
	  <Characteristics />
	  <Description />
	  <Infrastructure />
    </main>

	<Offers />
	<District />
    <Location />

	</div>
	</BodyClassName>
	</div>
  );
};
