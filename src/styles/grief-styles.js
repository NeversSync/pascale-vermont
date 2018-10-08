import styled from 'styled-components';
import { Wrapper, Title, Copy, Card, CTAButton, Testimonial, ImageWrapper } from '../components/Helpers';

const GriefWrapper = Wrapper.extend`
  grid-template-columns: 1fr 1fr;
  justify-items: center;
  padding: 3% 2% 6% 2%;
  border-bottom: 1px solid rgba(100, 100, 100, .1);
`

const GriefTitle = Title.extend`
  grid-column: 4 / 5;
  grid-row: 2 / 3;
  justify-self: end;
  font-weight: 500;
  align-self: center;
  text-align: right;
  padding-bottom: 10px;
`

const GriefSvg = styled.svg`
  display: grid;
  height: 10px;
  width: 100%;
  grid-column: 4 / 5;
  grid-row: 2 / 3;
  align-self: end;
`;

const GriefLine = styled.line`
  stroke-linecap: round;
  opacity: .9;
`;

const GriefCTA = CTAButton.extend`
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

const GriefTestimonial = Testimonial.extend`
  grid-column: 1 / -1;
  max-width: 50%;
  margin: 1% 2% 0% 2%;
  justify-self: center;
`;

export default { GriefWrapper, GriefTitle, GriefSvg, GriefLine, GriefCTA, GriefTestimonial };