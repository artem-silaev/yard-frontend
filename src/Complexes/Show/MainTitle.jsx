import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import styled from 'styled-components';

const Header = styled.section`
  padding-top: 1.5rem;
  padding-bottom: 1rem;
  border-top: solid 1px #eaebf0;
`;

const Name = styled.h1`
  margin-top: 0;
  margin-bottom: 0;
  font-family: 'Philosopher', sans-serif;
  font-size: 2rem;
  font-weight: bold;
  line-height: 2.25rem;
  color: #3e4247;
`;

const Address = styled.p`
  font-size: 0.875rem;
  font-weight: 300;
  color: #a9afb6;
  margin: 0.5rem 0 0 0;
  line-height: 1.375rem;
`;

const ButtonWrapper = styled.div`
  display: block;
`;

const Button = styled.button`
  margin-right: 0.5rem;
  padding: 0.5rem 1rem 0.5rem 1rem;
  font-size: 0.625rem;
  cursor: pointer;
  font-weight: 300;
  line-height: 0.625rem;
  color: #00779a;
  border-radius: 2px;
  border: 1px solid #e0e0e1;
  background: transparent;
`;

export default () =>
  (<Header>
    <Grid>
      <Row between="lg">
        <Col lg>
          <Name>Жилой комплекс «Полянка/44»</Name>
          <Address>
            Район Якиманка, улица Большая Полянка, дом 44 • 119180
          </Address>
        </Col>
        <ButtonWrapper>
          <Button>В избранное</Button>
        </ButtonWrapper>
      </Row>
    </Grid>
  </Header>);
