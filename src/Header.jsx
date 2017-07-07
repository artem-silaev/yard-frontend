import React from 'react';
import compassLogo from './images/compass-logo.svg';
import { Grid } from 'react-flexbox-grid';
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
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
`;

const Menu = styled.nav`
  display: flex;
  line-height: 1rem;
  margin-top: 1.25rem;
  margin-bottom: 1.25rem;
  justify-content: space-between;
  align-items: center;
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
