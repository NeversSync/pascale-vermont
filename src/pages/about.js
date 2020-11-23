import React from 'react';
import Layout from '../components/layout';
import Link from 'gatsby-link';

import {
  AboutWrapper,
  AboutTitleWrapper,
  AboutTitle,
  AboutSvg,
  AboutLine,
  AboutCopy,
  AboutTestimonial,
  AboutImageWrapper
} from '../styles/about-styles';
import { Button, Spacer, Card, Copy } from '../components/Helpers';

const IndexPage = () => (
  <Layout>
    <AboutWrapper>
      <AboutTitleWrapper>
        <AboutTitle>ABOUT</AboutTitle>
        <AboutSvg className="about-page-svg">
          <AboutLine
            x1="75"
            y1="5"
            x2="192"
            y2="5"
            stroke="rgb(166, 76, 224)"
            strokeWidth="6"
          />
        </AboutSvg>
        <Link to="/" className="home-button">
          <Button />
        </Link>
      </AboutTitleWrapper>
      <AboutCopy>
        Pascale Vermont is a licensed clinical psychologist based in San Francisco, CA. Pascale's main professional activity is as a grief counselor to bereaved parents after a pregnancy or infancy loss. She is also the psychologist at George Mark Children’s House, a pediatric palliative care home in San Leandro, CA.
        <br />
        <br />
        In addition, she provides crisis counseling and stress management training to staff of an international NGO based in 17 countries such as Bangladesh, South Sudan, Iran and Afghanistan, either remotely and or in person.
      </AboutCopy>
      <Spacer />
      <AboutImageWrapper />
      <h3
        style={{
          textAlign: 'center',
          gridColumn: '1 / -1',
          marginTop: '1em',
          fontStyle: 'italic',
          lineHeight: '1.25'
        }}
      >
  'We did not want to have his loss define
        <br /> us as broken people for the rest of our lives.' - S
      </h3>

      <AboutTestimonial>
        <Card style={{ padding: '35px' }}>
          "The compassion, sympathy, and assurance she gave my husband and I
          helped us to move through the stages of our grief and realize that we
          were going to be ok. Her heartfelt questions and warm nature made it
          easy to open up and share our tragedy, our fears of trying again, our
          relationship struggles, our guilty thoughts, our happy moments, and so
          much more."
          <br /> - Anonymous Client
        </Card>
      </AboutTestimonial>

    </AboutWrapper>

  </Layout>
);

export default IndexPage;
