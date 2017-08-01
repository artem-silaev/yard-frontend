// @flow

import React from 'react';
import { Grid } from 'react-flexbox-grid';
import styled from 'styled-components';
import compassLogo from './images/compass-logo.svg';

import './style/style.css';

const Header = styled.header`
  background-color: #fff;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Menu = styled.nav`
  font-size: 1rem;
  color: #3e4247;
  margin: 1.5rem 0;
`;

const MenuLink = styled.a`
  color: #3e4247;
  margin-left: 2rem;
  cursor: pointer;
  text-decoration: none;
`;

const MainLink = styled.a`
  display: block;
  align-self: center;
  padding-top: .375rem;
`;

export default () =>
  (<Header>
    <Grid>
      <Wrapper>
        <MainLink href="/"><img alt="" src={compassLogo} /></MainLink>
        <Menu>
          <MenuLink to="#">
            Купить
          </MenuLink>
          <MenuLink to="#">
            Снять
          </MenuLink>
          <MenuLink to="#">
            Наши агенты
          </MenuLink>
        </Menu>
      </Wrapper>
    </Grid>
  </Header>);
