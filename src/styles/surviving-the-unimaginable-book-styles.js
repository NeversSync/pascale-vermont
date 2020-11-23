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

const BookWrapper = styled(Wrapper)`
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

const BookTitleWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-content: ${p => p.isHome ? 'center' : 'flex-start'};
  padding: 40px 80px;
  justify-items: end;

  @media (max-width: 900px) {
    padding: 40px 0px;
    justify-self: center;
    justify-items: center;
  }
`;

const BookTitle = styled(Title)`
  justify-self: end;
  font-weight: 500;
  padding-bottom: 10px;
  text-align: right;

  @media (max-width: 900px) {
    text-align: center;
    width: 400px;
    margin: 0 auto;
  }
`;

const BookLine = styled.div`
  height: 6px;
  background-color: rgb(229, 69, 117);
  width: 70%;
  border-radius: 10px;
  margin-left: auto;
  height: 6px;

  @media (max-width: 900px) {
    width: 60%;
    margin: 0px auto;
    margin-bottom: 0.5em;
  }
`;

const BookHomeButton = styled(Link)`
  margin-left: auto;

  @media (max-width: 900px) {
    width: 60%;
    display: grid;
    margin: 0px auto;
    justify-content: center;
  }
`;

const BookImageWrapper = styled(ImageWrapper)`
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

const CopySubscribeWrapper = styled.div`
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
    width: 100%;
    margin-left: 0px;
    padding: 40px 0px;
  }
`;

const BookCopyWrapper = styled.div`
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

const BookCopy = styled(Copy)`
  width: 100%;
  justify-self: center;
  margin-top: 2%;

  @media (max-width: 900px) {
    margin: 0;
    margin-top: 4%;
  }
`;

export {
  BookWrapper,
  BookTitleWrapper,
  BookTitle,
  BookLine,
  CopySubscribeWrapper,
  BookCopyWrapper,
  BookCopy,
  BookHomeButton,
  BookImageWrapper
};

// const BookTestimonial = styled(Testimonial)`
//   grid-column: 1 / 2;
//   grid-row: 3 / 4;
//   max-width: 80%;
//   margin: 5% 2% 0% 2%;
//   margin: 8% 2% 0% 2%;
//   justify-self: center;

//   @media (max-width: 900px) {
//     grid-column: 1 / -1;
//     grid-row: 4 / 5;
//     margin: 20px 0;
//     max-width: 85%;
//   }
// `;

// const SecondBookTestimonial = styled(Testimonial)`
//   grid-column: 2 / 3;
//   grid-row: 3 / 4;
//   margin: 8% 2% 0% 2%;
//   justify-self: center;
//   max-width: 80%;

//   @media (max-width: 900px) {
//     grid-column: 1 / -1;
//     grid-row: 5 / 6;
//     margin: 20px 0;
//     max-width: 85%;
//   }
// `;
