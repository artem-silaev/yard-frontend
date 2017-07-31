// @flow

import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { Grid } from 'react-flexbox-grid';
import styled from 'styled-components';
import Logo from './Logo';
import Discover from './Discover';
import Card from './Card';
import { getExternalImageUrl } from '../../utils';
import { get } from '../api';
import type { ComplexType } from '../types';

const Content = styled.main`display: block;`;

const Cards = styled.div`margin-top: 4rem;`;

export default class Complexes extends Component {
  state: {
    complexes: Array<ComplexType>,
  } = {
    complexes: [],
  };
  componentDidMount() {
    get('complexes?filter[state]=public')
      .then(({ items: complexes }) => {
        this.setState({ complexes });
      });
  }

  render() {
    return (
      <div>
        <Helmet>
          <title>Complexes</title>
        </Helmet>
        <Logo />
        <Content>
          <Grid>
            <Discover />
            <Cards>
              {this.state.complexes.map(complex =>
                (<Card
                  url={`/complexes/${complex.slug}`}
                  location={complex.location.subLocalityName}
                  address={complex.name}
                  description={complex.shortDescription}
                  image={getExternalImageUrl(complex.image)}
                />),
              )}
            </Cards>
          </Grid>
        </Content>
      </div>
    );
  }
}
