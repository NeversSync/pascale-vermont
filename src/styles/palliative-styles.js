import styled from 'styled-components';
import { Wrapper, Title, Copy, Card, CTAButton, Testimonial, ImageWrapper } from '../components/Helpers';

const PalliativeWrapperSummary = Wrapper.extend`
  background: rgba(215, 212, 217, .3);
  grid-template-columns: 1fr 1fr;
  padding: 3% 2% 6% 2%;
  border-bottom: 1px solid rgba(100, 100, 100, .1);
`;

const PalliativeWrapper = PalliativeWrapperSummary.extend`
  background: white;
`;

const PalliativeTitleWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 100px auto 1fr 1fr;
  grid-column: 1 / 2;

   @media(max-width: 900px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-column: 1 / -1;
    grid-row: 1 / 2;
    grid-template-rows: 140px 80px;
  }
`;

const PalliativeTitle = Title.extend`
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
`

const PalliativeSvgSummary = styled.svg`
  display: grid;
  height: 10px;
  grid-column: 2 / 3;
  grid-row: 2 / 3;
  align-self: end;

   @media(max-width: 900px) {
    grid-column: 2 / 4;
    width: 207px;
    grid-row: 1 / 2;
    justify-self: center;
  }
`;

const PalliativeSvg = PalliativeSvgSummary.extend`
  width: 100%;
  grid-column: 4 / 5;

  @media(max-width: 900px) {
    grid-column: 2 / 4;
    width: 450px;
    grid-row: 1 / 2;
    justify-self: center;
  }
`;

const PalliativeLine = styled.line`
  stroke-linecap: round;
  opacity: .9;
`;

const PalliativeCopy = Copy.extend`
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
`

const PalliativeTestimonial = Testimonial.extend`
 grid-column: 1 / -1;
  max-width: 50%;
  margin: 5% 2% 0% 2%;
  justify-self: center;

  @media(max-width: 900px) {
    grid-column: 1 / -1;
    grid-row: 4 / 5;
    margin: 20px 0;
    max-width: 80%;
  }
`;

const PalliativeImageWrapper = ImageWrapper.extend`
  background: url('https://res.cloudinary.com/nicky-cloudinary/image/upload/c_crop,f_auto,h_260,q_auto:best,w_439,x_169/v1538607948/PASCALE-VERMONT/m34240199_pascale763.jpg');
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
    width: 70%;
    justify-self: center;
  }
`;


export default { PalliativeWrapper, PalliativeWrapperSummary, PalliativeTitleWrapper, PalliativeTitle, PalliativeSvg, PalliativeLine, PalliativeCopy, PalliativeTestimonial, PalliativeImageWrapper, PalliativeSvgSummary };