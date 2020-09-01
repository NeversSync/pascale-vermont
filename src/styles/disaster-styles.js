import styled from 'styled-components';
import {
  Wrapper,
  Title,
  Copy,
  CTAButton,
  Testimonial,
  ImageWrapper
} from '../components/Helpers';

const DisasterWrapper = styled(Wrapper)`
  background: ${p => p.isHome ? 'rgba(215, 212, 217, 0.3)' : 'rgba(255, 255, 255)'};
  grid-template-columns: 1fr 1fr;
  justify-items: center;
  padding: 3% 2% 6% 2%;
  border-bottom: 1px solid rgba(100, 100, 100, 0.1);
`;

const DisasterTitleWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 100px auto 1fr 1fr;
  grid-column: 1 / 2;

  @media (max-width: 900px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-column: 1 / -1;
    grid-row: 1 / 2;
    grid-template-rows: 140px 80px;
  }
`;

const DisasterTitle = styled(Title)`
  grid-column: 4 / 5;
  grid-row: 2 / 3;
  justify-self: end;
  font-weight: 500;
  padding-bottom: 10px;
  text-align: right;

  @media (max-width: 900px) {
    grid-column: 2 / 4;
    grid-row: 1 / 2;
    justify-self: center;
    align-self: end;
    text-align: center;
  }
`;

const DisasterSvgSummary = styled.svg`
  display: grid;
  height: 10px;
  width: 100%;
  grid-column: 4 / 5;
  grid-row: 2 / 3;
  align-self: end;

  @media (max-width: 900px) {
    grid-column: 2 / 4;
    width: 355px;
    grid-row: 1 / 2;
    justify-self: center;
  }
`;

const DisasterSvg = styled(DisasterSvgSummary)`
  width: 100%;
  grid-column: 4 / 5;

  @media (max-width: 900px) {
    grid-column: 2 / 4;
    width: 348px;
    grid-row: 1 / 2;
    justify-self: center;
  }
`;

const DisasterLine = styled.line`
  stroke-linecap: round;
  opacity: 0.9;
`;

const DisasterCTA = styled(CTAButton)`
  display: grid;
  grid-column: 3 / 4;
  grid-row: 2 / 3;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  align-self: center;
  justify-self: center;
  align-content: center;
  justify-content: center;
  color: white;
  font-size: 16px;
`;

const DisasterCopy = styled(Copy)`
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

const DisasterTestimonial = styled(Testimonial)`
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

const DisasterImageWrapper = styled(ImageWrapper)`
  background: url("https://res.cloudinary.com/nicky-cloudinary/image/upload/c_crop,f_auto,h_260,q_auto:best,w_439,x_169/v1538607948/PASCALE-VERMONT/m34240199_pascale763.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: right;
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

const DisasterImg = styled.img`
  grid-column: 2 / 3;
  grid-row: 2 / 3;
  align-self: center;
  justify-self: center;
  max-width: 70%;
  border-radius: 5px;
  box-shadow: 0 15px 35px rgba(50, 50, 93, 0.1), 0 5px 15px rgba(0, 0, 0, 0.07);

  @media (max-width: 900px) {
    grid-column: 1 / -1;
    grid-row: 3 / 4;
    margin: 0;
    margin-top: 4%;
    max-width: 85%;
  }
`;

export {
  DisasterWrapper,
  DisasterTitle,
  DisasterSvg,
  DisasterLine,
  DisasterCTA,
  DisasterTestimonial,
  DisasterImg,
  DisasterTitleWrapper,
  DisasterCopy,
  DisasterImageWrapper,
  DisasterSvgSummary
};
