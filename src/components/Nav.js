import React, { Component } from 'react';
import Link from 'gatsby-link';
import { EntypoChevronSmallDown } from 'react-entypo';
import Media from 'react-media';

import {
  NavLine,
  NavSvg,
  NavItem,
  NavContainer,
  LongNavSvg,
  NavDropDown,
  NavDropDownItem,
  NavItemDropContainer,
  MenuIcon
} from '../styles/nav-styles';

const windowGlobal = typeof window !== 'undefined' && window;

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      height: '0px',
      width: props.windowSize,
      dropOpacity: '0',
      svgOpacity: '0',
      svgOpacityTwo: '0',
      svgOpacityThree: '0',
      showHideSidenav: 'closed',
      navBackgroundVisible: 'rgba(215, 212, 217, 0)',
      navItemVisibility: 'hidden',
      mobileNavItemVisibility: 'hidden',
      navItemOpacity: '0',
      navHeight: '30vh',
      desktopNavItemVisibility: 'visible',
      desktopNavItemOpacity: '1'
    };

    this.hoverToggle = this.hoverToggle.bind(this);
    this.hoverSvgToggle = this.hoverSvgToggle.bind(this);
    this.hoverSvgToggleTwo = this.hoverSvgToggleTwo.bind(this);
    this.hoverSvgToggleThree = this.hoverSvgToggleThree.bind(this);
    this.subMenuToggle = this.subMenuToggle.bind(this);
    this.toggleSidenav = this.toggleSidenav.bind(this);
    this.handleWindowSizeChange = this.handleWindowSizeChange.bind(this);
    this.mobileSubMenuToggle = this.mobileSubMenuToggle.bind(this);
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleWindowSizeChange);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowSizeChange);
  }

  handleWindowSizeChange = () => {
    this.setState({ width: windowGlobal.innerWidth + 'px' });
  };

  subMenuToggle() {
    this.state.height === '0px'
      ? this.setState({ height: '150px', dropOpacity: '1' })
      : this.setState({ height: '0px', dropOpacity: '0' });
    this.state.navItemVisibility === 'hidden'
      ? this.setState({ navItemVisibility: 'visible' })
      : this.setState({ navItemVisibility: 'hidden' });
  }

  mobileSubMenuToggle() {
    this.state.height === '0px'
      ? this.setState({ height: '150px', dropOpacity: '1' })
      : this.setState({ height: '0px', dropOpacity: '0' });
    this.state.mobileNavItemVisibility === 'hidden'
      ? this.setState({ mobileNavItemVisibility: 'visible' })
      : this.setState({ mobileNavItemVisibility: 'hidden' });
  }

  hoverToggle() {
    this.state.dropOpacity === '1'
      ? this.setState({ dropOpacity: '0' })
      : this.setState({ dropOpacity: '1' });
  }

  hoverSvgToggle() {
    this.state.svgOpacity === '0'
      ? this.setState({ svgOpacity: '1' })
      : this.setState({ svgOpacity: '0' });
  }

  hoverSvgToggleTwo() {
    this.state.svgOpacityTwo === '0'
      ? this.setState({ svgOpacityTwo: '1' })
      : this.setState({ svgOpacityTwo: '0' });
  }

  hoverSvgToggleThree() {
    this.state.svgOpacityThree === '0'
      ? this.setState({ svgOpacityThree: '1' })
      : this.setState({ svgOpacityThree: '0' });
  }

  toggleSidenav() {
    this.state.showHideSidenav === 'open'
      ? this.setState({ showHideSidenav: 'closed' })
      : this.setState({ showHideSidenav: 'open' });
    this.state.navBackgroundVisible === 'rgba(215, 212, 217, 0)'
      ? this.setState({ navBackgroundVisible: 'rgba(215, 212, 217, 1)' })
      : this.setState({ navBackgroundVisible: 'rgba(215, 212, 217, 0)' });
    this.state.navItemVisibility === 'hidden'
      ? this.setState({ navItemVisibility: 'visible' })
      : this.setState({ navItemVisibility: 'hidden' });
    this.state.navItemOpacity === '0'
      ? this.setState({ navItemOpacity: '1' })
      : this.setState({ navItemOpacity: '0' });
    this.state.navHeight === '30vh'
      ? this.setState({ navHeight: '100vh' })
      : this.setState({ navHeight: '30vh' });
  }

  render() {
    const methods = {
      hoverToggle: this.hoverToggle,
      hoverSvgToggle: this.hoverSvgToggle,
      hoverSvgToggleTwo: this.hoverSvgToggleTwo,
      hoverSvgToggleThree: this.hoverSvgToggleThree,
      subMenuToggle: this.subMenuToggle,
      mobileNavToggle: this.mobileNavToggle,
      toggleSidenav: this.toggleSidenav,
      mobileSubMenuToggle: this.mobileSubMenuToggle
    };

    return (
      <Media query="(min-width: 1325px)">
        {matches =>
          matches ? (
            <DesktopNav {...this.state} {...methods} />
          ) : (
            <MobileNav {...this.state} {...methods} />
          )
        }
      </Media>
    );
  }
}

