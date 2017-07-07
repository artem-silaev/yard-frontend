import React from 'react';
import compassLogo from './images/compass-logo.svg';
import { Grid, Row } from 'react-flexbox-grid';
import styled from 'styled-components';

import './style/style.css';
import './style/complex.css';

const Header = styled.header`
  background-color: #fff;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Logo = styled.img`
  width: 11rem;
  height: 1.6rem;
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

export default () =>
  <Header>
    <Grid>
      <Wrapper>
        <Logo src={compassLogo} />
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
  </Header>;
