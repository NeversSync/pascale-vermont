import React, { Component } from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import { EntypoChevronSmallDown, EntypoMenu } from 'react-entypo';

import { NavLine, NavSvg, NavItem, NavContainer, NavWrapper, LongNavSvg, NavDropDown, NavDropDownItem, NavItemDropContainer, MenuIcon } from '../styles/nav-styles';


class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      height: '0px',
      mobileNav: false,
      subMenuOffScreen: 'translatex(175px)',
      dropOpacity: '0',
      svgOpacity: '0',
      svgOpacityTwo: '0',
      svgOpacityThree: '0',
      showHideSidenav: 'closed'
    };

    this.hoverToggle = this.hoverToggle.bind(this);
    this.hoverSvgToggle = this.hoverSvgToggle.bind(this);
    this.hoverSvgToggleTwo = this.hoverSvgToggleTwo.bind(this);
    this.hoverSvgToggleThree = this.hoverSvgToggleThree.bind(this);
    this.subMenuToggle = this.subMenuToggle.bind(this);
    this.mobileNavToggle = this.mobileNavToggle.bind(this);
    this.toggleSidenav = this.toggleSidenav.bind(this);
  };

  mobileNavToggle() {

  }

  subMenuToggle() {
    this.state.height === '0px' ? this.setState({ height: '150px', subMenuOffScreen: 'translatex(0px', dropOpacity: '1' }) : this.setState({ height: '0px', subMenuOffScreen: 'translatex(175px', dropOpacity: '0' });
  }

  hoverToggle() {
    this.state.dropOpacity === '1' ? this.setState({ dropOpacity: '0' }) : this.setState({ dropOpacity: '1' });
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

  toggleSidenav() {
    this.state.showHideSidenav === 'open' ? this.setState({ 'showHideSidenav': 'closed' }) : this.setState({ 'showHideSidenav': 'open' });
  }

  render() {

    return (
      <NavWrapper>

        <NavContainer>
          {/* <MenuIcon>
            <EntypoMenu style={{'width': '1.75em', 'height': '1.75em'}}/>
          </MenuIcon> */}

          <MenuIcon id="nav-icon3" onClick={this.toggleSidenav} className={this.state.showHideSidenav}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </MenuIcon>

          <NavItem>
            <Link to="/">HOME
            {this.state.width >= 1325 ?
                <NavSvg>
                  <NavLine x1="4" y1="5" x2="74" y2="5" stroke="white" strokeWidth="4" strokeLinecap="round" />
                </NavSvg>
                :
                <NavSvg style={{ width: '120px' }}>
                  <NavLine x1="32" y1="5" x2="100" y2="5" stroke="white" strokeWidth="4" strokeLinecap="round" />
                </NavSvg>
              }
            </Link>
          </NavItem>
          <NavItem>
            <Link to="/about">ABOUT
          {this.state.width >= 1325 ?
                <NavSvg>
                  <NavLine x1="4" y1="5" x2="74" y2="5" stroke="white" strokeWidth="4" strokeLinecap="round" />
                </NavSvg>
                :
                <NavSvg style={{ width: '120px' }}>
                  <NavLine x1="32" y1="5" x2="100" y2="5" stroke="white" strokeWidth="4" strokeLinecap="round" />
                </NavSvg>
              }
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
          <NavItemDropContainer onClick={this.subMenuToggle} onMouseEnter={this.hoverSvgToggle} onMouseLeave={this.hoverSvgToggle}>
            <p>PAST WORK</p>
            <span><EntypoChevronSmallDown /></span>

            {this.state.width >= 1325 ?
              <NavSvg style={{ opacity: this.state.svgOpacity }}>
                <NavLine x1="2" y1="5" x2="70" y2="5" stroke="white" strokeWidth="4" strokeLinecap="round" />
              </NavSvg>
              :
              <NavSvg style={{ opacity: this.state.svgOpacity, width: '150px' }}>
                <NavLine x1="8" y1="0" x2="126" y2="0" stroke="white" strokeWidth="4" strokeLinecap="round" />
              </NavSvg>}
          </NavItemDropContainer>

          {this.state.width >= 1325 ?
            <NavDropDown style={{ opacity: this.state.dropOpacity }}>
              <NavDropDownItem onMouseEnter={this.hoverSvgToggleTwo} onMouseLeave={this.hoverSvgToggleTwo}>

                <Link to="/disaster-mental-health">DISASTER MENTAL HEALTH
                <NavSvg style={{ opacity: this.state.svgOpacityTwo, width: '150px' }}>
                    <NavLine x1="27" y1="3" x2="112" y2="3" stroke="white" strokeWidth="4" strokeLinecap="round" />
                  </NavSvg>
                </Link>
              </NavDropDownItem>
              <NavDropDownItem onMouseEnter={this.hoverSvgToggleThree} onMouseLeave={this.hoverSvgToggleThree}>
                <Link to="/palliative-care">PALLIATIVE CARE
              <NavSvg style={{ opacity: this.state.svgOpacityThree, width: '150px' }}>
                    <NavLine x1="27" y1="3" x2="112" y2="3" stroke="white" strokeWidth="4" strokeLinecap="round" />
                  </NavSvg>
                </Link>
              </NavDropDownItem>
            </NavDropDown>
            :
            <NavDropDown style={{ opacity: this.state.dropOpacity, height: this.state.height, transform: this.state.subMenuOffScreen }}>
              <NavDropDownItem onMouseEnter={this.hoverSvgToggleTwo} onMouseLeave={this.hoverSvgToggleTwo}>
                <Link to="/disaster-mental-health">DISASTER MENTAL HEALTH
                <NavSvg style={{ opacity: this.state.svgOpacityTwo, width: '150px' }}>
                    <NavLine x1="27" y1="3" x2="112" y2="3" stroke="white" strokeWidth="4" strokeLinecap="round" />
                  </NavSvg>
                </Link>
              </NavDropDownItem>
              <NavDropDownItem onMouseEnter={this.hoverSvgToggleThree} onMouseLeave={this.hoverSvgToggleThree}>
                <Link to="/palliative-care">PALLIATIVE CARE
              <NavSvg style={{ opacity: this.state.svgOpacityThree, width: '150px' }}>
                    <NavLine x1="27" y1="3" x2="112" y2="3" stroke="white" strokeWidth="4" strokeLinecap="round" />
                  </NavSvg>
                </Link>
              </NavDropDownItem>
            </NavDropDown>
          }

          {this.state.width >= 1325 ?
            <NavItem style={{ width: '90px' }}>
              <Link to="/contact">CONTACT
            <NavSvg style={{ width: '110px' }}>
                  <NavLine x1="4" y1="5" x2="104" y2="5" stroke="white" strokeWidth="4" strokeLinecap="round" />
                </NavSvg>
              </Link>
            </NavItem>
            :
            <NavItem>
              <Link to="/contact">CONTACT
            <NavSvg style={{ width: '130px' }}>
                  <NavLine x1="23" y1="5" x2="111" y2="5" stroke="white" strokeWidth="4" strokeLinecap="round" />
                </NavSvg>
              </Link>
            </NavItem>
          }
        </NavContainer>
      </NavWrapper>
    );
  }
};

export default Nav;
