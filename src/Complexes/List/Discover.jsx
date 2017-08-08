// @flow

import React from 'react';
import { Row, Col } from 'react-flexbox-grid';
import styled from 'styled-components';
import media from '../../media';

const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  margin-top: 4rem;
  margin-bottom: 0.5rem;
`;

const Text = styled.p`
  line-height: 1.5rem;
`;

const Button = styled.button`
  background-color: #000;
  color: #fff;
  font-size: 1rem;
  padding: 0.75rem 2rem;
  border: none;
  cursor: pointer;
`;

export default () =>
  (<Row center="xs">
    <Col lg={8}>
      <Title>Discover Our New Developments</Title>
      <Text>
        Compass brings a modern approach to new development marketing and sales.
        From boutique rental conversions to luxurious ground-up condominiums,
        browse our portfolio of current offerings.
      </Text>
      <Button>Contact The Team</Button>
    </Col>
  </Row>);
