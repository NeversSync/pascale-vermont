import React from 'react';
import styled from 'styled-components';
import Scrollchor from 'react-scrollchor';

const Wrapper = styled.div`
  display: grid;
  background: white;
  padding: 1.5% 4% 6% 4%;
`;

const LandingSummaryWrapper = styled(Wrapper)`
  display: grid;
  background: rgba(0,0,0,0);
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  align-content: center;
  grid-column: 1 / 2;

  @media (max-width: 900px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-column: 1 / -1;
    grid-row: 1 / 2;
    grid-template-rows: 80px 80px;
  }
`;

const RightLandingSummaryWrapper = styled(LandingSummaryWrapper)`
  grid-column: 2 / 3;
  background: initial;

  @media (max-width: 900px) {
    grid-column: 1 / -1;
    grid-row: 1 / 2;
  }
`;

const TallSummaryWrapper = styled(LandingSummaryWrapper)`
  @media (max-width: 900px) {
    grid-template-rows: 140px 80px;
  }
`;

const RightTallSummaryWrapper = styled(RightLandingSummaryWrapper)`
  @media (max-width: 900px) {
    grid-template-rows: 140px 80px;
  }
`;

const Copy = styled.p`
  font-size: 20px;
  line-height: 32px;
  letter-spacing: 1.75px;
  font-weight: 300;

  @media (max-width: 1100px) {
    font-size: 16px;
  }
`;

const LandingSummaryCopy = styled(Copy)`
  align-self: center;
  grid-column: ${p => p.fullWidth ? '1 / -1' : '2 / 3'};
  width: ${p => p.fullWidth ? '60vw' : '100%'};
  margin: ${p => p.fullWidth ? '0  auto' : '0px 10% 0px 0px'};
  max-width: 800px;

  @media (max-width: 900px) {
    grid-column: 1 / -1;
    margin: 0 auto;
    margin-top: 4%;

    width: 85%;
  }
`;

const RightLandingSummaryCopy = styled(LandingSummaryCopy)`
  grid-column: 1 / 2;
  grid-row: 1 / 2;
  width: 90%;
  margin-left: 10%;
  margin-right: 0;
  justify-self: start;

  @media (max-width: 900px) {
    justify-self: center;
    grid-column: 1 / -1;
    grid-row: 2 / 3;
    margin: 0;
    margin-top: 4%;
    width: 85%;
  }
`;

const Card = styled.div`
  box-shadow: 0 5px 15px rgba(50, 50, 93, 0.1), 0 3px 8px rgba(0, 0, 0, 0.07);
  background: white;
  border-radius: 4px;
`;

const Title = styled.h1`
  font-size: 52px;
  letter-spacing: 4px;
  font-weight: 300;

  @media (max-width: 1100px) {
    font-size: 30px;
  }
`;

const RightSummaryTitle = styled(Title)`
  grid-column: 2 / 3;
  grid-row: 2 / 3;
  font-weight: 500;
  padding-bottom: 10px;

  @media (max-width: 900px) {
    grid-column: 2 / 4;
    text-align: center;
    grid-row: 1 / 2;
    justify-self: center;
    align-self: end;
  }
`;

const SubTitle = styled.h3`
  font-size: 42px;
  letter-spacing: 20px;
  font-weight: 200;

  @media (max-width: 1100px) {
    font-size: 20px;
  }
`;

const CTAButtonText = styled.p`
  color: white;
`;

const CTAButton = styled.button`
  font-size: 16px;
  margin-top: 30px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 200px;
  height: 55px;
  background: linear-gradient(
    to left,
    hsla(348, 86%, 59%, 0.9),
    hsla(39, 100%, 63%, 0.9)
  );
  border: none;
  border-radius: 7px;
  border-bottom: 3px solid hsla(348, 2%, 10%, 0.5);
  box-shadow: 0px 2px 3px -1px rgba(0, 0, 0, 0.3);
  transition: 0.3s ease;
  letter-spacing: 1.8px;
  cursor: pointer;

  &:hover {
    background: linear-gradient(
      to left,
      hsla(348, 96%, 69%, 0.9),
      hsla(39, 100%, 63%, 0.9)
    );
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  }
  &:active {
    background: linear-gradient(
      to left,
      hsla(348, 86%, 49%, 0.9),
      hsla(39, 90%, 43%, 0.9)
    );
    -webkit-transform: translate(0px, 2px);
    transform: translate(0px, 2px);
    border-bottom: none;
    box-shadow: none;
  }

  @media (max-width: 900px) {
    margin: 0;
    font-size: 16px;
    &:hover {
      background: linear-gradient(
        to left,
        hsla(348, 86%, 59%, 0.9),
        hsla(39, 100%, 63%, 0.9)
      );
      box-shadow: 0px 2px 3px -1px rgba(0, 0, 0, 0.3);
    }
  }
`;

