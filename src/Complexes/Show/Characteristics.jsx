import React from 'react';
import { Row, Col } from 'react-flexbox-grid';

export default () =>
  <div className="complex-characteristics">
    <h2 className="complex-characteristics-title">Характеристики</h2>
    <Row>
      <Col lg={4}>
        <dl className="complex-characteristic-block">
          <dt className="complex-characteristic-name">Количество квартир:</dt>
          <dd className="complex-characteristic-value">1 503</dd>
        </dl>
        <dl className="complex-characteristic-block">
          <dt className="complex-characteristic-name">Статус:</dt>
          <dd className="complex-characteristic-value">Квартиры</dd>
        </dl>
        <dl className="complex-characteristic-block">
          <dt className="complex-characteristic-name">Цены:</dt>
          <dd className="complex-characteristic-value">от 5.3 до 143.5 млн</dd>
        </dl>
      </Col>
      <Col lg={4}>
        <dl className="complex-characteristic-block">
          <dt className="complex-characteristic-name">Количество квартир:</dt>
          <dd className="complex-characteristic-value">1 503</dd>
        </dl>
        <dl className="complex-characteristic-block">
          <dt className="complex-characteristic-name">Количество квартир:</dt>
          <dd className="complex-characteristic-value">1 503</dd>
        </dl>
        <dl className="complex-characteristic-block">
          <dt className="complex-characteristic-name">Количество квартир:</dt>
          <dd className="complex-characteristic-value">1 503</dd>
        </dl>
      </Col>
      <Col lg={4}>
        <dl className="complex-characteristic-block">
          <dt className="complex-characteristic-name">Количество квартир:</dt>
          <dd className="complex-characteristic-value">1 503</dd>
        </dl>
        <dl className="complex-characteristic-block">
          <dt className="complex-characteristic-name">Количество квартир:</dt>
          <dd className="complex-characteristic-value">1 503</dd>
        </dl>
        <dl className="complex-characteristic-block">
          <dt className="complex-characteristic-name">Количество квартир:</dt>
          <dd className="complex-characteristic-value">1 503</dd>
        </dl>
      </Col>
    </Row>
  </div>;
