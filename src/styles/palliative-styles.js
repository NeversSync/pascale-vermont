import styled from 'styled-components';
import { Wrapper, Title, Copy, Card, CTAButton, Testimonial, ImageWrapper } from '../components/Helpers';

const PalliativeWrapperSummary = Wrapper.extend`
  background: rgba(215, 212, 217, .3);
  grid-template-columns: 1fr 1fr;
  padding: 3% 2% 6% 2%;
  border-bottom: 1px solid rgba(100, 100, 100, .1);
`;

const PalliativeWrapper = PalliativeWrapperSummary.extend`
  background: white;
`;

const PalliativeTitleWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 100px auto 1fr 1fr;
  grid-column: 2 / 3;
`;

const PalliativeTitle = Title.extend`
  grid-column: 2 / 3;
  grid-row: 2 / 3;
  font-weight: 500;
  padding-bottom: 10px;

  @media(max-width: 900px) {
    grid-column: 2 / 4;
    grid-row: 1 / 2;
    justify-self: center;
    align-self: end;
    text-align: center;
  }
`

const PalliativeSvg = styled.svg`
  display: grid;
  height: 10px;
  grid-column: 2 / 3;
  grid-row: 2 / 3;
  align-self: end;

   @media(max-width: 900px) {
    grid-column: 2 / 4;
    width: 207px;
    grid-row: 1 / 2;
    justify-self: center;
  }
`;

const PalliativeLine = styled.line`
  stroke-linecap: round;
  opacity: .9;
`;

const PalliativeCopy = Copy.extend`
  grid-column: 1 / -1;
  grid-row: 2 / 3;
  width: 50%;
  justify-self: center;
  margin-top: 5%;
`

const PalliativeTestimonial = Testimonial.extend`
  grid-column: 1 / -1;
  max-width: 45%;
  margin: 0% 2% 0% 2%;
  justify-self: center;

   @media(max-width: 900px) {
    grid-column: 1 / -1;
    margin: 40px 0;
    max-width: 80%;
  }
`;

const PalliativeImageWrapper = ImageWrapper.extend`
  grid-column: 1 / 2;
  grid-row: 1 / 2;
  margin-left: 10%;
  height: fit-content;
  max-height: 400px;
`;


export default { PalliativeWrapper, PalliativeWrapperSummary, PalliativeTitleWrapper, PalliativeTitle, PalliativeSvg, PalliativeLine, PalliativeCopy, PalliativeTestimonial, PalliativeImageWrapper };