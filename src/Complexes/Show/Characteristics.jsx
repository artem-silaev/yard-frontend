import React from 'react';
import { Row, Col } from 'react-flexbox-grid';
import styled from 'styled-components';
import { kinds, securityKinds, constructionKinds, furnitureKinds, conditions } from './../dictionaries';
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
  const priceFrom = formatPrice(props.complex.statistics.price.from.rub);
  const priceTo = formatPrice(props.complex.statistics.price.to.rub);
  const totalAreaFrom = Math.round(props.complex.statistics.totalArea.from);
  const totalAreaTo = Math.round(props.complex.statistics.totalArea.to);
  return (
    <Characteristics>
      <Title>Характеристики</Title>
      <Row>
        <Col lg={4}>
          <Block>
            <Name>Количество квартир:</Name>
            <Value>{props.complex.statistics.propertiesCount}</Value>
          </Block>
          <Block>
            <Name>Статус:</Name>
            <Value>{kinds[props.complex.details.propertyKind || 'flat']}</Value>
          </Block>
          <Block>
            <Name>Цены:</Name>
            <Value>от {priceFrom} до {priceTo} млн</Value>
          </Block>
        </Col>
        <Col lg={4}>
          <Block>
            <Name>Конструкция корпусов:</Name>
            <Value>
              {constructionKinds[props.complex.details.constructionKind]}
            </Value>
          </Block>
          <Block>
            <Name>Площадь:</Name>
            <Value>От {totalAreaFrom} до {totalAreaTo} м²</Value>
          </Block>
          <Block>
            <Name>Обслуживание:</Name>
            <Value>{props.complex.details.maintenanceCosts} руб / м² / месяц</Value>
          </Block>
        </Col>
        <Col lg={4}>
          <Block>
            <Name>Безопасность:</Name>
            <Value>{securityKinds[props.complex.details.security]}</Value>
          </Block>
          <Block>
            <Name>Состояние:</Name>
            <Value>{conditions[props.complex.propertyDefaults.information.condition]}</Value>
          </Block>
          <Block>
            <Name>Мебель:</Name>
            <Value>{furnitureKinds[props.complex.propertyDefaults.information.furniture]}</Value>
          </Block>
        </Col>
      </Row>
    </Characteristics>);
};