const Testimonial = styled.div`
  font-style: italic;
  font-size: 22px;
  font-weight: 200;
  line-height: 32px;
  letter-spacing: 1.55px;
  text-align: center;

  @media (max-width: 1100px) {
    font-size: 18px;
  }
`;

const SummaryTestimonial = styled(Testimonial)`
  grid-column: 1 / -1;
  max-width: 45%;
  margin: 1% 2% 0% 2%;
  justify-self: center;

  @media (max-width: 900px) {
    grid-column: 1 / -1;
    margin: 40px 0;
    max-width: 85%;
  }
`;

const WithImageSummaryTestimonial = styled(SummaryTestimonial)`
  grid-column: 1 / 2;
  grid-row: 2 / 3;
  max-width: 65%;
  align-self: center;

  @media (max-width: 900px) {
    grid-column: 1 / -1;
    grid-row: 4 / 5;
  }
`;

const ImageWrapper = styled(Card)`
  height: 400px;

  @media (max-width: 900px) {
    grid-column: 1 / -1;
    margin: 40px 0;
  }
`;

const Spacer = styled.div`
  grid-column: 1 / -1;
  width: 100%;
  margin: 1%;

  @media (max-width: 900px) {
    display: none;
  }
  `;

const VideoWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 2em;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
   padding: 0px 10px;
  }

`

const Video = styled.div`
  display: grid;
  box-shadow: 5px 5px 15px rgba(255, 255, 255, 0.2);
  position: relative;
  padding-bottom: 56.25%; /* 16:9 */
  padding-top: 25px;
  height: 0;
`

const VideoCopyWrapper = styled.div`
  p {
    text-align: center;
    font-size: 2.5rem;
    margin-top: .75em;
  }
`;

const Iframe = styled.iframe`
    border-radius: 5px;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
`;

const PageWrapper = styled(Wrapper)`
  background:rgba(215, 212, 217, 0.3);
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  padding: 3% 2% 0px 2%;
  border-bottom: 1px solid rgba(100, 100, 100, 0.1);

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    padding: ${p => p.isHome ? '3% 2% 6% 2%' : '3% 0px 0px 0px'};
    grid-template-rows: auto;
  }
`;

const PageTitleWrapper = styled.div`
  grid-column: 1 / -1;
  max-width: 900px;
  display: flex;
  justify-self: center;
  flex-direction: column;
  align-content: center;
  /* padding: 40px 80px; */
  justify-items: center;
  align-items: center;

  @media (max-width: 900px) {
    padding: 40px 10px;
    justify-self: center;
    justify-items: center;
    width: 100%;
  }
`;

const PageTitle = styled(Title)`
  /* justify-self: end; */
  font-weight: 500;
  padding-bottom: 10px;
  text-align: center;

  @media (max-width: 900px) {
    text-align: center;
    width: 100%;
    margin: 0 auto;
  }
`;

const PageLine = styled.div`
  height: 6px;
  background-color: rgb(229, 69, 117);
  width: 70%;
  border-radius: 10px;
  margin: 0 auto;
  height: 6px;

  @media (max-width: 900px) {
    width: 40%;
    margin: 0px auto;
    margin-bottom: 0.5em;
  }
`;


const ContentWrapper = styled.div`
  grid-column: 1 / -1;
  display: grid;
  grid-gap: 40px;
  grid-template-columns: 1fr;
  width: calc(100vw + 2%);
  background-color: white;
  margin-left: -2%;
  margin-top: 40px;
  padding: 80px 150px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    grid-gap: 16px;
    width: 100%;
    margin-left: 0px;
    padding: 40px 10px;
  }
