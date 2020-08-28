import styled from 'styled-components';

const NavContainer = styled.ul`
  display: grid;
  height: 100px;
  grid-column: 1 / -1;
  grid-row: 1 / 2;
  z-index: 1;
  row-gap: 0px;
  padding: 0px 1em;
  grid-template-columns: repeat(9, 160px);
  justify-content: center;
  grid-template-rows: auto auto;
  color: white;
  text-shadow: 0 1px 5px rgba(47, 47, 47, 0.25);
  padding-top: 20px;
  transition: background 0.5s ease-in-out, height 0.5s ease-in-out;

  @media (max-width: 1325px) {
    display: block;
    grid-column: 11 / 13;
    height: fit-content;
    border-radius: 5px;
  }

  @media (max-width: 1100px) {
    grid-column: 1 / -1;
    height: 100vh;
  }
`;

const MenuIcon = styled.div`
  display: none;
  width: 30px;
  height: 30px;
  color: white;
  cursor: pointer;
  transform: rotate(0deg);
  transition: 0.5s ease-in-out;

  @media (max-width: 1325px) {
    display: block;
    margin-left: 70%;
    margin-bottom: 10px;
    opacity: 1;
  }
  @media (max-width: 1100px) {
    margin-left: 93%;
  }
  @media (max-width: 900px) {
    margin-left: 90%;
  }
  @media (max-width: 500px) {
    margin-left: 80%;
  }
`;

const NavItem = styled.li`
  display: grid;
  grid-row: 1 / 2;
  width: 160px;
  text-align: center;
  font-size: 18px;
  letter-spacing: 1px;
  align-self: center;
  justify-content: center;
  line-height: 23px;
  list-style-type: none;
  border-bottom: 5px solid transparent;
  padding: 2px;
  padding-bottom: 5px;
  transition: visibility 0.5s ease-in-out, opacity 0.5s ease-in-out;
  cursor: pointer;

  @media (max-width: 1325px) {
    display: block;
    margin: 7px auto;
    padding: 0;
    opacity: 0;
    visibility: hidden;
    height: 9%;
  }

  @media (max-width: 900px) {
    grid-column: 1 / -1;
    font-size: 16px;
    line-height: 18px;
    margin: 0 auto;
    height: 9%;
  }
`;

const NavSvg = styled.svg`
  filter: drop-shadow(0 1px 5px rgba(47, 47, 47, 0.1));
  display: block;
  height: 13px;
  width: 80px;
  padding: 2px 0px;
  opacity: 0;
  transition: opacity 200ms ease;

  ${NavItem}:hover & {
    opacity: 1;
  }
`;

const NavItemDropContainer = styled(NavItem)`
  grid-template-columns: 62px auto;
  align-items: center;
  cursor: pointer;

  @media (max-width: 900px) {
    height: 9%;
  }
`;

const NavDropDown = styled.ul`
  grid-row: 2 / 3;
  grid-column: 6 / 7;
  transition: opacity 0.5s ease-in-out, height 0.5s ease-in-out;
`;

const NavDropDownItem = styled.li`
  width: 140px;
  text-align: center;
  font-size: 18px;
  letter-spacing: 3px;
  align-self: center;
  justify-content: center;
  line-height: 23px;
  list-style-type: none;
  margin: 7px auto;
  transition: opacity 0.5s ease-in-out, visibility 0.5s ease-in-out;
  padding: 0;
  cursor: pointer;

  @media (max-width: 1325px) {
    margin: 7px auto;
    padding: 0;
    opacity: 0;
  }

  @media (max-width: 900px) {
    font-size: 16px;
    line-height: 18px;
  }
`;

const LongNavSvg = styled(NavSvg)`
  width: 140px;
`;

const NavLine = styled.line`
  stroke-linecap: round;
  opacity: 0.9;
`;

export {
  NavLine,
  NavSvg,
  LongNavSvg,
  NavItem,
  NavContainer,
  NavDropDown,
  NavDropDownItem,
  NavItemDropContainer,
  MenuIcon
};
