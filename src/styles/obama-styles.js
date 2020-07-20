import styled from 'styled-components';
import { Wrapper, Copy, Title, Card } from '../components/Helpers';

const ObamaWrapper = styled(Wrapper)`
  grid-template-columns: 1fr auto 1fr;
  margin: 5% 0;
`;

const ObamaCopy = styled(Copy)`
  grid-column: 2 / 3;
  width: 50%;
  justify-self: center;

  @media (max-width: 900px) {
    width: 85%;
  }
`;

const ObamaTitle = styled(Title)`
  grid-column: 2 / 3;
  width: 50%;
  justify-self: center;
  margin: 1% 0;
  text-align: center;
`;

export { ObamaWrapper, ObamaCopy, ObamaTitle };
