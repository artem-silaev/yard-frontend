import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import BodyClassName from 'react-body-classname';
import { Grid } from 'react-flexbox-grid';
import { get } from '../api';

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
    get(`complexes/${this.props.match.params.slug}`)
      .then((json) => {
        this.setState({
          complex: json,
        });
      });
  }

  render() {
    const complex = this.state.complex;
    if (!complex.id) { return null; }
    return (
      <div>
        <Helmet>
          <title>{`Compass - ${complex.name}`}</title>
        </Helmet>
        <BodyClassName className="complex-page">
          <div>
            <MainTitle name={complex.name} location={complex.location} />
            <Carousel images={complex.images} />
            <Grid>
              <MainInformation
                offersCount={complex.statistics.propertiesCount}
                architect={complex.details.architect}
                developer={complex.details.developer}
              />
              <Characteristics complex={complex} />
              {complex.fullDescription && <Description text={complex.fullDescription} />}
              <Infrastructure amenities={complex.amenities} />
            </Grid>
            <Offers name={complex.name} />
            <District />
            <Location />
          </div>
        </BodyClassName>
      </div>
    );
  }
}
