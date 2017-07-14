import React from 'react';
import { Grid, Col, Row } from 'react-flexbox-grid';
import styled from 'styled-components';

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

export default props =>
  (<Offers>
    <Grid>
      <Title>
        Предложения в ЖК «{props.name}»
      </Title>
      <Row>
        <Col lg={4}>
          <Offer
            amount={1}
            square={{ min: 59, max: 120 }}
            price={{ min: 20.3, max: 84.2 }}
          />
        </Col>
        <Col lg={4}>
          <Offer
            amount={2}
            square={{ min: 20.3, max: 84.2 }}
            price={{ min: 20.3, max: 84.2 }}
          />
        </Col>
        <Col lg={4}>
          <Offer
            amount={1}
            square={{ min: 59, max: 120 }}
            price={{ min: 20.3, max: 84.2 }}
          />
        </Col>
      </Row>
    </Grid>
  </Offers>);
