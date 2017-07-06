import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';

export default () =>
  <section className="complex-header">
    <Grid>
      <Row between="lg">
        <Col lg>
          <h1 className="complex-name">Жилой комплекс «Полянка/44»</h1>
          <p className="complex-address">
            Район Якиманка, улица Большая Полянка, дом 44 • 119180
          </p>
        </Col>
        <div className="complex-add-to-favorite-wrapper">
          <button className="complex-add-to-favorite">В избранное</button>
        </div>
      </Row>
    </Grid>
  </section>;
