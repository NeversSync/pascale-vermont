import React, { Component } from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import { EntypoChevronSmallDown } from 'react-entypo';

import { NavLine, NavSvg, NavItem, NavContainer, NavWrapper, LongNavSvg, NavDropDown, NavDropDownItem, NavItemDropContainer } from '../styles/nav-styles';


class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      dropOpacity: '0', 
      svgOpacity: '0',
      svgOpacityTwo: '0',
      svgOpacityThree: '0'
    };

    this.hoverToggle = this.hoverToggle.bind(this);
    this.hoverSvgToggle = this.hoverSvgToggle.bind(this);
    this.hoverSvgToggleTwo = this.hoverSvgToggleTwo.bind(this);
    this.hoverSvgToggleThree = this.hoverSvgToggleThree.bind(this);
  };


  hoverToggle() {
    this.state.dropOpacity === '0' ? this.setState({ dropOpacity: '1' }) : this.setState({ dropOpacity: '0' });
  }
  hoverSvgToggle() {
    this.state.svgOpacity === '0' ? this.setState({ svgOpacity: '1' }) : this.setState({ svgOpacity: '0' });
  }
  hoverSvgToggleTwo() {
    this.state.svgOpacityTwo === '0' ? this.setState({ svgOpacityTwo: '1' }) : this.setState({ svgOpacityTwo: '0' });
  }
  hoverSvgToggleThree() {
    this.state.svgOpacityThree === '0' ? this.setState({ svgOpacityThree: '1' }) : this.setState({ svgOpacityThree: '0' });
  }

  render() {
    return (
      <NavWrapper>
        <NavContainer>
          <NavItem>
            <Link to="/">HOME
          <NavSvg>
                <NavLine x1="4" y1="5" x2="74" y2="5" stroke="white" strokeWidth="4" strokeLinecap="round" />
              </NavSvg>
            </Link>
          </NavItem>
          <NavItem>
            <Link to="/about">ABOUT
          <NavSvg>
                <NavLine x1="4" y1="5" x2="74" y2="5" stroke="white" strokeWidth="4" strokeLinecap="round" />
              </NavSvg>
            </Link>
          </NavItem>
          <NavItem>
            <Link to="/perinatal-loss">PERINATAL<br /> LOSS
          <LongNavSvg>
                <NavLine x1="4" y1="5" x2="134" y2="5" stroke="white" strokeWidth="4" strokeLinecap="round" />
              </LongNavSvg>
            </Link>
          </NavItem>
          <NavItem>
            <Link to="/grief-counseling">GRIEF<br /> COUNSELING
          <LongNavSvg>
                <NavLine x1="4" y1="5" x2="134" y2="5" stroke="white" strokeWidth="4" strokeLinecap="round" />
              </LongNavSvg>
            </Link>
          </NavItem>
          <NavItem>
            <Link to="/ngo-crisis-counseling">NGO CRISIS<br /> COUNSELING
          <LongNavSvg>
                <NavLine x1="4" y1="5" x2="134" y2="5" stroke="white" strokeWidth="4" strokeLinecap="round" />
              </LongNavSvg>
            </Link>
          </NavItem>
          <NavItemDropContainer onClick={this.hoverToggle} onMouseEnter={this.hoverSvgToggle} onMouseLeave={this.hoverSvgToggle}>
            <p>PAST WORK</p>
            <span><EntypoChevronSmallDown /></span>
            <NavSvg style={{ opacity: this.state.svgOpacity}}>
                <NavLine x1="2" y1="5" x2="70" y2="5" stroke="white" strokeWidth="4" strokeLinecap="round" />
              </NavSvg>
          </NavItemDropContainer>
          <NavDropDown style={{ opacity: this.state.dropOpacity}}>
            <NavDropDownItem onMouseEnter={this.hoverSvgToggleTwo} onMouseLeave={this.hoverSvgToggleTwo}>
              <Link to="/disaster-mental-health">DISASTER MENTAL HEALTH
            <NavSvg style={{ opacity: this.state.svgOpacityTwo, width: '150px'}}>
                  <NavLine x1="27" y1="3" x2="112" y2="3" stroke="white" strokeWidth="4" strokeLinecap="round" />
                </NavSvg>
              </Link>
            </NavDropDownItem>
            <NavDropDownItem onMouseEnter={this.hoverSvgToggleThree} onMouseLeave={this.hoverSvgToggleThree}>
              <Link to="/palliative-care">PALLIATIVE CARE
              <NavSvg style={{ opacity: this.state.svgOpacityThree, width: '150px'}}>
                  <NavLine x1="27" y1="3" x2="112" y2="3" stroke="white" strokeWidth="4" strokeLinecap="round" />
                </NavSvg>
                </Link>
            </NavDropDownItem>
          </NavDropDown>
          <NavItem style={{ width: '90px' }}>
            <Link to="/contact">CONTACT
        <NavSvg style={{ width: '110px' }}>
                <NavLine x1="4" y1="5" x2="104" y2="5" stroke="white" strokeWidth="4" strokeLinecap="round" />
              </NavSvg>
            </Link>
          </NavItem>
        </NavContainer>
      </NavWrapper>
    );
  }
};

export default Nav;
