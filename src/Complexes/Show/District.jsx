import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import styled from 'styled-components';

const District = styled.section`
  background-color: #3e4247;
  padding-top: 4rem;
  padding-bottom: 13.625rem;
`;

const Heading = styled.h3`
  margin: 0;
  font-family: 'Philosopher';
  font-size: 1.5rem;
  font-weight: bold;
  color: #a9afb6;
`;

const Description = styled.p`
  font-family: 'Philosopher';
  font-size: 3rem;
  font-weight: bold;
  line-height: 3.75rem;
  color: #fff;
  margin: 3rem 0 3rem 0;
`;

const Link = styled.a`
  text-decoration: none;
  font-family: 'Fira Sans';
  font-size: 1rem;
  color: #00779a;
`;

const Photo = styled.img`
  width: 37.5rem;
  height: 35rem;
`;

export default () =>
  (<District>
    <Grid>
      <Row middle="lg" between="lg">
        <Col lg={6}>
          <Heading>Якиманка</Heading>
          <Description>
            Исторический центр Москвы в двух <br />километрах от Кремля
          </Description>
          <Link href="#">
            Гид по Якиманке &#62;
          </Link>
        </Col>
        <Col lg={6}>
          <Photo
            className="complex-district-photo"
            src={`${process.env.PUBLIC_URL}/images/polyanka-photo.jpg`}
          />
        </Col>
      </Row>
    </Grid>
  </District>);
