import styled from 'styled-components';
import { Title, SubTitle } from '../components/Helpers';

const HeroContainer = styled.div`
  display: grid;
  height: 650px;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: 100px 100px 100px 100px 100px 100px;
  background: linear-gradient(to right, rgba(72, 33, 97, .4) 0%, rgba(189, 68, 92, 0.4) 50%, rgba(204, 133, 0, 0.4) 100%);

  @media (max-width: 1100px) {
    height: 550px;
    grid-template-columns: repeat(6, 1fr);
  }
`

const HeroImg = styled.img`
  display: grid;
  grid-column: 1 / -1;
  grid-row: 1 / -1;
  z-index: -1;

  @media (max-width: 1100px) {
    /* grid-template-columns: repeat(8, 1fr); */
  }
`

const Heading = styled.div`
  display: grid;
  grid-column: 4 / 10;
  grid-row: 2 / 6;
  justify-content: center;
  align-content: center;
  text-align: center;
  grid-gap: 10px;
  text-shadow: 0px 2px 15px rgba(0, 0, 0, 0.3);
  color: white;
  text-transform: uppercase;

  @media (max-width: 1100px) {
    grid-column: 2 / 6;
  }
`

const LandingSubtitle = SubTitle.extend`
  margin-left: 12px;
`;

export default { HeroContainer, HeroImg, Heading, LandingSubtitle };