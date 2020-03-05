import React from 'react';
import Layout from '../components/layout';
import Link from 'gatsby-link';

import { AboutWrapper, AboutTitleWrapper, AboutTitle, AboutSvg, AboutLine, AboutCopy, AboutTestimonial, AboutImageWrapper } from '../styles/about-styles';
import { HomeButton, Spacer, Card, Copy } from '../components/Helpers';


const IndexPage = () => (
  <Layout>
    <AboutWrapper>
      <AboutTitleWrapper>
        <AboutTitle>ABOUT</AboutTitle>
        <AboutSvg className="about-page-svg">
          <AboutLine x1="75" y1="5" x2="192" y2="5" stroke="rgb(166, 76, 224)" strokeWidth="6" />
        </AboutSvg>
        <Link to="/" className='home-button'>
          <HomeButton />
        </Link>
      </AboutTitleWrapper>
      <AboutCopy>
        Pascale Vermont is a licensed clinical psychologist based in San Francisco, CA. She is passionate about providing support to people in times of intense pain and grief. Her main professional occupation centers around grief counseling and disaster mental health.
        <br /><br />
        She provides emotional support in various settings, such as in a private grief counseling practice, in-home counseling to bereaved parents, in large scale disasters, and to expatriate staff of an international disaster organization.
      </AboutCopy>
      <Spacer />
      <AboutImageWrapper />

      <AboutTestimonial>
        <Card style={{ padding: '35px' }}>"The compassion, sympathy, and assurance she gave my husband and I helped us to move through the stages of our grief and realize that we were going to be ok. Her heartfelt questions and warm nature made it easy to open up and share our tragedy, our fears of trying again, our relationship struggles, our guilty thoughts, our happy moments, and so much more."<br /> - Anonymous Client
        </Card>
      </AboutTestimonial>
    </AboutWrapper>
  </Layout>
);

export default IndexPage;
