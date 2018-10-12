import styled from 'styled-components';
import { Wrapper, Title, Copy, Card, CTAButton, Testimonial } from '../components/Helpers';

const AboutWrapper = Wrapper.extend`
  grid-template-columns: 1fr 1fr;
  justify-items: center;
  padding: 1.5% 2% 6% 2%;
  border-top: 1px solid rgba(100, 100, 100, .1);
  border-bottom: 1px solid rgba(100, 100, 100, .1);
  
  @media(max-width: 900px) {
    grid-template-columns: 1fr;
  grid-template-rows: auto auto auto auto;
  }
`

const AboutTitleWrapper = styled.div`
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

const AboutSummaryTitle = Title.extend`
  grid-column: 4 / 5;
  grid-row: 1 / 2;
  justify-self: end;
  font-weight: 500;
  align-self: end;
  padding-bottom: 6px;

  @media(max-width: 900px) {
    grid-column: 2 / 4;
    grid-row: 1 / 2;
    justify-self: center;
    align-self: end;
    text-align: center;
  }
`

const AboutTitle = AboutSummaryTitle.extend`
  grid-row: 2 / 3;
`;


const AboutSummarySvg = styled.svg`
  display: grid;
  height: 8px;
  width: 100%;
  grid-column: 4 / 5;
  grid-row: 1 / 2;
  align-self: end;

 @media(max-width: 900px) {
    grid-column: 2 / 4;
    width: 286px;
    grid-row: 1 / 2;
    justify-self: center;
  }
`;

const AboutSvg = AboutSummarySvg.extend`
  grid-row: 2 / 3;

  @media(max-width: 900px) {
    width: 269px;
  }
`;

const AboutLine = styled.line`
  stroke-linecap: round;
  opacity: .9;
`;

const AboutCopy = Copy.extend`
  grid-column: 2 / 3;
  margin-right: 10%;

   @media(max-width: 900px) {
      grid-column: 1 / -1;
      margin: 0;
      margin-top: 4%;
      width: 85%;
    }
`

const SoundcloudWrapper = Card.extend`
  box-shadow: 0 15px 35px rgba(50, 50, 93, 0.1), 0 5px 15px rgba(0, 0, 0, 0.07);
  border-radius: 4px;
  grid-column: 2 / 3;
  align-self: center;
  width: 400px;
  height: 400px;

   @media(max-width: 900px) {
    grid-column: 1 / -1;
  }
`;

const AboutCTA = CTAButton.extend`
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

const AboutTestimonial = Testimonial.extend`
  grid-column: 1 / -1;
  max-width: 50%;
  margin: 6% 2% 0% 2%;
  justify-self: center;

   @media(max-width: 900px) {
    grid-column: 1 / -1;
    margin: 40px 0;
    max-width: 80%;
  }
`;

export default { AboutWrapper, AboutTitleWrapper, AboutSummaryTitle, AboutSummarySvg, AboutLine, AboutCopy, SoundcloudWrapper, AboutCTA, AboutTestimonial, AboutTitle, AboutSvg };