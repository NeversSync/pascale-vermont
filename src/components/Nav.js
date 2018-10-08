import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

import { NavLine, NavSvg, NavItem, NavContainer, NavWrapper, LongNavSvg } from '../styles/nav-styles';


const Nav = () => (
  <NavWrapper>
    <NavContainer>
      <NavItem>
        <Link to="/">HOME
          <NavSvg>
            <NavLine x1="4" y1="5" x2="74" y2="5" stroke="white" strokeWidth="4" strokeLinecap="round"/>
          </NavSvg>
        </Link>
      </NavItem>
      <NavItem>
        <Link to="/about">ABOUT
          <NavSvg>
            <NavLine x1="4" y1="5" x2="74" y2="5" stroke="white" strokeWidth="4" strokeLinecap="round"/>
          </NavSvg>
        </Link>
      </NavItem>
      <NavItem>
        <Link to="/perinatal-loss">PERINATAL<br/> LOSS
          <LongNavSvg>
            <NavLine x1="4" y1="5" x2="134" y2="5" stroke="white" strokeWidth="4" strokeLinecap="round"/>
          </LongNavSvg>
        </Link>
      </NavItem>
      <NavItem>
        <Link to="/grief-counseling">GRIEF<br/> COUNSELING
          <LongNavSvg>
            <NavLine x1="4" y1="5" x2="134" y2="5" stroke="white" strokeWidth="4" strokeLinecap="round"/>
          </LongNavSvg>
        </Link>
      </NavItem>
      <NavItem>
        <Link to="/ngo-crisis-counseling">NGO CRISIS<br/> COUNSELING
          <LongNavSvg>
            <NavLine x1="4" y1="5" x2="134" y2="5" stroke="white" strokeWidth="4" strokeLinecap="round"/>
          </LongNavSvg>
        </Link>
      </NavItem>
      <NavItem>
        <Link to="/contact">CONTACT
        <NavSvg style={{width: '110px'}}>
          <NavLine x1="4" y1="5" x2="104" y2="5" stroke="white" strokeWidth="4" strokeLinecap="round"/>
        </NavSvg>
        </Link>
      </NavItem>
    </NavContainer>
  </NavWrapper>
)

export default Nav;
