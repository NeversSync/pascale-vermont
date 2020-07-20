import React from 'react';
import Link from 'gatsby-link';
import Layout from '../components/layout';
import {
  NGOWrapper,
  NGOTitleWrapper,
  NGOTitle,
  NGOSvg,
  NGOLine,
  NGOCopy,
  NGOTestimonial,
  NGOImageWrapper
} from '../styles/ngo-styles';
import {
  HomeButton,
  Spacer,
  ImageWrapper,
  Copy,
  Card
} from '../components/Helpers';

const IndexPage = () => (
  <Layout>
    <NGOWrapper>
      <NGOTitleWrapper>
        <NGOTitle>NGO CRISIS COUNSELING</NGOTitle>
        <NGOSvg>
          <NGOLine
            x1="115"
            y1="5"
            x2="335"
            y2="5"
            stroke="rgb(166, 76, 224)"
            strokeWidth="6"
          />
        </NGOSvg>
        <Link to="/" className="home-button">
          <HomeButton />
        </Link>
      </NGOTitleWrapper>
      <NGOImageWrapper />
      <NGOCopy>
        Pascale offers crisis counseling to expatriate staff of Relief
        International based in 16 countries over Skype when they experience a
        traumatic experience while in the field or suffer a personal crisis. She
        served as a psychologist to West African refugees on Samos Island,
        Greece, who had fled their home countries because of extreme violence
        and threats of death. She also trained local staff in Bangladesh who
        work with Rohingya refugees in Stress Management, Resilience and
        Self-Care, and met with them individually for counseling. She provided
        similar training and counseling to local staff in Juba and Maban, South
        Sudan, and in Nairobi Kenya. In addition, she was deployed to Haiti
        after the 2010 earthquake to provide grief counseling to civilians and
        hospital staff who had lost many family members and friends.
        <br />
        <br />
        <a
          className="custom-link"
          href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3048646/"
          target="_blank"
        >
          Read more
        </a>{' '}
        about Pascale's grief counseling work for the 2010 Haiti earthquake.
      </NGOCopy>
      <NGOTestimonial>
        <Card style={{ padding: '35px' }}>
          "Acute grief is a thunderstorm, a monsoonal downpour, a sudden flood
          that submerges almost everything in its path."
          <br /> - Steven Levine
        </Card>
      </NGOTestimonial>
    </NGOWrapper>
  </Layout>
);

export default IndexPage;
