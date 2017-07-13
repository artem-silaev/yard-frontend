import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { Grid } from 'react-flexbox-grid';
import styled from 'styled-components';
import Logo from './Logo';
import Discover from './Discover';
import Card from './Card';

const Content = styled.main`
  display: block;
`;

const Cards = styled.div`
  margin-top: 4rem;
`;

class Complexes extends Component {
  constructor() {
    super();
    this.state = {
      complexes: [],
    };
  }

  componentDidMount() {
    fetch('https://yard.moscow/api/v1/complexes?filter%5Bstate%5D=public')
      .then(responce => responce.json())
      .then(json => {
        this.setState({
          complexes: json.items
        });
      });
  }

  render() {
    console.log(this.state);
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
                  location={`${complex.location.subLocalityName}, ${complex.location.localityName}`}
                  address={complex.name}
                  description={complex.shortDescription}
                  image="./images/bitmap1.png"
                />),
              )}
              </Cards>
            </Grid>
          </Content>
        </div>
      );
    }
}

export default Complexes;
