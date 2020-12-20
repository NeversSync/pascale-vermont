import styled from 'styled-components';
import { Title, SubTitle } from '../components/Helpers';

const HeroContainer = styled.div`
  display: grid;
  height: 800px;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(8, 100px);
  background: linear-gradient(
    to right,
    rgba(72, 33, 97, 0.4) 0%,
    rgba(189, 68, 92, 0.4) 50%,
    rgba(204, 133, 0, 0.4) 100%
  );

  @media (max-width: 1500px) {
  height: 750px;
  }

  @media (max-width: 1100px) {
    height: 600px;
    grid-template-columns: repeat(6, 1fr);
  }

  @media (max-width: 900px) {
    height: fit-content;
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: 100px 100px 100px 100px;
  }
  @media (max-width: 700px) {
    max-height: 260px;
    height: fit-content;
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: 75px 75px 75px 75px;
  }
`;

const HeroImg = styled.img`
  display: grid;
  grid-column: 1 / -1;
  grid-row: 1 / -1;
  z-index: -1;
`;

const Heading = styled.div`
  display: grid;
  grid-column: 4 / 10;
  grid-row: 4 / 5;
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
  @media (max-width: 900px) {
    grid-column: 3 / 5;
    grid-row: 2 / 4;
  }
`;

const LandingSubtitle = styled(SubTitle)`
  margin-left: 12px;
`;

export { HeroContainer, HeroImg, Heading, LandingSubtitle };
