import styled from 'styled-components';
import { Wrapper, Title, Copy, Card, CTAButton, Testimonial, ImageWrapper } from '../components/Helpers';

const PerinatalWrapper = Wrapper.extend`
  background: rgba(215, 212, 217, .3);
  grid-template-columns: 1fr 1fr;
  padding-top: 100px;
  padding-bottom: 100px;
  border-top: 1px solid rgba(100, 100, 100, .1);
  border-bottom: 1px solid rgba(100, 100, 100, .1);
`;

const PerinatalTitleWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 100px auto 1fr 1fr;
  grid-column: 2 / 3;
`;

const PerinatalTitle = Title.extend`
  grid-column: 2 / 3;
  grid-row: 2 / 3;
  font-weight: 500;
  padding-bottom: 10px;
`

const PerinatalSvg = styled.svg`
  display: grid;
  height: 10px;
  grid-column: 2 / 3;
  grid-row: 2 / 3;
  align-self: end;
`;

const PerinatalLine = styled.line`
  stroke-linecap: round;
  opacity: .9;
`;

const PerinatalCopy = Copy.extend`
  grid-column: 1 / -1;
  grid-row: 2 / 3;
  width: 50%;
  justify-self: center;
  margin-top: 5%;
`

const PerinatalCopyLanding = PerinatalCopy.extend`
  grid-column: 1 / 2;
  grid-row: 1 / 2;
  width: 90%;
  margin-left: 15%;
  justify-self: start;
`;

const PerinatalTestimonial = Testimonial.extend`
  grid-column: 1 / -1;
  max-width: 45%;
  margin: 1% 2% 0% 2%;
  justify-self: center;
`;

const PerinatalImageWrapper = ImageWrapper.extend`
  grid-column: 1 / 2;
  grid-row: 1 / 2;
  margin-left: 10%;
  height: fit-content;
  max-height: 400px;
`;


export default { PerinatalWrapper, PerinatalTitleWrapper, PerinatalTitle, PerinatalSvg, PerinatalLine, PerinatalCopy, PerinatalCopyLanding, PerinatalTestimonial, PerinatalImageWrapper };