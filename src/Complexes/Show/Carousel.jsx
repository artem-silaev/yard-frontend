import React from 'react';
import { Grid, Row } from 'react-flexbox-grid';
import styled from 'styled-components';

const Images = styled.section`
  display: flex;
  overflow-x: hidden;
`;

const ButtonWrapper = styled.div`
  position: absolute;
  margin: -2.625rem 0 0 0.5rem;
`;

const Button = styled.button`
  padding: 0.5rem 1rem 0.5rem 1rem;
  border-radius: 2px;
  cursor: pointer;
  border: 0;
  background-color: #00779a;
  font-size: 0.625rem;
  font-weight: 300;
  line-height: 0.625rem;
  color: #fff;
`;

export default () =>
  <section>
    <Images>
      <img src={process.env.PUBLIC_URL + '/images/carousel-1.jpg'} alt="" />
      <img src={process.env.PUBLIC_URL + '/images/carousel-2.jpg'} alt="" />
      <img src={process.env.PUBLIC_URL + '/images/carousel-3.jpg'} alt="" />
      <img src={process.env.PUBLIC_URL + '/images/carousel-4.jpg'} alt="" />
      <img src={process.env.PUBLIC_URL + '/images/carousel-5.jpg'} alt="" />
    </Images>
    <Grid>
      <Row>
        <ButtonWrapper>
          <Button>41 фотография</Button>
        </ButtonWrapper>
      </Row>
    </Grid>
  </section>;
