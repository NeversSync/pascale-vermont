import React from 'react'
import styled from 'styled-components';
import Link from 'gatsby-link'

const Wrapper = styled.div`
  display: grid;
  background: white;
`;

const LandingSummaryWrapper = Wrapper.extend`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 100px auto auto 100px;
  grid-column: 1 / 2;
`;

const RightLandingSummaryWrapper = LandingSummaryWrapper.extend`
  grid-column: 2 / 3;
  background: initial;
`
;
const Copy = styled.p`
  font-size: 20px;
  line-height: 32px;
  letter-spacing: 1.75px;
  font-weight: 300;
`;

const LandingSummaryCopy = Copy.extend`
  align-self: center;
  grid-column: 2 / 3;
  margin-right: 10%;
`

const RightLandingSummaryCopy = LandingSummaryCopy.extend`
  grid-column: 1 / 2;
  grid-row: 1 / 2;
  width: 90%;
  margin-left: 15%;
  justify-self: start;
`;

const Card = styled.div`
  box-shadow: 0 15px 35px rgba(50, 50, 93, 0.1), 0 5px 15px rgba(0, 0, 0, 0.07);
  background: white;
  /* border-radius: 4px; */
`;

const Title = styled.h1`
  font-size: 52px;
  letter-spacing: 4px;
  font-weight: 300;
`

const SubTitle = styled.h3`
  font-size: 42px;
  letter-spacing: 20px;
  font-weight: 200;
`

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
  background: linear-gradient(to left, hsla(348, 86%, 59%, .9), hsla(39, 100%, 63%, 0.9));
  border: none;
  border-radius: 7px;
  border-bottom: 3px solid hsla(348, 2%, 10%, .5);
  box-shadow: 0px 2px 3px -1px rgba(0, 0, 0, 0.3);
  transition: .3s ease;
  letter-spacing: 1.8px;
  cursor: pointer;

  @media(min-width: 768px) {
    font-size: 16px;

    &:hover {
      background: linear-gradient(to left, hsla(348, 96%, 69%, .9), hsla(39, 100%, 63%, 0.9));
      box-shadow: 0 4px 4px rgba(0,0,0,.25);
    }
    &:active {
      background: linear-gradient(to left, hsla(348, 86%, 49%, .9), hsla(39, 90%, 43%, 0.9));
      -webkit-transform: translate(0px, 2px);
      transform: translate(0px, 2px);
      border-bottom: none;
      box-shadow: none;
    }
  }
`;

const Testimonial = styled.p`
font-style: italic;
font-size: 22px;
font-weight: 200;
line-height: 28px;
letter-spacing: 1.55px;
`;

const ImageWrapper = Card.extend`
  height: 400px;
`;

const Spacer = styled.div`
  grid-column: 1 / -1;
  width: 100%;
  margin: 1%;
`;


// HELPER COMPONENTS

const SVGArrowLeft = () => (
  <CTAButton className="arrow">
    <svg style={{width: '30px', height: '30px'}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 453.5 270" transform='rotate(180)'>
      <g id="Layer_2" data-name="Layer 2">
        <path id="arrow-head" fill="none" stroke="#fff" strokeWidth="20" d="M318.5 10l125 125-125 125" strokeLinecap="round" strokeLinejoin="round" />
        <path id="arrow-body" fill="white" stroke="white" strokeWidth="" strokeMiterlimit="0" d="M433 144.5H10a10 10 0 0 1 0-20h423a10 10 0 0 1 0 20z" />
      </g>
    </svg>
    <CTAButtonText>LEARN MORE</CTAButtonText>
  </CTAButton>
);

const SVGArrowRight = () => (
  <CTAButton className="arrow"><CTAButtonText>LEARN MORE</CTAButtonText>
    <svg style={{ width: '30px', height: '30px' }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 453.5 270">
      <g id="Layer_2" data-name="Layer 2">
        <path id="arrow-head" fill="none" stroke="#fff" strokeWidth="20" d="M318.5 10l125 125-125 125" strokeLinecap="round" strokeLinejoin="round" />
        <path id="arrow-body" fill="white" stroke="white" strokeWidth="" strokeMiterlimit="0" d="M433 144.5H10a10 10 0 0 1 0-20h423a10 10 0 0 1 0 20z" />
      </g>
    </svg>
  </CTAButton>
);

const HomeButton = () => (
  <CTAButton className="arrow"> 
  <CTAButtonText>HOME</CTAButtonText>
    <svg style={{ width: '30', height: '30' }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 453.5 270">
      <g id="Layer_2" data-name="Layer 2">
        <path id="arrow-head" fill="none" stroke="#fff" strokeWidth="20" d="M318.5 10l125 125-125 125" strokeLinecap="round" strokeLinejoin="round" />
        <path id="arrow-body" fill="white" stroke="white" strokeWidth="" strokeMiterlimit="0" d="M433 144.5H10a10 10 0 0 1 0-20h423a10 10 0 0 1 0 20z" />
      </g>
    </svg> 
  </CTAButton>
);

export default { Wrapper, LandingSummaryWrapper, Title, SubTitle, Copy, LandingSummaryCopy, Card, CTAButton, Testimonial, SVGArrowRight, SVGArrowLeft, HomeButton, ImageWrapper, Spacer, RightLandingSummaryWrapper, RightLandingSummaryCopy };