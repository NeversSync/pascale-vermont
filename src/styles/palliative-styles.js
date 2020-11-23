import styled from 'styled-components';
import {
  Wrapper,
  Title,
  Copy,
  Testimonial,
  ImageWrapper
} from '../components/Helpers';

const PalliativeWrapperSummary = styled(Wrapper)`
  background: ${p => p.isHome ? 'rgba(255,255,255)' : 'rgba(215, 212, 217, 0.3)'};
  grid-template-columns: 1fr 1fr;
  padding: 3% 2% 6% 2%;
  border-bottom: 1px solid rgba(100, 100, 100, 0.1);
`;

const PalliativeWrapper = styled(PalliativeWrapperSummary)`
  background: white;
`;

const PalliativeTitleWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 100px auto 1fr 1fr;
  grid-column: 1 / 2;

  @media (max-width: 900px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-column: 1 / -1;
    grid-row: 1 / 2;
    grid-template-rows: auto;
    grid-gap: 1em;
    padding: 40px 0px;
  }
`;

const PalliativeTitle = styled(Title)`
  grid-column: 4 / 5;
  grid-row: 2 / 3;
  justify-self: end;
  font-weight: 500;
  padding-bottom: 10px;
  text-align: right;

  @media (max-width: 900px) {
    grid-column: 2 / 4;
    text-align: center;
    grid-row: 1 / 2;
    justify-self: center;
    align-self: end;
  }
`;

const PalliativeSvgSummary = styled.svg`
  display: grid;
  height: 10px;
  grid-column: 2 / 3;
  grid-row: 2 / 3;
  align-self: end;

  @media (max-width: 900px) {
    grid-column: 2 / 4;
    width: 207px;
    grid-row: 1 / 2;
    justify-self: center;
  }
`;

const PalliativeSvg = styled(PalliativeSvgSummary)`
  width: 100%;
  grid-column: 4 / 5;

  @media (max-width: 900px) {
    grid-column: 2 / 4;
    width: 450px;
    grid-row: 1 / 2;
    justify-self: center;
  }
`;

const PalliativeLine = styled.line`
  stroke-linecap: round;
  opacity: 0.9;
`;

const PalliativeCopy = styled(Copy)`
  grid-column: 1 / -1;
  grid-row: 2 / 3;
  width: 55%;
  justify-self: center;
  margin-top: 5%;

  @media (max-width: 900px) {
    grid-column: 1 / -1;
    margin: 0;
    grid-row: 3 / 4;
    margin-top: 4%;
    width: 85%;
  }
`;

const PalliativeTestimonial = styled(Testimonial)`
  grid-column: 1 / -1;
  max-width: 50%;
  margin: 5% 2% 0% 2%;
  justify-self: center;

  @media (max-width: 900px) {
    grid-column: 1 / -1;
    grid-row: 4 / 5;
    margin: 20px 0;
    max-width: 85%;
  }
`;

const PalliativeImageWrapper = styled(ImageWrapper)`
  background: url("https://res.cloudinary.com/nicky-cloudinary/image/upload/f_auto,q_auto:best/v1538607973/PASCALE-VERMONT/aleksandr-ledogorov-310150-unsplash.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  grid-column: 2 / 3;
  grid-row: 1 / 2;
  justify-self: center;
  align-self: center;
  width: 80%;

  @media (max-width: 900px) {
    grid-column: 1 / -1;
    grid-row: 2 / 3;
    width: 85%;
    justify-self: center;
  }
`;

export {
  PalliativeWrapper,
  PalliativeWrapperSummary,
  PalliativeTitleWrapper,
  PalliativeTitle,
  PalliativeSvg,
  PalliativeLine,
  PalliativeCopy,
  PalliativeTestimonial,
  PalliativeImageWrapper,
  PalliativeSvgSummary
};
