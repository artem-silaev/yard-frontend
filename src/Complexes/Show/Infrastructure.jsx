import React from 'react';
import { Row, Col } from 'react-flexbox-grid';
import styled from 'styled-components';

const Infrastructure = styled.div`
  margin-top: 2rem;
  margin-bottom: 4rem;
`;

const Title = styled.h2`
  margin-top: 2rem;
  margin-bottom: 1rem;
  font-size: 1.5rem;
  font-weight: bold;
  line-height: 1.6875rem;
  font-family: 'Philosopher';
  color: #3e4247;
`;

const Text = styled.p`
  margin: 0;
  color: #3e4247;
  line-height: 1.5625rem;
`;

export default () =>
  <Infrastructure>
    <Title>Инфраструктура</Title>
    <Row>
      <Col lg={2}>
        <Text>Бассейн</Text>
      </Col>
      <Col lg={2}>
        <Text>Детский сад</Text>
      </Col>
      <Col lg={2}>
        <Text>Частная школа</Text>
      </Col>
      <Col lg={2}>
        <Text>Бассейн</Text>
      </Col>
      <Col lg={2}>
        <Text>Детский сад</Text>
      </Col>
      <Col lg={2}>
        <Text>Частная школа</Text>
      </Col>
    </Row>
    <Row>
      <Col lg={2}>
        <Text>Частная школа</Text>
      </Col>
      <Col lg={2}>
        <Text>Частная школа</Text>
      </Col>
      <Col lg={2}>
        <Text>Частная школа</Text>
      </Col>
    </Row>
  </Infrastructure>;
