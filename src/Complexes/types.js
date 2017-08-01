/* eslint-disable import/prefer-default-export */
// @flow

export type ImageType = {
  id: string,
  isPublic?: boolean,
};

export type LocationType = {
  subLocalityName: string,
  street: string,
  house: number,
  postalCode: string,
};

export type DisrictType = {
  link: string,
  description: string,
  district: string,
}

export type AmenityType = {
  id: number,
  amenity: string,
};

export type AreaType = {
  min: number,
  max: number,
};

export type PriceType = {
  min: number,
  max: number,
};

export type OfferType = {
  amount: number,
  square: AreaType,
  price: PriceType,
};

export type ComplexDetails = {
  architect: string,
  developer: string,
  security: string,
  constructionKind: string,
  ceilHeight: {
    from: number,
    to: number,
  },
  maintenanceCosts: ?string,
  startYear: string,
  startQuarter: string,
  commissioningYear: string,
  commissioningQuarter: string,
  parking: string,
  undergroundGarages: string,
  propertyKind: string
}

type ComplexStatistics = {
  propertiesCount: number,
  price: {
    from: {
      rub: number,
    },
    to: {
      rub: number,
    },
  },
  totalArea: {
    from: number,
    to: number,
  },
};

export type ComplexType = {
  commissioningYear?: number,
  details: ComplexDetails,
  slug: string,
  shortDescription: string,
  fullDescription: string,
  image: number,
  name: string,
  location: LocationType,
  amenities: Array<AmenityType>,
  state: string,
  statistics: ComplexStatistics,
  units: string,
  images: Array<ImageType>,
};
