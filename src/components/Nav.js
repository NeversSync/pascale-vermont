import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

import { NavLine, NavSvg, NavItem, NavContainer, NavWrapper } from '../styles/nav-styles';


const Nav = () => (
  <NavWrapper>
    <NavContainer>
      <NavItem>
        <Link to="/">HOME
          <NavSvg>
            <NavLine x1="18" y1="5" x2="85" y2="5" stroke="white" strokeWidth="4" strokeLinecap="round"/>
          </NavSvg>
        </Link>
      </NavItem>
      <NavItem>
        <Link to="/about">ABOUT
          <NavSvg>
            <NavLine x1="15" y1="5" x2="87" y2="5" stroke="white" strokeWidth="4" strokeLinecap="round"/>
          </NavSvg>
        </Link>
      </NavItem>
      <NavItem>
        <Link to="/perinatal-loss">PERINATAL<br/> LOSS
          <NavSvg>
            <NavLine x1="2" y1="5" x2="107" y2="5" stroke="white" strokeWidth="4" strokeLinecap="round"/>
          </NavSvg>
        </Link>
      </NavItem>
      <NavItem>
        <Link to="/grief-counseling">GRIEF<br/> COUNSELING
          <NavSvg>
            <NavLine x1="2" y1="5" x2="130" y2="5" stroke="white" strokeWidth="4" strokeLinecap="round"/>
          </NavSvg>
        </Link>
      </NavItem>
      <NavItem>
        <Link to="/ngo-crisis-counseling">NGO CRISIS<br/> COUNSELING
          <NavSvg>
            <NavLine x1="2" y1="5" x2="130" y2="5" stroke="white" strokeWidth="4" strokeLinecap="round"/>
          </NavSvg>
        </Link>
      </NavItem>
      <NavItem>
        <Link to="/contact">CONTACT
        <NavSvg>
          <NavLine x1="7" y1="5" x2="95" y2="5" stroke="white" strokeWidth="4" strokeLinecap="round"/>
        </NavSvg>
        </Link>
      </NavItem>
    </NavContainer>
  </NavWrapper>
)

export default Nav;
