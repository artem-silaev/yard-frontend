// @flow

import React from 'react';
import { Row, Col } from 'react-flexbox-grid';
import styled from 'styled-components';

const Description = styled.div`
  margin-top: 3rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid #e0e0e1;
`;

const Title = styled.h2`
  margin: 0;
  font-size: 1.5rem;
  font-weight: bold;
  line-height: 1.6875rem;
  font-family: 'Philosopher';
  color: #3e4247;
`;

const Text = styled.p`
  font-size: 1rem;
  line-height: 1.5625rem;
  color: #3e4247;
  margin: 0;
`;

type Props = {
  fullDescription: string,
};

export default (props: Props) =>
  (<Description>
    <Row>
      <Col lg={2}>
        <Title>Описание</Title>
      </Col>
      <Col lg={10}>
        <Text>{props.fullDescription}</Text>
      </Col>
    </Row>
  </Description>);