const DesktopNav = ({
  dropOpacity,
  svgOpacity,
  svgOpacityTwo,
  svgOpacityThree,
  showHideSidenav,
  hoverSvgToggle,
  hoverSvgToggleTwo,
  hoverSvgToggleThree,
  subMenuToggle,
  toggleSidenav,
  navItemVisibility,
  desktopNavItemVisibility,
  desktopNavItemOpacity
}) => (
  <NavContainer>
    <MenuIcon
      id="nav-icon3"
      onClick={toggleSidenav}
      className={showHideSidenav}
    >
      <span />
      <span />
      <span />
      <span />
    </MenuIcon>
    <NavItem
      style={{
        visibility: { desktopNavItemVisibility },
        opacity: { desktopNavItemOpacity }
      }}
    >
      <Link to="/">
        HOME
        <NavSvg>
          <NavLine
            x1="4"
            y1="5"
            x2="74"
            y2="5"
            stroke="white"
            strokeWidth="4"
            strokeLinecap="round"
          />
        </NavSvg>
      </Link>
    </NavItem>
    <NavItem
      style={{
        visibility: { desktopNavItemVisibility },
        opacity: { desktopNavItemOpacity }
      }}
    >
      <Link to="/about">
        ABOUT
        <NavSvg>
          <NavLine
            x1="4"
            y1="5"
            x2="74"
            y2="5"
            stroke="white"
            strokeWidth="4"
            strokeLinecap="round"
          />
        </NavSvg>
      </Link>
    </NavItem>
    <NavItem
      style={{
        visibility: { desktopNavItemVisibility },
        opacity: { desktopNavItemOpacity }
      }}
    >
      <Link to="/perinatal-loss">
        PERINATAL
        <br /> LOSS
        <LongNavSvg>
          <NavLine
            x1="4"
            y1="5"
            x2="134"
            y2="5"
            stroke="white"
            strokeWidth="4"
            strokeLinecap="round"
          />
        </LongNavSvg>
      </Link>
    </NavItem>
    <NavItem
      style={{
        visibility: { desktopNavItemVisibility },
        opacity: { desktopNavItemOpacity }
      }}
    >
      <Link to="/grief-counseling">
        GRIEF
        <br /> COUNSELING
        <LongNavSvg>
          <NavLine
            x1="4"
            y1="5"
            x2="134"
            y2="5"
            stroke="white"
            strokeWidth="4"
            strokeLinecap="round"
          />
        </LongNavSvg>
      </Link>
    </NavItem>
    <NavItem
      style={{
        visibility: { desktopNavItemVisibility },
        opacity: { desktopNavItemOpacity }
      }}
    >
      <Link to="/ngo-crisis-counseling">
        NGO CRISIS
        <br /> COUNSELING
        <LongNavSvg>
          <NavLine
            x1="4"
            y1="5"
            x2="134"
            y2="5"
            stroke="white"
            strokeWidth="4"
            strokeLinecap="round"
          />
        </LongNavSvg>
      </Link>
    </NavItem>
    <NavItemDropContainer
      onClick={subMenuToggle}
      onMouseEnter={hoverSvgToggle}
      onMouseLeave={hoverSvgToggle}
    >
      <p>PAST WORK</p>
      <span>
        <EntypoChevronSmallDown />
      </span>
      <NavSvg style={{ opacity: svgOpacity }}>
        <NavLine
          x1="2"
          y1="5"
          x2="70"
          y2="5"
          stroke="white"
          strokeWidth="4"
          strokeLinecap="round"
        />
      </NavSvg>
    </NavItemDropContainer>

    <NavDropDown
      style={{ visibility: navItemVisibility, opacity: dropOpacity }}
    >
      <NavDropDownItem
        onMouseEnter={hoverSvgToggleTwo}
        onMouseLeave={hoverSvgToggleTwo}
      >
        <Link to="/disaster-mental-health">
          DISASTER MENTAL HEALTH
          <NavSvg style={{ opacity: svgOpacityTwo, width: '150px' }}>
            <NavLine
              x1="27"
              y1="3"
              x2="112"
              y2="3"
              stroke="white"
              strokeWidth="4"
              strokeLinecap="round"
            />
          </NavSvg>
        </Link>
      </NavDropDownItem>
      <NavDropDownItem
        onMouseEnter={hoverSvgToggleThree}
        onMouseLeave={hoverSvgToggleThree}
      >
        <Link to="/palliative-care-support">
          PALLIATIVE CARE
          <NavSvg style={{ opacity: svgOpacityThree, width: '150px' }}>
            <NavLine
              x1="27"
              y1="3"
              x2="112"
              y2="3"
              stroke="white"
              strokeWidth="4"
              strokeLinecap="round"
            />
          </NavSvg>
        </Link>
      </NavDropDownItem>
    </NavDropDown>

    <NavItem
      style={{
        width: '85px',
        visibility: { desktopNavItemVisibility },
        opacity: { desktopNavItemOpacity }
      }}
    >
      <Link to="/contact">
        CONTACT
        <NavSvg style={{ width: '110px' }}>
          <NavLine
            x1="4"
            y1="5"
            x2="104"
            y2="5"
            stroke="white"
            strokeWidth="4"
            strokeLinecap="round"
          />
        </NavSvg>
      </Link>
    </NavItem>
  </NavContainer>
);

