// @flow

import React from 'react';
import { Row } from 'react-flexbox-grid';
import styled from 'styled-components';
import type { OfferType } from '../types';

const Offer = styled.div`
  background-color: #fff;
  padding: 1.5rem 2rem;
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

const Name = styled.dt`
  color: #a9afb6;
  margin: 0 0 0.5rem 0;
`;

const Value = styled.dd`
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

type Props = {
  offer: OfferType,
};

export default (props: Props) =>
  (<Offer>
    <Title>{props.offer.amount}-комнатные квартиры</Title>
    <Property>
      <Name>Площадь</Name>
      <Value>
        от {props.offer.square.min} до {props.offer.square.max} м²
      </Value>
    </Property>
    <Property>
      <Name>Стоимость</Name>
      <Value>
        от {props.offer.price.min} до {props.offer.price.max} млн руб
      </Value>
    </Property>
    <Row center="lg">
      <ButtonWrapper>
        <Button>Посмотреть предложения</Button>
      </ButtonWrapper>
    </Row>
  </Offer>);
