import React from 'react'
import Link from 'gatsby-link'
import styled from '../../node_modules/styled-components';

import About from './about';
import { Title, SubTitle } from '../components/Helpers';

// import Header from '../components/Header'
// import heroImgSrc from '../../public/assets/img/stock/sprout-shadow.jpg';
// const HeadingFont = {aileron};
const NavWrapper = styled.div`
  display: grid;
  height: 100px;
  grid-column: 3 / 8;
  grid-row: 1 / 2;
  grid-template-columns: 2fr 5fr 1fr;
`

const NavContainer = styled.ul`
  display: grid; 
  grid-gap: 64px;
  grid-column: 2 / 3;
  grid-template-columns: repeat(6, 1fr);
  justify-content: center;
  align-items: center;
  color: white;
  text-shadow: 0 1px 5px rgba(47, 47, 47, 0.25);
`

const NavItem = styled.li`
  display: grid;
  text-align: center;
  font-size: 18px;
  letter-spacing: 3px;
  line-height: 23px;
  list-style-type: none;
  border-bottom: 5px solid transparent;
  padding: 2px;
  padding-bottom: 5px;
  border-radius: 5px;

  :hover, :active {
    border-bottom: 5px solid white;
  }
`

const HeroContainer = styled.div`
  display: grid;
  height: 650px;
  grid-template-columns: repeat(8, 1fr);
  /* grid-template-rows: 1fr 1fr 1fr 1fr 1fr; */
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

// const AboutContainer = styled.div`
//   background-color: white;
//   height: 500px;
// `

const IndexPage = () => (
  <div>
    <HeroContainer>
      <Nav /> 
      <HeroImg src={'http://res.cloudinary.com/nicky-cloudinary/image/upload/c_scale,f_auto,h_711,q_100/v1535768654/joshua-ness-107133-unsplash.jpg'} width="100%" height="auto"/>
      <Heading>
        <Title>Pascale Vermont, PhD</Title>
        <SubTitle>Grief Counselor</SubTitle>
      </Heading>
    </HeroContainer>
    {/* <AboutContainer>
    </AboutContainer> */}
    <About/>
  </div>
)

const Nav = () => (
  <NavWrapper>
    <NavContainer>
      <NavItem>
        <Link to="/">HOME</Link>
      </NavItem>
      <NavItem>
        <Link to="/about">ABOUT</Link>
      </NavItem>
      <NavItem>
        <Link to="/perinatal-loss">PERINATAL LOSS</Link>
      </NavItem>
      <NavItem>
        <Link to="/grief-counseling">GRIEF COUNSELING</Link>
      </NavItem>
      <NavItem>
        <Link to="/ngo-crisis-counseling">NGO CRISIS COUNSELING</Link>
      </NavItem>
      <NavItem>
        <Link to="/contact">CONTACT</Link>
      </NavItem>
    </NavContainer>
  </NavWrapper>
)

export default IndexPage
