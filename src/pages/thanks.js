import React from 'react';
import Link from 'gatsby-link';
import Layout from '../components/layout';
import { Button, Copy } from '../components/Helpers';
import { ThanksWrapper, ContentWrapper } from '../styles/thanks-styles';

const IndexPage = () => (
  <Layout>
    <ThanksWrapper>
      <ContentWrapper>
        <Copy>Thank you!</Copy>
        <Link to="/">
          <Button>HOME</Button>
        </Link>
      </ContentWrapper>
    </ThanksWrapper>
  </Layout>
);

export default IndexPage;
