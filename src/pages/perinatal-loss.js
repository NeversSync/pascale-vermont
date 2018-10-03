import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

import { Title, SubTitle, Wrapper, Copy } from '../components/Helpers';

const PerinatalWrapper = Wrapper.extend`
  background: rgba(215, 212, 217, .3);
  grid-template-columns: 1fr 1fr;
  padding-top: 100px;
  padding-bottom: 100px;
`;

const PerinatalTitleWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 100px auto 1fr 1fr;
  grid-column: 2 / 3;
`;

const PerinatalTitle = Title.extend`
  grid-column: 2 / 3;
  grid-row: 2 / 3;
  font-weight: 500;
  padding-bottom: 10px;
`

const PerinatalSvg = styled.svg`
  display: grid;
  height: 10px;
  grid-column: 2 / 3;
  grid-row: 2 / 3;
  align-self: end;
`;

const PerinatalLine = styled.line`
  stroke-linecap: round;
  opacity: .9;
  /* align-self: ; */
`;

const PerinatalCopy = Copy.extend`
  grid-column: 1 / 2;
  grid-row: 1 / 2;
  margin-left: 10%;
`

const PerinatalLoss = () => (
  <PerinatalWrapper>
    <PerinatalTitleWrapper>
      <PerinatalTitle>PERINATAL LOSS</PerinatalTitle>
      <PerinatalSvg>
        <PerinatalLine x1="70" y1="5" x2="175" y2="5" stroke="rgb(166, 76, 224)" strokeWidth="6"/>
      </PerinatalSvg>
    </PerinatalTitleWrapper>
    <PerinatalCopy>
      Pascale offers bereavement counseling to parents who lose a child during pregnancy, at birth or in early infancy.
      At a time of great pain and loneliness, she provides emotional support in the home, as well as education about the grief process and how to handle the many consequences of the loss. 
      She meets with parents and other family members as long as support is needed, and at other times when the grief is triggered by anniversaries or subsequent pregnancies.
    </PerinatalCopy>

    {/* <Link to="/">Go back to the homepage</Link> */}
  </PerinatalWrapper>
)

export default PerinatalLoss;
