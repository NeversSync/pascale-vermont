import styled from 'styled-components';

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

  const LongNavSvg = NavSvg.extend`
    width: 140px;
  `;

  const NavLine = styled.line`
    stroke-linecap: round;
    opacity: .9;
  `;

  export default { NavLine, NavSvg, LongNavSvg, NavItem, NavContainer, NavWrapper };