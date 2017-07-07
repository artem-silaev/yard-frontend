import React from 'react';
import styled from 'styled-components';

const Card = styled.a`
  display: flex;
  justify-content: center;
  text-decoration: none;
  cursor: pointer;
  margin-bottom: 3rem;

  &:hover {
    box-shadow: 0px 0px 20px 0px rgba(0,0,0,0.3);
  }
`;

const Content = styled.article`
  background-color: #fff;
  padding: 1.5rem 5.38125rem 0 1rem;
  border-bottom: 0.125rem solid #646971;
`;

const Location = styled.p`
  text-transform: uppercase;
  font-size: 1rem;
  color: #646971;
  margin: 0;
  font-family: 'Monaco', monospace;
`;

const Address = styled.h4`
  margin-top: 1.2rem;
  font-size: 2.5rem;
  font-weight: bold;
  color: #000;
  line-height: 1.4;
  margin-bottom: 0.5rem;
`;

const Description = styled.p`
  line-height: 1.5;
  margin-top: 0.5rem;
  color: #3e4247;
`;

export default props =>
  <Card href={props.url}>
    <img src={props.image} alt="" />
    <Content>
      <Location>
        {props.location}
      </Location>
      <Address>
        {props.address}
      </Address>
      <Description>
        {props.description}
      </Description>
    </Content>
  </Card>;
