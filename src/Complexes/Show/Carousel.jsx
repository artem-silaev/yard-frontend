import React from 'react';
import { Grid, Row } from 'react-flexbox-grid';
import styled from 'styled-components';
import { getExternalImageUrl, getPhotoCountLocale } from '../../utils';

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
  font-family: 'Fira Sans', sans-serif;
  font-size: 0.625rem;
  font-weight: 300;
  line-height: 0.625rem;
  color: #fff;
`;

export default (props) => {
  const images = props.images || [];
  if (images.length === 0) { return null; }
  return (
    <section>
      <Images>
        {images.map(image => (
          <img
            key={image.id}
            src={getExternalImageUrl(image)}
            alt={image.id}
          />
      ))}
      </Images>
      <Grid>
        <Row>
          <ButtonWrapper>
            <Button>{getPhotoCountLocale(images.length)}</Button>
          </ButtonWrapper>
        </Row>
      </Grid>
    </section>);
};
