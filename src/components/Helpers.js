import React from 'react'
import styled from 'styled-components';

const Wrapper = styled.div`
  display: grid;
  /* height: 400px; */
  background: white;
  /* grid-template-columns: repeat(8, 1fr); */
  /* grid-template-rows: 1fr 1fr 1fr 1fr 1fr; */
  /* grid-template-rows: 100px 100px 100px 100px 100px 100px; */
`;

const Card = styled.div`
  box-shadow: 0 15px 35px rgba(50, 50, 93, 0.1), 0 5px 15px rgba(0, 0, 0, 0.07);
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

const Copy = styled.p`
  font-size: 20px;
  line-height: 32px;
  letter-spacing: 1.75px;
  font-weight: 300;
`;

const CTAButton = styled.button`
  height: 100px;
  width: 100px;
  transition: .2s ease;
  border-radius: 50%;
  /* font-size: 16px; */
  /* line-height: 27px; */
  /* text-align: center; */
  /* margin: 10px; */
  /* padding: 6px 13px;*/
  background: linear-gradient(to left, hsla(348, 86%, 59%, .9), hsla(39, 100%, 63%, 0.9));
  border: 1px solid black;
  border: none;
  box-shadow: 0px 2px 3px -1px rgba(0, 0, 0, 0.3);

  &:hover {
    background: linear-gradient(to left, hsla(348, 96%, 69%, .9), hsla(39, 100%, 63%, 0.9));
    box-shadow: 0px 4px 3px -2px rgba(0, 0, 0, 0.3);
  }
  
  &:active {
    background: linear-gradient(to left, hsla(348, 86%, 49%, .9), hsla(39, 90%, 43%, 0.9));
    -webkit-transform: translate(0px, 2px);
    transform: translate(0px, 2px);
    border: none;
    box-shadow: none;
  }
`;

const Testimonial = styled.p`
  font-style: italic;
  font-size: 22px;
  font-weight: 200;
  line-height: 28px;
  letter-spacing: 1.55px;
`;

export default { Wrapper, Title, SubTitle, Copy, Card, CTAButton, Testimonial };