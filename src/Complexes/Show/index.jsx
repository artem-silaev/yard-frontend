import React from 'react';
import { Helmet } from 'react-helmet';
import BodyClassName from 'react-body-classname';
import { Grid, Row, Col } from 'react-flexbox-grid';

import MainTitle from './MainTitle';
import Carousel from './Carousel';
import Properties from './Properties';
import Characteristics from './Characteristics';
import Description from './Description';
import Infrastructure from './Infrastructure';
import Offer from './Offer';
import District from './District';
import Location from './Location';

export default () =>
  <div>
    <Helmet>
      <title>Compass - ЖК Полянка/44</title>
    </Helmet>
    <BodyClassName className="complex-page">
      <div>
        <MainTitle />
        <Carousel />
        <Grid>
          <Properties />
          <Characteristics />
          <Description />
          <Infrastructure />
        </Grid>
        <section className="complex-offers">
          <Grid>
            <h2 className="complex-offers-title">
              Предложения в ЖК «Полянка/44»
            </h2>
            <Row>
              <Col lg={4}>
                <Offer
                  amount={1}
                  square={{ min: 59, max: 120 }}
                  price={{ min: 20.3, max: 84.2 }}
                />
              </Col>
              <Col lg={4}>
                <Offer
                  amount={2}
                  square={{ min: 20.3, max: 84.2 }}
                  price={{ min: 20.3, max: 84.2 }}
                />
              </Col>
              <Col lg={4}>
                <Offer
                  amount={1}
                  square={{ min: 59, max: 120 }}
                  price={{ min: 20.3, max: 84.2 }}
                />
              </Col>
            </Row>
          </Grid>
        </section>
        <District />
        <Location />
      </div>
    </BodyClassName>
  </div>;