`;

const BlogCopyWrapper = styled.div`
  max-width: 900px;
  margin: 0 auto;

  p {
    margin-bottom: 1.5em;
  }
  h2, h3 {
    text-align: center;
    margin-bottom: .75em;
    margin-top: 1.5em;

  }
  h3 {
    margin-top: 0;
    margin-bottom: .5em;
    font-size: 1.25em;
  }

  i {
    font-style: italic;
    margin-right: 1em;
  }
`;

const BookLinkWrapper = styled.div`
  margin: 32px 0px 16px 0px;
  * {
    display: inline-block;
  }

  h2, a {
    font-size: 28px;
    letter-spacing: 4px;
    font-weight: 300;
    line-height: 1.2;

    @media (max-width: 1100px) {
      font-size: 26px;
    }
  }
  a {
    margin: 0px 4px;
  }

  img {
    margin: 24px auto 40px auto;
    width: 33%;
    height: auto;
    display: block;

    @media (max-width: 1100px) {
      width: 50%;
    }
  }
`;

// HELPER COMPONENTS

const SVGArrowRight = () => (
  <CTAButton className="arrow">
    <CTAButtonText>LEARN MORE</CTAButtonText>
    <svg
      style={{ width: '30px', height: '30px' }}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 453.5 270"
    >
      <g id="Layer_2" data-name="Layer 2">
        <path
          id="arrow-head"
          fill="none"
          stroke="#fff"
          strokeWidth="20"
          d="M318.5 10l125 125-125 125"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          id="arrow-body"
          fill="white"
          stroke="white"
          strokeWidth=""
          strokeMiterlimit="0"
          d="M433 144.5H10a10 10 0 0 1 0-20h423a10 10 0 0 1 0 20z"
        />
      </g>
    </svg>
  </CTAButton>
);

const Button = ({text}) => (
  <CTAButton className="arrow">
    <CTAButtonText>{text || 'HOME'}</CTAButtonText>
    <svg
      className="svg-left-arrow"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 453.5 270"
    >
      <g id="Layer_2" data-name="Layer 2">
        <path
          id="arrow-head"
          fill="none"
          stroke="#fff"
          strokeWidth="20"
          d="M318.5 10l125 125-125 125"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          id="arrow-body"
          fill="white"
          stroke="white"
          strokeWidth=""
          strokeMiterlimit="0"
          d="M433 144.5H10a10 10 0 0 1 0-20h423a10 10 0 0 1 0 20z"
        />
      </g>
    </svg>
  </CTAButton>
);

const UpArrow = () => (
  <Scrollchor to="#" animate={{ duration: 1250 }} className="arrow up-button">
    <svg
      className="up-arrow"
      style={{ width: '30px', height: '30px' }}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 453.5 270"
    >
      <g id="Layer_2" data-name="Layer 2">
        <path
          id="arrow-head"
          fill="none"
          stroke="#000"
          strokeWidth="20"
          d="M318.5 10l125 125-125 125"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          id="arrow-body"
          fill="black"
          stroke="black"
          strokeWidth=""
          strokeMiterlimit="0"
          d="M433 144.5H10a10 10 0 0 1 0-20h423a10 10 0 0 1 0 20z"
        />
      </g>
    </svg>
  </Scrollchor>
);

export {
  Wrapper,
  LandingSummaryWrapper,
  Title,
  SubTitle,
  Copy,
  LandingSummaryCopy,
  Card,
  CTAButton,
  Testimonial,
  SVGArrowRight,
  Button,
  ImageWrapper,
  Spacer,
  RightLandingSummaryWrapper,
  RightLandingSummaryCopy,
  SummaryTestimonial,
  WithImageSummaryTestimonial,
  RightSummaryTitle,
  TallSummaryWrapper,
  RightTallSummaryWrapper,
  UpArrow,
  Video, VideoWrapper, Iframe, VideoCopyWrapper,
  PageWrapper, ContentWrapper, PageTitleWrapper, PageTitle, PageLine, BlogCopyWrapper, BookLinkWrapper
};
