import { Wrapper, Card} from '../components/Helpers';

const ThanksWrapper = Wrapper.extend`
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  justify-content: center;
  align-content: center;
  height: 100vh;

  @media(max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const ContentWrapper = Card.extend`
  grid-column: 2 / 3; 
  grid-row: 2 / 3;
  display: grid;
  grid-template-rows: 1fr 1fr;
  justify-items: center;
  align-items: center;
  padding: 45px 0;

   @media(max-width: 900px) {
    grid-column: 1 / -1;
    width: 70%;
    justify-self: center;
  }
`;

export default { ThanksWrapper, ContentWrapper };