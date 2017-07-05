import React from "react";
import { Row, Col } from 'react-flexbox-grid';

export default () => (
<div className="complex-infrastructure">
  <h2 className="complex-infrastructure-title">Инфраструктура</h2>
  <Row>
    <Col lg={2}>
      <p className="complex-infrastructure-text">Бассейн</p>
    </Col>
    <Col lg={2}>
      <p className="complex-infrastructure-text">Детский сад</p>
    </Col>
    <Col lg={2}>
      <p className="complex-infrastructure-text">Частная школа</p>
    </Col>
    <Col lg={2}>
      <p className="complex-infrastructure-text">Бассейн</p>
    </Col>
    <Col lg={2}>
      <p className="complex-infrastructure-text">Детский сад</p>
    </Col>
    <Col lg={2}>
      <p className="complex-infrastructure-text">Частная школа</p>
    </Col>
  </Row>
  <Row>
    <Col lg={2}>
      <p className="complex-infrastructure-text">Частная школа</p>
    </Col>
    <Col lg={2}>
      <p className="complex-infrastructure-text">Частная школа</p>
    </Col>
    <Col lg={2}>
      <p className="complex-infrastructure-text">Частная школа</p>
    </Col>
  </Row>
</div>
);
