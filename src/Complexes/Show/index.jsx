// @flow

import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import BodyClassName from 'react-body-classname';
import { Grid } from 'react-flexbox-grid';
import { get } from '../api';
import type { ComplexType, OfferType } from '../types';

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
  state = { complex: {} };

  state: {
    complex: ComplexType,
  };

  componentDidMount() {
    get(`complexes/${this.props.match.params.slug}`)
      .then((complex: ComplexType) => {
        this.setState({ complex });
      });
  }

  render() {
    const {
      location: { subLocalityName = '', street = '', house = '', postalCode = '' } = {},
      amenities,
      images,
      name,
      fullDescription,
      details: { architect = '', developer = '' } = {},
      statistics: { propertiesCount } = {},
    } =
      this.state.complex || {};
    const offers: Array<OfferType> = [
      { amount: 3, square: { min: 26, max: 50 }, price: { min: 65, max: 100 } },
      { amount: 4, square: { min: 20, max: 50 }, price: { min: 75, max: 100 } },
      { amount: 5, square: { min: 20, max: 50 }, price: { min: 5, max: 10 } },
    ];
    return (
      <div>
        <Helmet>
          <title>{`Compass - ${name}`}</title>
        </Helmet>
        <BodyClassName className="complex-page">
          <div>
            <MainTitle name={name} location={`${subLocalityName}, ${street}, ${house} • ${postalCode}`} />
            {images && <Carousel images={images} />}
            <Grid>
              <MainInformation
                offersCount={propertiesCount}
                architect={architect}
                developer={developer}
              />
              <Characteristics complex={this.state.complex} />
              {fullDescription && <Description fullDescription={fullDescription} />}
              {amenities && amenities.length > 0 && <Infrastructure amenities={amenities} />}
            </Grid>
            <Offers name={name} offers={offers} />
            <District
              district="Якиманка"
              description="Исторический центр Москвы в&nbsp;двух километрах&nbsp;от&nbsp;Кремля"
              link="Гид по Якиманке &#62;"
            />
            <Location />
          </div>
        </BodyClassName>
      </div>
    );
  }
}
