import React from 'react';
import styled from 'styled-components';

const MainInformation = styled.div`
  display: flex;
  margin-top: 1.5rem;
  border-bottom: 1px solid #e0e0e1;
`;

const Block = styled.div`
  margin-right: 3rem;
  margin-bottom: 1.5rem;
`;

const Heading = styled.h2`
  margin: 0;
  font-family: 'Philosopher';
  font-size: 1.5rem;
  font-weight: bold;
  color: #3e4247;
`;

const Subheading = styled.small `
  font-family: 'Fira sans', sans-serif;
  font-size: 0.875rem;
  font-weight: 300;
  display: block;
  color: #a9afb6;
  margin: 0.5rem 0 0 0;
  line-height: 1.375rem;
`;

export default () =>
  <MainInformation>
    <Block>
      <Heading>
        950 <Subheading>предложений</Subheading>
      </Heading>
    </Block>
    <Block>
      <Heading>
        John McAslan + Partners<Subheading>архитектор</Subheading>
      </Heading>
    </Block>
    <Block>
      <Heading>
        Группа «ПСН»<Subheading>застройщик</Subheading>
      </Heading>
    </Block>
  </MainInformation>;
