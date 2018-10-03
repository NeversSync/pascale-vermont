import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components';

import { Wrapper, Title, Copy } from '../components/Helpers';

const AboutWrapper = Wrapper.extend`
  grid-template-columns: 1fr 1fr;
  justify-items: center;
  padding: 50px;
`

const AboutTitleWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 100px auto 1fr 1fr;
  grid-column: 1 / 2;
`;

const AboutTitle = Title.extend`
  grid-column: 4 / 5;
  grid-row: 2 / 3;
  font-weight: 500;
  padding-bottom: 10px;
`

const AboutSvg = styled.svg`
  display: grid;
  height: 10px;
  grid-column: 4 / 5;
  grid-row: 2 / 3;
  align-self: end;
`;

const AboutLine = styled.line`
  stroke-linecap: round;
  opacity: .9;
  align-self: end;
`;

const AboutCopy = Copy.extend`
  grid-column: 2 / 3;
  margin-right: 10%;
`

const IndexPage = () => (
  <AboutWrapper>
    <AboutTitleWrapper>
      <AboutTitle>ABOUT</AboutTitle>
      <AboutSvg>
        <AboutLine x1="70" y1="5" x2="175" y2="5" stroke="rgb(166, 76, 224)" strokeWidth="6"/>
      </AboutSvg>
    </AboutTitleWrapper>
    <AboutCopy>
      Pascale Vermont is a licensed clinical Psychologist based in San Francisco, CA. She is passionate about providing support to people in times of intense pain and grief. Her main professional occupation centers around grief counseling and disaster mental health.
      <br/><br/>
      She provides emotional support in various settings, such as in a private grief counseling practice, in-home counseling to bereaved parents, in large scale disasters, and to expatriate staff of an international disaster organization.
    </AboutCopy>
    {/* <Link to="/page-2/">Go to page 2</Link> */}
  </AboutWrapper>
)

export default IndexPage
