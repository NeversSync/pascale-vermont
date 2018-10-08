import styled from 'styled-components';
import { Wrapper, Title, Copy, Card, CTAButton, Testimonial, ImageWrapper } from '../components/Helpers';

const NGOWrapper = Wrapper.extend`
  background: rgba(215, 212, 217, .3);
  grid-template-columns: 1fr 1fr;
  padding: 3% 2% 6% 2%;
  border-bottom: 1px solid rgba(100, 100, 100, .1);
`;

const NGOTitleWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 100px auto 1fr 1fr;
  grid-column: 2 / 3;
`;

const NGOTitle = Title.extend`
  grid-column: 2 / 3;
  grid-row: 2 / 3;
  font-weight: 500;
  padding-bottom: 10px;
`

const NGOSvg = styled.svg`
  display: grid;
  height: 10px;
  grid-column: 2 / 3;
  grid-row: 2 / 3;
  align-self: end;
`;

const NGOLine = styled.line`
  stroke-linecap: round;
  opacity: .9;
`;

const NGOCopy = Copy.extend`
  grid-column: 1 / -1;
  grid-row: 2 / 3;
  width: 50%;
  justify-self: center;
  margin-top: 5%;
`

const NGOTestimonial = Testimonial.extend`
  grid-column: 1 / -1;
  max-width: 45%;
  margin: 1% 2% 0% 2%;
  justify-self: center;
`;

const NGOImageWrapper = ImageWrapper.extend`
  grid-column: 1 / 2;
  grid-row: 1 / 2;
  margin-left: 10%;
  height: fit-content;
  max-height: 400px;
`;


export default { NGOWrapper, NGOTitleWrapper, NGOTitle, NGOSvg, NGOLine, NGOCopy, NGOTestimonial, NGOImageWrapper };