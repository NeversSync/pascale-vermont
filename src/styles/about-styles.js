import styled from 'styled-components';
import { Wrapper, Title, Copy, Card, CTAButton, Testimonial } from '../components/Helpers';

const AboutWrapper = Wrapper.extend`
  grid-template-columns: 1fr 1fr;
  justify-items: center;
  padding: 50px;
  padding-bottom: 75px;
`

const AboutTitleWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 100px auto auto 1fr;
  grid-column: 1 / 2;
`;

const AboutTitle = Title.extend`
  grid-column: 4 / 5;
  grid-row: 2 / 3;
  justify-self: end;
  font-weight: 500;
  align-self: center;
`

const AboutSvg = styled.svg`
  display: grid;
  height: 17px;
  grid-column: 4 / 5;
  grid-row: 3 / 4;
`;

const AboutLine = styled.line`
  stroke-linecap: round;
  opacity: .9;
  align-self: end;
`;

const AboutCopy = Copy.extend`
  grid-column: 2 / 3;
  margin-right: 10%;
`

const SoundcloudWrapper = Card.extend`
  box-shadow: 0 15px 35px rgba(50, 50, 93, 0.1), 0 5px 15px rgba(0, 0, 0, 0.07);
  border-radius: 4px;
  grid-column: 2 / 3;
  align-self: center;
  width: 400px;
  height: 400px;
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
  margin: 4% 2% 0% 2%;
  justify-self: center;
`;

export default { AboutWrapper, AboutTitleWrapper, AboutTitle, AboutSvg, AboutLine, AboutCopy, SoundcloudWrapper, AboutCTA, AboutTestimonial };