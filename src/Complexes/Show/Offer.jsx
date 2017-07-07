import React from 'react';
import { Row } from 'react-flexbox-grid';
import styled from 'styled-components';

const Offer = styled.div`
  padding: 4rem 0 4rem 0;
  background-color: #f4f5f9;
`;

const Title = styled.div`
  font-family: 'Philosopher';
  font-size: 20px;
  font-weight: bold;
  color: #3e4247;
  margin: 0 0 1.5rem 0;
`;

const Property = styled.dl`
  margin: 0 0 1.5625rem 0;
`;

const PropertyName = styled.dt`
  color: #a9afb6;
  margin: 0 0 0.5rem 0;
`;

const PropertyValue = styled.dd`
  margin: 0;
  font-family: 'Fira Sans';
  color: #3e4247;
  line-height: 1.5625rem;
`;

const ButtonWrapper = styled.div`
  margin-top: 11px;
`;

const Button = styled.button`
  border-radius: 2px;
  border: 0px;
  cursor: pointer;
  background-color: #000;
  padding: 0.8125rem 1.875rem 0.8125rem 1.875rem;
  color: #fff;
  font-size: 1rem;
  line-height: 1rem;
  font-family: 'Fira Sans', sans-serif;
`;

export default props =>
  <Offer>
    <Title>
      {props.amount}-комнатные квартиры
    </Title>
    <Property>
      <PropertyName>Площадь</PropertyName>
      <PropertyValue>
        от {props.square.min} до {props.square.max} м²
      </PropertyValue>
    </Property>
    <Property>
      <PropertyName>Стоимость</PropertyName>
      <PropertyValue>
        от {props.price.min} до {props.price.max} млн руб
      </PropertyValue>
    </Property>
    <Row center="lg">
      <ButtonWrapper>
        <Button>Посмотреть предложения</Button>
      </ButtonWrapper>
    </Row>
  </Offer>;
