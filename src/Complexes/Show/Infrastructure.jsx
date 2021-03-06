// @flow

import React from 'react';
import { Row, Col } from 'react-flexbox-grid';
import styled from 'styled-components';
import type { AmenityType } from '../types';

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

type Props = { amenities: Array<AmenityType> };

export default (props: Props) => (
  <Infrastructure>
    <Title>Инфраструктура</Title>
    <Row>
      {props.amenities.map(amenity =>
        (<Col lg={2}>
          <Text>
            {amenity}
          </Text>
        </Col>),
      )}
    </Row>
  </Infrastructure>);
