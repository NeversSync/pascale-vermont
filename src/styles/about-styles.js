import styled from 'styled-components';
import {
  Wrapper,
  Title,
  Copy,
  Card,
  CTAButton,
  Testimonial,
  ImageWrapper
} from '../components/Helpers';

const AboutWrapper = styled(Wrapper)`
  grid-template-columns: 1fr 1fr;
  justify-items: center;
  border-top: 1px solid rgba(100, 100, 100, 0.1);
  border-bottom: 1px solid rgba(100, 100, 100, 0.1);
  padding: 2% 4% 6% 4%;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto;
  }
`;

const AboutTitleWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 100px auto 1fr 1fr;
  grid-column: 1 / 2;

  @media (max-width: 900px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-column: 1 / -1;
    grid-row: 1 / 2;
    grid-template-rows: 80px 80px;
  }
`;

const AboutSummaryTitle = styled(Title)`
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

const AboutTitle = styled(AboutSummaryTitle)`
  grid-row: 2 / 3;
`;

const AboutSummarySvg = styled.svg`
  display: grid;
  height: 8px;
  width: 100%;
  grid-column: 4 / 5;
  grid-row: 1 / 2;
  align-self: end;

  @media (max-width: 900px) {
    grid-column: 2 / 4;
    width: 286px;
    grid-row: 1 / 2;
    justify-self: center;
  }
`;

const AboutSvg = styled(AboutSummarySvg)`
  grid-row: 2 / 3;

  @media (max-width: 900px) {
    width: 269px;
  }
`;

const AboutLine = styled.line`
  stroke-linecap: round;
  opacity: 0.9;
`;

const AboutCopy = styled(Copy)`
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

const AboutCTA = styled(CTAButton)`
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

const AboutSummaryImg = styled(ImageWrapper)`
  background: url("https://res.cloudinary.com/nicky-cloudinary/image/upload/v1595222674/PASCALE-VERMONT/Pascale-Vermont-Headshot.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top;
  grid-column: 2 / 3;
  grid-row: 2 / 3;
  align-self: flex-start;
  justify-self: center;
  width: 70%;
  /* height: 400px; */
  height: calc(100% - 4%);

  border-radius: 5px;
  margin-top: 4%;
  box-shadow: 0 15px 35px rgba(50, 50, 93, 0.1), 0 5px 15px rgba(0, 0, 0, 0.07);

  @media (max-width: 900px) {
    grid-column: 1 / -1;
    grid-row: 2 / 3;
    margin: 4% 0;
    max-width: 75%;
    height: 450px;
  }
`;

const AboutImageWrapper = styled(ImageWrapper)`
  background: url("https://res.cloudinary.com/nicky-cloudinary/image/upload/v1595222674/PASCALE-VERMONT/Pascale-Vermont-Headshot.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top;
  grid-column: 2 / 3;
  grid-row: 1 / 2;
  justify-self: center;
  align-self: center;
  width: 40%;

  @media (max-width: 1200px) {
    width: 75%;
  }

  @media (max-width: 900px) {
    grid-column: 1 / -1;
    grid-row: 2 / 3;
    width: 75%;
    height: 450px;
    justify-self: center;
  }

`;

const AboutTestimonialSummary = styled(Testimonial)`
  grid-row: 2 / 3;
  grid-column: 1 / 2;
  max-width: 80%;
  margin: 1% 2% 0% 2%;
  justify-self: center;

  @media (max-width: 900px) {
    grid-column: 1 / -1;
    margin: 40px 0;
    max-width: 85%;
    grid-row: 5 / 6;
  }
`;

const AboutTestimonial = styled(Testimonial)`
  grid-column: 1 / -1;
  max-width: 50%;
  margin: 4% 2% 0% 2%;
  justify-self: center;

  @media (max-width: 900px) {
    grid-column: 1 / -1;
    margin: 40px 0;
    max-width: 85%;
  }
`;

export {
  AboutWrapper,
  AboutTitleWrapper,
  AboutImageWrapper,
  AboutSummaryTitle,
  AboutSummarySvg,
  AboutLine,
  AboutCopy,
  AboutCTA,
  AboutTestimonial,
  AboutTitle,
  AboutSvg,
  AboutSummaryImg,
  AboutTestimonialSummary
};
