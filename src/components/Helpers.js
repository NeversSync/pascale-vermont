import React from 'react';
import styled from 'styled-components';
import Scrollchor from 'react-scrollchor';

const Wrapper = styled.div`
  display: grid;
  background: white;
`;

const LandingSummaryWrapper = styled(Wrapper)`
  display: grid;
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
  grid-column: 2 / 3;
  margin-right: 10%;

  @media (max-width: 900px) {
    grid-column: 1 / -1;
    margin: 0;
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

const HomeButton = () => (
  <CTAButton className="arrow">
    <CTAButtonText>HOME</CTAButtonText>
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
  HomeButton,
  ImageWrapper,
  Spacer,
  RightLandingSummaryWrapper,
  RightLandingSummaryCopy,
  SummaryTestimonial,
  WithImageSummaryTestimonial,
  RightSummaryTitle,
  TallSummaryWrapper,
  RightTallSummaryWrapper,
  UpArrow
};
