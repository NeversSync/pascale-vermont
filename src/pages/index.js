import React from 'react'
import Link from 'gatsby-link'
import styled from '../../node_modules/styled-components';

import heroImgSrc from '../../public/assets/img/stock/sprout-shadow.jpg';


const HeroContainer = styled.div`
  display: grid;
  height: 1vh;
  grid-template-columns: repeat(6, 1fr);
  /* grid-template-rows: repeat; */
  /* grid-gap: 2%; */
`
const HeroImg = styled.img`
  display: grid;
  grid-column: 1 / -1;
  /* grid-row: 1; */
`

const IndexPage = () => (
  <HeroContainer>
    <HeroImg src={heroImgSrc} width="100%" height="auto"></HeroImg>
  </HeroContainer>
)

export default IndexPage
