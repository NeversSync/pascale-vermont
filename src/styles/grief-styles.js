import styled from 'styled-components';
import { Wrapper, Title, Copy, Card, CTAButton, Testimonial, ImageWrapper } from '../components/Helpers';

const GriefWrapper = Wrapper.extend`
  grid-template-columns: 1fr 1fr;
  justify-items: center;
  padding: 50px;
  padding-bottom: 75px;
`

const GriefTitleWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 100px auto auto 1fr;
  grid-column: 1 / 2;
`;

const GriefTitle = Title.extend`
  grid-column: 4 / 5;
  grid-row: 2 / 3;
  justify-self: end;
  font-weight: 500;
  align-self: center;
  text-align: right;
`

const GriefSvg = styled.svg`
  display: grid;
  height: 17px;
  grid-column: 4 / 5;
  grid-row: 3 / 4;
`;

const GriefLine = styled.line`
  stroke-linecap: round;
  opacity: .9;
  /* align-self: start; */
`;

const GriefCopy = Copy.extend`
  grid-column: 2 / 3;
  margin-right: 10%;
`

const GriefCopyLanding = GriefCopy.extend`
  grid-column: 2 / 3;
  margin-right: 10%;
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
  margin: 4% 2% 0% 2%;
  justify-self: center;
`;

export default { GriefWrapper, GriefTitleWrapper, GriefTitle, GriefSvg, GriefLine, GriefCopy, GriefCopyLanding, GriefCTA, GriefTestimonial };