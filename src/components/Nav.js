import React from 'react'
import Link from 'gatsby-link'

import styled from 'styled-components'

const Container = styled.nav`
  color: white;
  display: grid;
  grid-template-columns: 2fr 5fr .5fr;
  grid-template-rows: 1fr 1fr;
  align-items: center;
  background-color: rgba(47, 47, 47, .3);
  padding-top: 35px;
  text-shadow: 0 0 5px rgba(47, 47, 47, 0.25);
`

const NavContainer = styled.ul`
  height: 80px;
  display: grid;
  grid-column: 2 / 3;
  grid-row-gap: 1px;
  grid-column-gap: 1px;
  grid-template-columns: repeat(auto-fit, minmax(80px, 1fr));
`

const NavItem = styled.li`
  display: grid;
  justify-content: center;
  font-size: .7em;
  align-content: center;
  list-style-type: none;
  font-weight: bold;
`

const Logo = styled.div`
  display: grid;
  align-content: center;
  text-align: center;
  grid-gap: 10px;
`

const Nav = () => (
  <Container>
    <Logo>
      <h1>Pascale Vermont, PhD</h1>
      <h3>Grief Counselor</h3>
    </Logo>
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
    </NavContainer >
  </Container >
)

export default Nav
