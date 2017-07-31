// @flow

import React from 'react';
import { Grid, Col, Row } from 'react-flexbox-grid';
import styled from 'styled-components';
import type { OfferType } from '../types';

import Offer from './Offer';

const Offers = styled.section`
  padding: 4rem 0 4rem 0;
  background-color: #f4f5f9;
`;

const Title = styled.h2`
  margin-bottom: 1.5rem;
  margin-top: 0;
  font-family: 'Philosopher';
  font-size: 1.5rem;
  font-weight: bold;
  color: #3e4247;
  text-align: center;
`;

type Props = {
  name: string,
  offers: Array<OfferType>,
};

export default (props: Props) =>
  (<Offers>
    <Grid>
      <Title>
        Предложения в ЖК «{props.name}»
      </Title>
      <Row>
        {props.offers.map((offer: OfferType) =>
          (<Col lg={4}>
            <Offer offer={offer} />
          </Col>),
        )}
      </Row>
    </Grid>
  </Offers>);
