import React, {Fragment} from 'react'
import Link from 'gatsby-link'
import styled from '../../node_modules/styled-components';

// import Header from '../components/Header'
// import heroImgSrc from '../../public/assets/img/stock/sprout-shadow.jpg';

const NavWrapper = styled.div`
  display: grid;
  height: 60px;
  grid-column: 2 / 8;
  grid-row: 1 / 2;
  grid-template-columns: 2fr 5fr 1fr;
`

const NavContainer = styled.ul`
  display: grid; 
  grid-column: 2 / 3;
  grid-template-columns: repeat(6, 1fr);
  justify-content: center;
  align-items: center;
  color: white;
  text-shadow: 0 0 5px rgba(47, 47, 47, 0.25);
`

const NavItem = styled.li`
  display: grid;
  justify-content: center;
  font-size: .6em;
  list-style-type: none;
  font-weight: bold;
`

const HeroContainer = styled.div`
  display: grid;
  /* height: 200px; */
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 100px 100px 100px 100px 100px;
`

const HeroImg = styled.img`
  display: grid;
  grid-column: 1 / -1;
  grid-row: 1 / 3;
  z-index: -1;
`

const Heading = styled.div`
  display: grid;
  /* grid-column: 1 / 2; */
  /* align-content: center; */
  /* text-align: center; */
  /* grid-gap: 10px; */
`

const About = styled.div`
  background-color: white;
  height: 500px;
`

const IndexPage = () => (
  <Fragment>
    <HeroContainer>
      <Nav /> 
      <HeroImg src={'http://res.cloudinary.com/nicky-cloudinary/image/upload/c_scale,f_auto,h_711,q_100/v1535768654/joshua-ness-107133-unsplash.jpg'} width="100%" height="auto"/>
      <Heading>
        <h1>Pascale Vermont, PhD</h1>
        <h3>Grief Counselor</h3>
      </Heading>
    </HeroContainer>
    <About></About>
  </Fragment>
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
