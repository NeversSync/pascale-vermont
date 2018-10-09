import styled from "styled-components";

const NavWrapper = styled.div`
  display: grid;
  height: 100px;
  grid-column: 3 / 12;
  grid-row: 1 / 2;
  grid-template-columns: 2fr 5fr 1fr;
`;

const NavContainer = styled.ul`
  display: grid;
  row-gap: 0px;
  column-gap: 25px;
  grid-column: 2 / 3;
  grid-template-columns: repeat(10, 1fr);
  grid-template-rows: auto auto;
  color: white;
  text-shadow: 0 1px 5px rgba(47, 47, 47, 0.25);
  padding-top: 20px;
`;

const NavItem = styled.li`
  display: grid;
  grid-row: 1 / 2;
  width: 140px;
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

const NavItemDropContainer = NavItem.extend`
  grid-template-columns: 62px auto;
  align-items: center;
  /* padding-bottom: 12px; */
  cursor: pointer;
`;

const NavDropDown = styled.ul`
  grid-row: 2 / 3;
  grid-column: 6 / 7;
  transition: opacity 200ms ease;
  /* opacity: 0; */
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
`;

const LongNavSvg = NavSvg.extend`
  width: 140px;
`;

const NavLine = styled.line`
  stroke-linecap: round;
  opacity: 0.9;
`;

export default {
  NavLine,
  NavSvg,
  LongNavSvg,
  NavItem,
  NavContainer,
  NavWrapper,
  NavDropDown,
  NavDropDownItem,
  NavItemDropContainer
};
