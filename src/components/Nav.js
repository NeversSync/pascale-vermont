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
  NavDropDown2,
  NavDropDownItem,
  NavItemDropContainer,
  MenuIcon
} from '../styles/nav-styles';

const windowGlobal = typeof window !== 'undefined' && window;


// TODO: fix dropdown state reactions
// TODO: Ensure mobile links are correct as well

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      height: '0px',
      width: props.windowSize,
      dropOpacity: '0',
      drop2Opacity: '0',
      svgOpacity: '0',
      svgOpacityTwo: '0',
      svgOpacityThree: '0',
      svgOpacityFour: '0',
      svgOpacityFive: '0',
      svgOpacitySix: '0',
      svgOpacitySeven: '0',
      svgOpacityEight: '0',
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
    this.hoverSvgToggleFour = this.hoverSvgToggleFour.bind(this);
    this.hoverSvgToggleFive = this.hoverSvgToggleFive.bind(this);
    this.hoverSvgToggleSix = this.hoverSvgToggleSix.bind(this);
    this.hoverSvgToggleSeven = this.hoverSvgToggleSeven.bind(this);
    this.hoverSvgToggleEight = this.hoverSvgToggleEight.bind(this);
    this.subMenuToggle = this.subMenuToggle.bind(this);
    this.subMenu2Toggle = this.subMenu2Toggle.bind(this);
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

  subMenu2Toggle() {
    this.state.height === '0px'
      ? this.setState({ height: '150px', drop2Opacity: '1' })
      : this.setState({ height: '0px', drop2Opacity: '0' });
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

  hoverSvgToggleFour() {
    this.state.svgOpacityFour === '0'
      ? this.setState({ svgOpacityFour: '1' })
      : this.setState({ svgOpacityFour: '0' });
  }
  hoverSvgToggleFive() {
    this.state.svgOpacityFive === '0'
      ? this.setState({ svgOpacityFive: '1' })
      : this.setState({ svgOpacityFive: '0' });
  }
  hoverSvgToggleSix() {
    this.state.svgOpacitySix === '0'
      ? this.setState({ svgOpacitySix: '1' })
      : this.setState({ svgOpacitySix: '0' });
  }
  hoverSvgToggleSeven() {
    this.state.svgOpacitySeven === '0'
      ? this.setState({ svgOpacitySeven: '1' })
      : this.setState({ svgOpacitySeven: '0' });
  }
  hoverSvgToggleEight() {
    this.state.svgOpacityEight === '0'
      ? this.setState({ svgOpacityEight: '1' })
      : this.setState({ svgOpacityEight: '0' });
  }

  toggleSidenav() {
    this.state.showHideSidenav === 'open'
      ? this.setState({ showHideSidenav: 'closed' })
      : this.setState({ showHideSidenav: 'open' });
    this.state.navBackgroundVisible === 'rgba(215, 212, 217, 0)'
      ? this.setState({ navBackgroundVisible: 'linear-gradient(to right, hsla(277, 25%, 25%, 1) 0%,hsla(348, 25%, 50%, 1) 50%,hsla(39, 75%, 40%, 1) 100%)' })
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
      hoverSvgToggleFour: this.hoverSvgToggleFour,
      hoverSvgToggleFive: this.hoverSvgToggleFive,
      hoverSvgToggleSix: this.hoverSvgToggleSix,
      hoverSvgToggleSeven: this.hoverSvgToggleSeven,
      hoverSvgToggleEight: this.hoverSvgToggleEight,
      subMenuToggle: this.subMenuToggle,
      subMenu2Toggle: this.subMenu2Toggle,
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
  drop2Opacity,
  svgOpacity,
  svgOpacityTwo,
  svgOpacityThree,
  svgOpacityFour,
  svgOpacityFive,
  svgOpacitySix,
  svgOpacitySeven,
  svgOpacityEight,
  showHideSidenav,
  hoverSvgToggle,
  hoverSvgToggleTwo,
  hoverSvgToggleThree,
  hoverSvgToggleFour,
  hoverSvgToggleFive,
  hoverSvgToggleSix,
  hoverSvgToggleSeven,
  hoverSvgToggleEight,
  subMenuToggle,
  subMenu2Toggle,
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
            x1="40"
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
            x1="35"
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

    <NavItemDropContainer
      onClick={subMenu2Toggle}
      onMouseEnter={hoverSvgToggleFour}
      onMouseLeave={hoverSvgToggleFour}
    >
      <p>PREGNANCY &
        <br /> INFANCY LOSS</p>
      <span>
        <EntypoChevronSmallDown />
      </span>
      <NavSvg style={{ opacity: svgOpacityFour }}>
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

    <NavDropDown2
      style={{ visibility: navItemVisibility, opacity: drop2Opacity }}
    >
      <NavDropDownItem
        onMouseEnter={hoverSvgToggleFive}
        onMouseLeave={hoverSvgToggleFive}
      >
        <Link to="/pregnancy-&-infancy-loss/grief-counseling">
          Grief Counseling
          <LongNavSvg style={{ opacity: svgOpacityFive, width: '150px' }}>
            <NavLine
              x1="4"
              y1="5"
              x2="134"
              y2="5"
              stroke="#221C26"
              strokeWidth="4"
              strokeLinecap="round"
            />
          </LongNavSvg>
        </Link>
      </NavDropDownItem>
      <NavDropDownItem
        onMouseEnter={hoverSvgToggleSix}
        onMouseLeave={hoverSvgToggleSix}
      >
        <Link to="/surviving-the-unimaginable-book">
          Book
          <NavSvg style={{ opacity: svgOpacitySix, width: '150px' }}>
            <NavLine
              x1="4"
              y1="5"
              x2="134"
              y2="5"
              stroke="#221C26"
              strokeWidth="4"
              strokeLinecap="round"
            />
          </NavSvg>
        </Link>
      </NavDropDownItem>
      <NavDropDownItem
        onMouseEnter={hoverSvgToggleSeven}
        onMouseLeave={hoverSvgToggleSeven}
      >
        <Link to="/pregnancy-&-infancy-loss/media">
          Media
          <NavSvg style={{ opacity: svgOpacitySeven, width: '150px' }}>
            <NavLine
              x1="4"
              y1="5"
              x2="134"
              y2="5"
              stroke="#221C26"
              strokeWidth="4"
              strokeLinecap="round"
            />
          </NavSvg>
        </Link>
      </NavDropDownItem>
      <NavDropDownItem
        onMouseEnter={hoverSvgToggleEight}
        onMouseLeave={hoverSvgToggleEight}
      >
        <Link to="/pregnancy-&-infancy-loss/resources">
          Resources
          <NavSvg style={{ opacity: svgOpacityEight, width: '150px' }}>
            <NavLine
              x1="4"
              y1="5"
              x2="134"
              y2="5"
              stroke="#221C26"
              strokeWidth="4"
              strokeLinecap="round"
            />
          </NavSvg>
        </Link>
      </NavDropDownItem>
    </NavDropDown2>


    <NavItem
      style={{
        visibility: { desktopNavItemVisibility },
        opacity: { desktopNavItemOpacity }
      }}
    >
      <Link to="/adult-grief-counseling">
        ADULT GRIEF
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
              stroke="#221C26"
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
              stroke="#221C26"
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
      </Link>
    </NavItem>
    <NavItem style={{ visibility: navItemVisibility, opacity: navItemOpacity }}>
      <Link to="/about">
        ABOUT
      </Link>
    </NavItem>
    <NavItem style={{ visibility: navItemVisibility, opacity: navItemOpacity }}>
      <Link to="/surviving-the-unimaginable-book">
    BABY LOSS BOOK
      </Link>
    </NavItem>
    <NavItem style={{ visibility: navItemVisibility, opacity: navItemOpacity }}>
      <Link to="/pregnancy-&-infancy-loss/grief-counseling">
        PREGNANCY &
        <br /> INFANT LOSS
      </Link>
    </NavItem>
    <NavItem style={{ visibility: navItemVisibility, opacity: navItemOpacity }}>
      <Link to="/adult-grief-counseling">
        GRIEF
        <br /> COUNSELING
      </Link>
    </NavItem>
    <NavItem style={{ visibility: navItemVisibility, opacity: navItemOpacity }}>
      <Link to="/ngo-crisis-counseling">
        NGO CRISIS
        <br /> COUNSELING
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
        </Link>
      </NavDropDownItem>
      <NavDropDownItem
        onMouseEnter={hoverSvgToggleThree}
        onMouseLeave={hoverSvgToggleThree}
        style={{ visibility: mobileNavItemVisibility, opacity: navItemOpacity }}
      >
        <Link to="/palliative-care-support">
          PALLIATIVE CARE
        </Link>
      </NavDropDownItem>
    </NavDropDown>
    <NavItem style={{ visibility: navItemVisibility, opacity: navItemOpacity }}>
      <Link to="/contact">
        CONTACT
      </Link>
    </NavItem>
  </NavContainer>
);

export default Nav;
