import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components';

import { Wrapper, Title, Copy } from '../components/Helpers';

const AboutWrapper = Wrapper.extend`
  grid-template-columns: 1fr 1fr;
  justify-items: center;
  /* align-items: center; */
  padding: 50px;
`

const AboutTitle = Title.extend`
  grid-column: 1 / 2;
  align-items: center;
  font-weight: 500;
  margin-top: 10%;
`

const AboutCopy = Copy.extend`
  grid-column: 2 / 3;
  margin-right: 4%;
`

const IndexPage = () => (
  <AboutWrapper>
    <AboutTitle>ABOUT</AboutTitle>
    <AboutCopy>
      Pascale Vermont is a licensed clinical Psychologist based in San Francisco, CA. She is passionate about providing support to people in times of intense pain and grief. Her main professional occupation centers around grief counseling and disaster mental health.
      <br/><br/>
      She provides emotional support in various settings, such as in a private grief counseling practice, in-home counseling to bereaved parents, in large scale disasters, and to expatriate staff of an international disaster organization.
    </AboutCopy>
    {/* <Link to="/page-2/">Go to page 2</Link> */}
  </AboutWrapper>
)

export default IndexPage
