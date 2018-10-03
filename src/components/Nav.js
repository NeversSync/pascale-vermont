import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

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
  color: white;
  text-shadow: 0 1px 5px rgba(47, 47, 47, 0.25);
  padding-top: 20px;
`

const NavItem = styled.li`
  display: grid;
  width: 110px;
  text-align: center;
  font-size: 18px;
  letter-spacing: 3px;
  align-self: center;
  justify-content: center;
  line-height: 23px;
  list-style-type: none;
  border-bottom: 5px solid transparent;
  padding: 2px;
  padding-bottom: 5px;
  `

  const NavSvg = styled.svg`
    height: 10px;
    /* visibility: hidden; */
    opacity: 0;
    transition: opacity 200ms ease;

    ${NavItem}:hover & {
      opacity: 1;
    }
  `;

  const NavLine = styled.line`
    stroke-linecap: round;
    opacity: .9;
  `;


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
        <Link to="/perinatal-loss">PERINATAL LOSS
          <NavSvg>
            <NavLine x1="2" y1="5" x2="107" y2="5" stroke="white" strokeWidth="4" strokeLinecap="round"/>
          </NavSvg>
        </Link>
      </NavItem>
      <NavItem>
        <Link to="/grief-counseling">GRIEF COUNSELING
          <NavSvg>
            <NavLine x1="2" y1="5" x2="130" y2="5" stroke="white" strokeWidth="4" strokeLinecap="round"/>
          </NavSvg>
        </Link>
      </NavItem>
      <NavItem>
        <Link to="/ngo-crisis-counseling">NGO CRISIS COUNSELING
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
