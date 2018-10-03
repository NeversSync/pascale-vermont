import React from 'react'
import Link from 'gatsby-link'
import styled from '../../node_modules/styled-components';

import About from './about';
import Nav from '../components/Nav';
import Perinatal from './perinatal-loss'; 
import { Title, SubTitle } from '../components/Helpers';

const HeroContainer = styled.div`
  display: grid;
  height: 650px;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: 100px 100px 100px 100px 100px 100px;
  background: linear-gradient(to right, rgba(72, 33, 97, .4) 0%, rgba(189, 68, 92, 0.4) 50%, rgba(204, 133, 0, 0.4) 100%);
`

const HeroImg = styled.img`
  display: grid;
  grid-column: 1 / -1;
  grid-row: 1 / 3;
  z-index: -1;
`

const Heading = styled.div`
  display: grid;
  grid-column: 3 / 7;
  grid-row: 2 / 6;
  justify-content: center;
  align-content: center;
  text-align: center;
  grid-gap: 10px;
  text-shadow: 0px 2px 15px rgba(0, 0, 0, 0.3);
  color: white;
  text-transform: uppercase;
`

const LandingSubtitle = SubTitle.extend`
  margin-left: 12px;
`;

const IndexPage = () => (
  <div>
    <HeroContainer>
      <Nav /> 
      <HeroImg src={'http://res.cloudinary.com/nicky-cloudinary/image/upload/c_scale,f_auto,h_711,q_100/v1535768654/joshua-ness-107133-unsplash.jpg'} width="100%" height="auto"/>
      <Heading>
        <Title>Pascale Vermont, PhD</Title>
        <LandingSubtitle>Grief Counselor</LandingSubtitle>
      </Heading>
    </HeroContainer>
    <About/>
    <Perinatal/>
  </div>
)

export default IndexPage
