import React from 'react';
import { Row, Col } from 'react-flexbox-grid';

export default () =>
  <Row center="lg">
    <Col lg={8}>
      <h2 className="discover-title">Discover Our New Developments</h2>
      <p className="discover-text">
        Compass brings a modern approach to new development marketing and sales.
        From boutique rental conversions to luxurious ground-up condominiums,
        browse our portfolio of current offerings.
      </p>
      <button className="discover-button">Contact The Team</button>
    </Col>
  </Row>;
