import styled from 'styled-components';
import { Wrapper, Title, Copy, Card, CTAButton, Testimonial, ImageWrapper } from '../components/Helpers';

const DisasterWrapper = Wrapper.extend`
  grid-template-columns: 1fr 1fr;
  justify-items: center;
  padding: 3% 2% 6% 2%;
  border-bottom: 1px solid rgba(100, 100, 100, .1);
`

const DisasterTitle = Title.extend`
  grid-column: 4 / 5;
  grid-row: 2 / 3;
  justify-self: end;
  font-weight: 500;
  align-self: center;
  text-align: right;
  padding-bottom: 10px;
`

const DisasterSvg = styled.svg`
  display: grid;
  height: 10px;
  width: 100%;
  grid-column: 4 / 5;
  grid-row: 2 / 3;
  align-self: end;
`;

const DisasterLine = styled.line`
  stroke-linecap: round;
  opacity: .9;
`;

const DisasterCTA = CTAButton.extend`
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

const DisasterTestimonial = Testimonial.extend`
  grid-column: 1 / 2;
  grid-row: 2 / 3;
  max-width: 65%;
  /* margin: 1% 2% 0% 2%; */
  justify-self: center;
  align-self: center;
`;

const DisasterImg = styled.img`
  grid-column: 2 / 3;
  grid-row: 2 / 3;
  align-self: center;
  justify-self: center;
  /* margin: 6% 2% 0% 2%; */
  max-width: 70%;
  border-radius: 5px;
  box-shadow: 0 15px 35px rgba(50, 50, 93, 0.1), 0 5px 15px rgba(0, 0, 0, 0.07);
`;

export default { DisasterWrapper, DisasterTitle, DisasterSvg, DisasterLine, DisasterCTA, DisasterTestimonial, DisasterImg };