const MobileNav = ({
  height,
  dropOpacity,
  svgOpacity,
  svgOpacityTwo,
  svgOpacityThree,
  showHideSidenav,
  navBackgroundVisible,
  navItemVisibility,
  mobileNavItemVisibility,
  navItemOpacity,
  hoverSvgToggle,
  hoverSvgToggleTwo,
  hoverSvgToggleThree,
  mobileSubMenuToggle,
  toggleSidenav,
  navHeight
}) => (
  <NavContainer style={{ background: navBackgroundVisible, height: navHeight }}>
    <MenuIcon
      id="nav-icon3"
      onClick={toggleSidenav}
      className={showHideSidenav}
    >
      <span />
      <span />
      <span />
      <span />
    </MenuIcon>
    <NavItem style={{ visibility: navItemVisibility, opacity: navItemOpacity }}>
      <Link to="/">
        HOME
        <NavSvg style={{ width: '120px' }}>
          <NavLine
            x1="32"
            y1="5"
            x2="100"
            y2="5"
            stroke="white"
            strokeWidth="4"
            strokeLinecap="round"
          />
        </NavSvg>
      </Link>
    </NavItem>
    <NavItem style={{ visibility: navItemVisibility, opacity: navItemOpacity }}>
      <Link to="/about">
        ABOUT
        <NavSvg style={{ width: '120px' }}>
          <NavLine
            x1="32"
            y1="5"
            x2="100"
            y2="5"
            stroke="white"
            strokeWidth="4"
            strokeLinecap="round"
          />
        </NavSvg>
      </Link>
    </NavItem>
    <NavItem style={{ visibility: navItemVisibility, opacity: navItemOpacity }}>
      <Link to="/perinatal-loss">
        PERINATAL
        <br /> LOSS
        <LongNavSvg>
          <NavLine
            x1="4"
            y1="5"
            x2="134"
            y2="5"
            stroke="white"
            strokeWidth="4"
            strokeLinecap="round"
          />
        </LongNavSvg>
      </Link>
    </NavItem>
    <NavItem style={{ visibility: navItemVisibility, opacity: navItemOpacity }}>
      <Link to="/grief-counseling">
        GRIEF
        <br /> COUNSELING
        <LongNavSvg>
          <NavLine
            x1="4"
            y1="5"
            x2="134"
            y2="5"
            stroke="white"
            strokeWidth="4"
            strokeLinecap="round"
          />
        </LongNavSvg>
      </Link>
    </NavItem>
    <NavItem style={{ visibility: navItemVisibility, opacity: navItemOpacity }}>
      <Link to="/ngo-crisis-counseling">
        NGO CRISIS
        <br /> COUNSELING
        <LongNavSvg>
          <NavLine
            x1="4"
            y1="5"
            x2="134"
            y2="5"
            stroke="white"
            strokeWidth="4"
            strokeLinecap="round"
          />
        </LongNavSvg>
      </Link>
    </NavItem>
    <NavItemDropContainer
      onClick={mobileSubMenuToggle}
      onMouseEnter={hoverSvgToggle}
      onMouseLeave={hoverSvgToggle}
      style={{ visibility: navItemVisibility, opacity: navItemOpacity }}
    >
      <p>PAST WORK</p>
      <span>
        <EntypoChevronSmallDown />
      </span>
      <NavSvg style={{ opacity: svgOpacity, width: '150px' }}>
        <NavLine
          x1="8"
          y1="0"
          x2="126"
          y2="0"
          stroke="white"
          strokeWidth="4"
          strokeLinecap="round"
        />
      </NavSvg>
    </NavItemDropContainer>
    <NavDropDown
      style={{
        visibility: mobileNavItemVisibility,
        opacity: dropOpacity,
        height: height
      }}
    >
      <NavDropDownItem
        onMouseEnter={hoverSvgToggleTwo}
        onMouseLeave={hoverSvgToggleTwo}
        style={{ visibility: mobileNavItemVisibility, opacity: navItemOpacity }}
      >
        <Link to="/disaster-mental-health">
          DISASTER MENTAL HEALTH
          <NavSvg
            style={{
              visibility: mobileNavItemVisibility,
              opacity: svgOpacityTwo,
              width: '150px'
            }}
          >
            <NavLine
              x1="27"
              y1="3"
              x2="112"
              y2="3"
              stroke="white"
              strokeWidth="4"
              strokeLinecap="round"
            />
          </NavSvg>
        </Link>
      </NavDropDownItem>
      <NavDropDownItem
        onMouseEnter={hoverSvgToggleThree}
        onMouseLeave={hoverSvgToggleThree}
        style={{ visibility: mobileNavItemVisibility, opacity: navItemOpacity }}
      >
        <Link to="/palliative-care-support">
          PALLIATIVE CARE
          <NavSvg style={{ opacity: svgOpacityThree, width: '150px' }}>
            <NavLine
              x1="27"
              y1="3"
              x2="112"
              y2="3"
              stroke="white"
              strokeWidth="4"
              strokeLinecap="round"
            />
          </NavSvg>
        </Link>
      </NavDropDownItem>
    </NavDropDown>
    <NavItem style={{ visibility: navItemVisibility, opacity: navItemOpacity }}>
      <Link to="/contact">
        CONTACT
        <NavSvg style={{ width: '130px' }}>
          <NavLine
            x1="23"
            y1="5"
            x2="111"
            y2="5"
            stroke="white"
            strokeWidth="4"
            strokeLinecap="round"
          />
        </NavSvg>
      </Link>
    </NavItem>
  </NavContainer>
);

export default Nav;
