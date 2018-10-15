import styled from 'styled-components';
import { Wrapper, Title, Copy, Card, CTAButton, Testimonial, ImageWrapper } from '../components/Helpers';

const PerinatalWrapper = styled(Wrapper)`
  background: rgba(215, 212, 217, .3);
  grid-template-columns: 1fr 1fr;
  padding: 3% 2% 6% 2%;
  border-bottom: 1px solid rgba(100, 100, 100, .1);
`;

const PerinatalTitleWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 100px auto 1fr 1fr;
  grid-column: 1 / 2;

   @media(max-width: 900px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-column: 1 / -1;
    grid-row: 1 / 2;
    grid-template-rows: 80px 80px;
  }
`;

const PerinatalTitle = styled(Title)`
  grid-column: 4 / 5;
  grid-row: 2 / 3;
  justify-self: end;
  font-weight: 500;
  padding-bottom: 10px;
  text-align: right;

  @media(max-width: 900px) {
    grid-column: 2 / 4;
    text-align: center;
    grid-row: 1 / 2;
    justify-self: center;
    align-self: end;
  }
`;

const PerinatalSvgSummary = styled.svg`
  display: grid;
  grid-column: 2 / 3;
  grid-row: 2 / 3;
  height: 10px;
  align-self: end;

  @media(max-width: 900px) {
    grid-column: 2 / 4;
    width: 184px;
    grid-row: 1 / 2;
    justify-self: center;
  }
`;

const PerinatalSvg = styled(PerinatalSvgSummary)`
  width: 100%;
  grid-column: 4 / 5;

  @media(max-width: 900px) {
    grid-column: 2 / 4;
    width: 368px;
    grid-row: 1 / 2;
    justify-self: center;
  }
`;

const PerinatalLine = styled.line`
  stroke-linecap: round;
  opacity: .9;
`;

const PerinatalCopy = styled(Copy)`
  grid-column: 1 / -1;
  grid-row: 2 / 3;
  width: 55%;
  justify-self: center;
  margin-top: 5%;

  @media(max-width: 900px) {
      grid-column: 1 / -1;
      margin: 0;
      grid-row: 3 / 4;
      margin-top: 4%;
      width: 85%;
  }
`;

const PerinatalTestimonial = styled(Testimonial)`
  grid-column: 1 / 2;
  grid-row: 3 / 4;
  max-width: 80%;
  margin: 5% 2% 0% 2%;
  margin: 8% 2% 0% 2%;
  justify-self: center;

  @media(max-width: 900px) {
    grid-column: 1 / -1;
    grid-row: 4 / 5;
    margin: 20px 0;
    max-width: 85%;
  }
`;

const SecondPerinatalTestimonial = styled(Testimonial)`
  grid-column: 2 / 3;
  grid-row: 3 / 4;
  margin: 8% 2% 0% 2%;
  justify-self: center;
  max-width: 80%;

  @media(max-width: 900px) {
    grid-column: 1 / -1;
    grid-row: 5 / 6;
    margin: 20px 0;
    max-width: 85%;
  }
`;

const PerinatalImageWrapper = styled(ImageWrapper)`
  background: url('https://res.cloudinary.com/nicky-cloudinary/image/upload/f_auto,q_auto:best/v1538607950/PASCALE-VERMONT/Parents.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center; 
  grid-column: 2 / 3;
  grid-row: 1 / 2;
  justify-self: center;
  align-self: center;
  width: 80%;

   @media(max-width: 900px) {
    grid-column: 1 / -1;
    grid-row: 2 / 3;
    width: 85%;
    justify-self: center;
  }
`;


export { PerinatalWrapper, PerinatalTitleWrapper, PerinatalTitle, PerinatalSvg, PerinatalLine, PerinatalCopy, PerinatalTestimonial, PerinatalImageWrapper, SecondPerinatalTestimonial, PerinatalSvgSummary };