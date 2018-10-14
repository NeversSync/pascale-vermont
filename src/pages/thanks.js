import React from 'react';
import Link from 'gatsby-link'
import { HomeButton, Copy, Wrapper } from '../components/Helpers';

const IndexPage = () => (
  <Wrapper>
    <Link to="/">
  <HomeButton>HOME</HomeButton>
  </Link>
  <Copy>Thanks!</Copy>
  </Wrapper>
);

export default IndexPage;