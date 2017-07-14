import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { Grid } from 'react-flexbox-grid';
import styled from 'styled-components';
import Logo from './Logo';
import Discover from './Discover';
import Card from './Card';
import { get, getExternalImageUrl } from '../../utils';

const Content = styled.main`
  display: block;
`;

const Cards = styled.div`
  margin-top: 4rem;
`;

export default class Complexes extends Component {
  constructor() {
    super();
    this.state = {
      complexes: [],
    };
  }

  componentDidMount() {
    get('complexes?filter%5Bstate%5D=public')
      .then((json) => {
        this.setState({
          complexes: json.items,
        });
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
                  url={`/complex/${complex.id}`}
                  location={`${complex.location.subLocalityName}, ${complex.location.street}, ${complex.location.house}`}
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
