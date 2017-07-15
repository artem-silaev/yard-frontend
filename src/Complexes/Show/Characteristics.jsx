  import React from 'react';
  import { Row, Col } from 'react-flexbox-grid';
  import styled from 'styled-components';
  import { quarters, kinds, securityKinds, constructionKinds } from './../dictionaries';
  import { formatPrice } from '../../utils';

  const Characteristics = styled.div`
  margin-top: 2rem;
`;

  const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  line-height: 1.6875rem;
  font-family: 'Philosopher';
  color: #3e4247;
  margin-top: 0;
  color: #3e4247;
  margin-bottom: 1.125rem;
`;

  const Block = styled.dl`
  display: flex;
  margin: 0.5rem 0 0 0;
  &:first-child {
    margin-top: 0px;
  }
`;

  const Name = styled.dt`
  font-size: 1rem;
  color: #a9afb6;
  width: 50%;
  line-height: 1.5625rem;
`;

  const Value = styled.dd`
  font-size: 1rem;
  font-weight: 500;
  color: #3e4247;
  width: 50%;
  margin: 0;
  line-height: 1.5625rem;
`;

  export default (props) => {
    const {
  units,
  details: {
    commissioningYear,
    commissioningQuarter,
    parking = 0,
    undergroundGarages = 0,
    propertyKind,
    security,
    constructionKind,
    ceilHeight,
    maintenanceCosts,
    startYear,
    startQuarter,
  } = {},
  statistics: { price, totalArea: area } = {},
} =
  props.complex || {};
    const priceFrom = formatPrice(price.from.rub);
    const priceTo = formatPrice(price.to.rub);
    return (
      <Characteristics>
        <Title>Характеристики</Title>
        <Row>
          <Col lg={4}>
            {units &&
            <Block>
              <Name>Количество квартир:</Name>
              <Value>{units}</Value>
            </Block>}
            <Block>
              <Name>Статус:</Name>
              <Value>{kinds[propertyKind || 'flat']}</Value>
            </Block>
            {priceFrom && priceTo &&
            <Block>
              <Name>Цены:</Name>
              <Value>от {priceFrom} до {priceTo} млн</Value>
            </Block>}
            {area.to && area.to &&
            <Block>
              <Name>Площадь:</Name>
              <Value>От {area.from.toFixed(2)} до {area.to.toFixed(2)} м²</Value>
            </Block>
          }
          </Col>
          <Col lg={4}>
            {startQuarter &&
            startYear &&
            <Block>
              <Name>Начало строительства:</Name>
              <Value>{quarters[startQuarter]} квартал {startYear} года</Value>
            </Block>
          }
            {commissioningQuarter &&
            commissioningYear &&
            <Block>
              <Name>Конец строительства:</Name>
              <Value>{quarters[commissioningQuarter]} квартал {commissioningYear} года</Value>
            </Block>
          }
            { constructionKind &&
            <Block>
              <Name>Конструкция корпусов:</Name>
              <Value>
                {constructionKinds[constructionKind]}
              </Value>
            </Block>
        }

            {maintenanceCosts &&
            <Block>
              <Name>Обслуживание:</Name>
              <Value>{maintenanceCosts} руб / м² / месяц</Value>
            </Block>
        }
          </Col>
          <Col lg={4}>
            {ceilHeight &&
            <Block>
              <Name>Высота потолков:</Name>
              <Value>
                {ceilHeight.from.toFixed(2)} &mdash; {ceilHeight.to.toFixed(2)} м
              </Value>
            </Block>}
            {security &&
            <Block>
              <Name>Безопасность:</Name>
              <Value>{securityKinds[security]}</Value>
            </Block>}
            <Block>
              <Name>Наземная парковка:</Name>
              <Value>
                {parking ? `${parking} м/м` : 'Нет'}
              </Value>
            </Block>
            <Block>
              <Name>Подземная парковка:</Name>
              <Value>
                {undergroundGarages ? `${undergroundGarages} м/м` : 'Нет'}
              </Value>
            </Block>
          </Col>
        </Row>
      </Characteristics>);
  };
