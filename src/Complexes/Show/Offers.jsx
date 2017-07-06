import React from 'react';
import { Grid, Col, Row } from 'react-flexbox-grid';

import Offer from './Offer';

export default props =>
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
  </section>;
