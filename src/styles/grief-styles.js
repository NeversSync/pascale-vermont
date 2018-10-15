import styled from 'styled-components';
import { Wrapper, Title, Copy, Card, CTAButton, Testimonial, ImageWrapper } from '../components/Helpers';

const GriefWrapper = Wrapper.extend`
  grid-template-columns: 1fr 1fr;
  justify-items: center;
  padding: 3% 2% 6% 2%;
  border-bottom: 1px solid rgba(100, 100, 100, .1);
`

const GriefTitleWrapper = styled.div`
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

const GriefTitle = Title.extend`
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

const GriefSvg = styled.svg`
  display: grid;
  height: 10px;
  width: 100%;
  grid-column: 4 / 5;
  grid-row: 2 / 3;
  align-self: end;

  @media(max-width: 900px) {
    grid-column: 2 / 4;
    width: 453px;
    grid-row: 1 / 2;
    justify-self: center;
  }
`;

const GriefLine = styled.line`
  stroke-linecap: round;
  opacity: .9;
`;

const GriefCopy = Copy.extend`
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

const GriefTestimonial = Testimonial.extend`
  grid-column: 1 / 2;
  grid-row: 3 / 4;
  max-width: 80%;
  /* margin: 5% 2% 0% 2%; */
  margin: 8% 2% 0% 2%;
  justify-self: center;

  @media(max-width: 900px) {
    grid-column: 1 / -1;
    grid-row: 4 / 5;
    margin: 20px 0;
    max-width: 80%;
  }
`;

const SecondGriefTestimonial = Testimonial.extend`
  grid-column: 2 / 3;
  grid-row: 3 / 4;
  margin: 8% 2% 0% 2%;
  justify-self: center;
  max-width: 80%;

  @media(max-width: 900px) {
    grid-column: 1 / -1;
    grid-row: 5 / 6;
    margin: 20px 0;
    max-width: 80%;
  }
`;

const GriefImgSummary = styled.img`
  grid-column: 2 / 3;
  grid-row: 2 / 3;
  align-self: center;
  justify-self: center;
  max-width: 90%;
  border-radius: 5px;
  box-shadow: 0 15px 35px rgba(50, 50, 93, 0.1), 0 5px 15px rgba(0, 0, 0, 0.07);

  @media(max-width: 900px) {
    grid-column: 1 / -1;
    grid-row: 3 / 4;
    margin: 0;
    margin-top: 4%;
    max-width: 80%;
  }
`;
// const GriefImgSummary = styled.img`
//   grid-column: 2 / 3;
//   grid-row: 2 / 3;
//   align-self: center;
//   justify-self: center;
//   max-width: 90%;
//   border-radius: 5px;
//   box-shadow: 0 15px 35px rgba(50, 50, 93, 0.1), 0 5px 15px rgba(0, 0, 0, 0.07);

//   @media(max-width: 900px) {
//     grid-column: 1 / -1;
//     grid-row: 3 / 4;
//     margin: 0;
//     margin-top: 4%;
//     max-width: 80%;
//   }
// `;

const GriefImgWrapper = ImageWrapper.extend`
  background: url('https://res.cloudinary.com/nicky-cloudinary/image/upload/f_auto,q_auto:best/v1538607993/PASCALE-VERMONT/ravi-roshan-383162-unsplash.jpg');
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

export default { GriefWrapper, GriefTitle, GriefSvg, GriefLine, GriefTitleWrapper, GriefTestimonial, GriefImgWrapper, GriefCopy, GriefImgSummary, SecondGriefTestimonial };