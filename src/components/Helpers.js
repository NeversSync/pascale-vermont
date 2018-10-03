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

export default { Wrapper, Title, SubTitle, Copy };