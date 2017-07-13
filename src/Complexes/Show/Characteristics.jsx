import React from 'react';
import { Row, Col } from 'react-flexbox-grid';
import styled from 'styled-components';

const Characteristics = styled.div`
  margin-top: 2rem;
`;

const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  line-height: 1.6875rem;
  font-family: 'Philosopher';
  color: #3e4247;
  margin-top: 0;
  color: #3e4247;
  margin-bottom: 1.125rem;
`;

const Block = styled.dl`
  display: flex;
  margin: 0.5rem 0 0 0;
  &:first-child {
    margin-top: 0px;
  }
`;

const Name = styled.dt`
  font-size: 1rem;
  color: #a9afb6;
  width: 50%;
  line-height: 1.5625rem;
`;

const Value = styled.dd`
  font-size: 1rem;
  font-weight: 500;
  color: #3e4247;
  width: 50%;
  margin: 0;
  line-height: 1.5625rem;
`;

export default () =>
  (<Characteristics>
    <Title>Характеристики</Title>
    <Row>
      <Col lg={4}>
        <Block>
          <Name>Количество квартир:</Name>
          <Value>1 503</Value>
        </Block>
        <Block>
          <Name>Статус:</Name>
          <Value>Квартиры</Value>
        </Block>
        <Block>
          <Name>Цены:</Name>
          <Value>от 5.3 до 143.5 млн</Value>
        </Block>
      </Col>
      <Col lg={4}>
        <Block>
          <Name>Количество квартир:</Name>
          <Value>1 503</Value>
        </Block>
        <Block>
          <Name>Количество квартир:</Name>
          <Value>1 503</Value>
        </Block>
        <Block>
          <Name>Количество квартир:</Name>
          <Value>1 503</Value>
        </Block>
      </Col>
      <Col lg={4}>
        <Block>
          <Name>Количество квартир:</Name>
          <Value>1 503</Value>
        </Block>
        <Block>
          <Name>Количество квартир:</Name>
          <Value>1 503</Value>
        </Block>
        <Block>
          <Name>Количество квартир:</Name>
          <Value>1 503</Value>
        </Block>
      </Col>
    </Row>
  </Characteristics>);
