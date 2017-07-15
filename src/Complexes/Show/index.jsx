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
      .then((complex) => {
        this.setState({ complex });
      });
  }

  render() {
    const {
      location = {},
      amenities = {},
      images = {},
      name,
      fullDescription,
      details: { architect, developer } = {},
      statistics: { propertiesCount } = {},
    } =
      this.state.complex || {};
    return (
      <div>
        <Helmet>
          <title>{`Compass - ${name}`}</title>
        </Helmet>
        <BodyClassName className="complex-page">
          <div>
            <MainTitle name={name} location={location} />
            {images.length > 0 && <Carousel images={images} />}
            <Grid>
              <MainInformation
                offersCount={propertiesCount}
                architect={architect}
                developer={developer}
              />
              <Characteristics complex={this.state.complex} />
              {fullDescription && <Description fullDescription={fullDescription} />}
              {amenities.length > 0 && <Infrastructure amenities={amenities} />}
            </Grid>
            <Offers name={name} />
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
