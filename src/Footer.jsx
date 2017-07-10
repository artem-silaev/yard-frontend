import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import styled from 'styled-components';
import arrowImage from './images/arrow.png';

const Footer = styled.footer`
  background-color: #000;
`;

const Title = styled.h4`
  font-size: 0.875rem;
  color: #646971;
  margin: 0 0 .45rem;
  line-height: 1.375rem;
`;

const NameCompany = styled(Title)`
  margin-top: 2rem;
`;

const Text = styled.p`
  font-size: 0.875rem;
  font-weight: 300;
  margin-bottom: 0.7rem;
  margin-top: 0.7rem;
  color: #a9afb6;
`;

const Phone = styled(Text)`
  margin-top: 1rem;
`;

const Company = styled.div`
  border-top: 0.125rem solid #3e4247;
  margin-top: 2rem;
  padding-top: 1rem;
`;

const Link = styled.a`
  display: block;
  color: #fff;
  font-size: .875rem;
  text-decoration: none;
  margin-bottom: 0.35rem;
  line-height: 1.5rem;
`;

const LinkArrow = styled(Link)`
  margin-top: 0.8rem;
`;

const Arrow = styled.img`
  width: 0.5rem;
  height: 0.5rem;
`;

const Copyright = styled.p`
  margin-top: 5.7rem;
  margin-bottom: 1.75rem;
  font-size: 11px;
  font-weight: 300;
  color: #A9AFB6;
  line-height: 1.125rem;
`;

export default () =>
  (<Footer>
    <Grid>
      <Row>
        <Col xs={4}>
          <NameCompany>ООО «Ярд»</NameCompany>
          <Text>ОГРН 1175074002531</Text>
          <Text>ИНН 5036165365</Text>
          <Phone>+7 (999) 821-14-88</Phone>
        </Col>
        <Col xs={2}>
          <Company>
            <Title>Жилые комплексы</Title>
            <Link href="#">
              ВТБ Арена Парк
            </Link>
            <Link href="#">
              Садовые кварталы
            </Link>
            <Link href="#">
              Резиденция Монэ
            </Link>
            <LinkArrow href="#">
              Все ЖК Москвы <Arrow className="link-arrow" src={arrowImage} />
            </LinkArrow>
          </Company>
        </Col>
        <Col xs={2}>
          <Company>
            <Title>Компания</Title>
            <Link href="#">
              Команда
            </Link>
            <Link href="#">
              О компании
            </Link>
          </Company>
        </Col>
      </Row>
      <Row>
        <Col lg={8} lgOffset={4}>
          <Copyright>
            Любая информация, представленная на данном сайте, носит
            исключительно информационный характер и ни при каких условиях не
            является публичной офертой, определяемой положениями статьи 437 ГК
            РФ. © ООО «Ярд», 2017
          </Copyright>
        </Col>
      </Row>
    </Grid>
  </Footer>);
