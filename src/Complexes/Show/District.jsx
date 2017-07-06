import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';

export default () =>
  <section className="complex-district-block">
    <Grid>
      <Row middle="lg" between="lg">
        <Col lg={6}>
          <h3 className="complex-district-heading">Якиманка</h3>
          <p className="complex-district-description">
            Исторический центр Москвы в двух <br />километрах от Кремля
          </p>
          <a href="#" className="complex-district-link">
            Гид по Якиманке >
          </a>
        </Col>
        <Col lg={6}>
          <img
            className="complex-district-photo"
            src={process.env.PUBLIC_URL + '/images/polyanka-photo.jpg'}
          />
        </Col>
      </Row>
    </Grid>
  </section>;
