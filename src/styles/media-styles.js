import styled from 'styled-components';
import Link from 'gatsby-link';
import {
  Wrapper,
  Title,
  Copy,
  Card,
  CTAButton,
  Testimonial,
  ImageWrapper
} from '../components/Helpers';

const MediaWrapper = styled(Wrapper)`
  background:rgba(215, 212, 217, 0.3);
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
  padding: ${p => p.isHome ? '3% 2%' : '3% 2% 0px 2%'};
  border-bottom: 1px solid rgba(100, 100, 100, 0.1);

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    padding: ${p => p.isHome ? '3% 2% 6% 2%' : '3% 0px 0px 0px'};
    grid-template-rows: auto;
  }
`;

const MediaTitleWrapper = styled.div`
  grid-column: 1 / -1;
  width: 400px;
  display: flex;
  justify-self: center;
  flex-direction: column;
  /* align-content: ${p => p.isHome ? 'center' : 'flex-start'}; */
  align-content: center;
  padding: 40px 80px;
  justify-items: center;
  align-items: center;

  @media (max-width: 900px) {
    padding: 40px 0px;
    justify-self: center;
    justify-items: center;
    width: 100%;
  }
`;

const MediaTitle = styled(Title)`
  justify-self: end;
  font-weight: 500;
  padding-bottom: 10px;
  text-align: right;

  @media (max-width: 900px) {
    text-align: center;
    width: 100%;
    margin: 0 auto;
  }
`;

const MediaLine = styled.div`
  height: 6px;
  background-color: rgb(229, 69, 117);
  width: 70%;
  border-radius: 10px;
  /* margin-left: auto; */
  margin: 0 auto;
  height: 6px;

  @media (max-width: 900px) {
    width: 40%;
    margin: 0px auto;
    margin-bottom: 0.5em;
  }
`;

const MediaHomeButton = styled(Link)`
  /* margin-left: auto; */

  @media (max-width: 900px) {
    width: 60%;
    display: grid;
    margin: 0px auto;
    justify-content: center;
  }
`;

const MediaCopyTitle = styled.h2`
  text-align: center;
`

const MediaImageWrapper = styled(ImageWrapper)`
  display: grid;
  height: unset;
  padding: 40px 80px;
  background: none;
  box-shadow: none;
  width: 100%;
  grid-column: 2 / 3;
  grid-column: 2 / 3;

  @media (max-width: 900px) {
    padding: 0px;
    margin: 0px;
    img {
      width: 50%!important;
      margin: 0 auto;
    }
    justify-items: center;
  }
`;

const ContentWrapper = styled.div`
  grid-column: 1 / -1;
  display: grid;
  grid-gap: 40px;
  grid-template-columns: 1fr;
  width: 100vw;
  background-color: white;
  margin-left: -2%;
  margin-top: 40px;
  padding: 80px 150px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    grid-gap: 16px;
    /* width: 100%; */
    margin-left: 0px;
    padding: 40px 0px;
  }
`;

const MediaCopyWrapper = styled.div`
  display: grid;
  grid-column: 1 / -1;
  width: 100%;
  max-width: 800px;
  margin: 0 auto;

  @media (max-width: 900px) {
    grid-column: 1 / -1;
    padding: 0px 40px;
  }
`;

const MediaCopy = styled(Copy)`
  width: 100%;
  justify-self: center;
  margin-top: 4%;
  text-align: center;

  @media (max-width: 900px) {
    margin: 0;
    margin-top: 4%;
  }
`;



export {
  MediaWrapper,
  MediaTitleWrapper,
  MediaTitle,
  MediaLine,
  ContentWrapper,
  MediaCopyWrapper,
  MediaCopy,
  MediaHomeButton,
  MediaImageWrapper, MediaCopyTitle
};
