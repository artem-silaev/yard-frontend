// @flow

import React from 'react';
import styled from 'styled-components';
import mainLogo from '../../images/compass-development-logo.svg';

const Logo = styled.section`
  background-color: #161616;
  padding: 5rem 0 5rem 0;
  display: flex;
  justify-content: center;
`;

export default () =>
  (<Logo>
    <img src={mainLogo} alt="" />
  </Logo>);
