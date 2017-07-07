import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import styled from 'styled-components';

const Location = styled.section`
  margin-top: -9.625rem;
  padding-bottom: 3.75rem;
`;

const Map = styled.img`
  width: 100%;
  height: 19.125rem;
  box-shadow: 0 0 30px 0 rgba(0, 0, 0, 0.5);
`;

const Content = styled.div`
  box-shadow: 0 0 30px 0 rgba(0, 0, 0, 0.5);
`;

const Block = styled.div`
  padding: 1.5rem;
  background-color: #fff;
  border-bottom: solid 1px #e0e0e1;
`;

const Name = styled.p`
  margin: 0;
  font-family: 'Fira Sans';
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.375rem;
  color: #3e4247;
`;

const Duration = styled.p`
  margin: 0.5rem 0 0 0;
  font-family: 'Fira Sans';
  font-size: 1rem;
  line-height: 1.375rem;
  color: #a9afb6;
`;

export default () =>
  <Location>
    <Grid>
      <Row>
        <Col lg={6}>
          <Map src={process.env.PUBLIC_URL + '/images/map.png'} alt="" />
        </Col>
        <Col lg={6}>
          <Content>
            <Block>
              <Name>
                Красный октябрь
              </Name>
              <Duration>
                24 минуты, 6 км
              </Duration>
            </Block>
            <Block>
              <Name>
                World class
              </Name>
              <Duration>
                2 минуты, 300 м
              </Duration>
            </Block>
            <Block>
              <Name>
                Третьяковская галерея
              </Name>
              <Duration>
                14 минуты, 4 км
              </Duration>
            </Block>
          </Content>
        </Col>
      </Row>
    </Grid>
  </Location>;
