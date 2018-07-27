import React from 'react'
import Link from 'gatsby-link'

import styled from 'styled-components'

const Container = styled.nav`
  display: grid;
  grid-template-columns: 1fr 4fr 1fr; 
  /* grid-template-rows: 1fr; */
  /* justify-content: space-between; */
  /* grid-template-rows: 1fr; */
  align-items: center;
  height: 100px;
`

const NavContainer = styled.ul`
  display: grid;
  grid-column: 2 / 3;
  grid-template-columns: repeat(5, 1fr); 
  margin: 0;
  padding: 0;
`

const NavItem = styled.li`
  display: grid;
  justify-content: center;
  height: 100px;
  align-content: center;
  list-style-type: none;
`

const Nav = () => (
  <Container>
    <NavContainer>
      <NavItem>
        <Link to="/">Home</Link>
      </NavItem>
      <NavItem>
        <Link to="/about">About</Link>
      </NavItem>
      <NavItem>
        <Link to="/perinatal-loss">Perinatal Loss</Link>
      </NavItem>
      <NavItem>
        <Link to="/grief-counseling">Grief Counseling</Link>
      </NavItem>
      <NavItem>
        <Link to="/ngo-crisis-counseling">NGO Crisis Counseling</Link>
      </NavItem>
    </NavContainer >
  </Container >
)

export default Nav
