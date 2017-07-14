import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import BodyClassName from 'react-body-classname';
import { Grid } from 'react-flexbox-grid';
import { get } from '../../utils';

import MainTitle from './MainTitle';
import Carousel from './Carousel';
import MainInformation from './MainInformation';
import Characteristics from './Characteristics';
import Description from './Description';
import Infrastructure from './Infrastructure';
import Offers from './Offers';
import District from './District';
import Location from './Location';

export default class Complexes extends Component {
  constructor() {
    super();
    this.state = {
      complex: {},
    };
  }

  componentDidMount() {
    get(`complexes/${this.props.match.params.id}`)
      .then((json) => {
        this.setState({
          complex: json,
        });
      });
  }

  render() {
    if (!this.state.complex.id) { return null; }
    return (
      <div>
        <Helmet>
          <title>{`Compass - ${this.state.complex.name}`}</title>
        </Helmet>
        <BodyClassName className="complex-page">
          <div>
            <MainTitle name={this.state.complex.name} address={this.state.complex.address} />
            <Carousel images={this.state.complex.images} />
            <Grid>
              <MainInformation
                offersCount={this.state.complex.statistics.propertiesCount}
                architect={this.state.complex.details.architect}
                developer="Группа «ПСН»"
              />
              <Characteristics complex={this.state.complex} />
              <Description />
              <Infrastructure />
            </Grid>
            <Offers name={this.state.complex.name} />
            <District />
            <Location />
          </div>
        </BodyClassName>
      </div>
    );
  }
}
