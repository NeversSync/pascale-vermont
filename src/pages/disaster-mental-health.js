import React from 'react';
import Link from 'gatsby-link';
import Layout from '../components/layout';
import { DisasterWrapper, DisasterTitleWrapper, DisasterTitle, DisasterSvg, DisasterLine, DisasterCopy, DisasterTestimonial, DisasterImageWrapper } from '../styles/disaster-styles';
import { HomeButton, Spacer, ImageWrapper, Copy, Card } from '../components/Helpers';

const IndexPage = () => (
  <Layout>
    <DisasterWrapper>
      <DisasterTitleWrapper>
        <DisasterTitle>DISASTER MENTAL HEALTH</DisasterTitle>
        <DisasterSvg>
          <DisasterLine x1="100" y1="5" x2="249" y2="5" stroke="rgb(166, 76, 224)" strokeWidth="6" />
        </DisasterSvg>
        <Link to="/" className='home-button'>
          <HomeButton />
        </Link>
      </DisasterTitleWrapper>
      <DisasterImageWrapper />
      <DisasterCopy>
        For 10 years Pascale served as a disaster mental health volunteer and lead of the San Francisco mental health team for the American Red Cross.  She provided crisis and grief counseling to survivors of tornadoes, hurricanes and floods in Alabama, Mississippi, Oklahoma, Arkansas and Texas and to the victims and families of the Asiana Airlines plane crash at San Francisco International Airport.
        <br/><br/>
        <Link to='./obama-letter' className='custom-link'>Read</Link> about Pascale's experience helping a young boy during the aftermath of a tornado in Arkansas.
      </DisasterCopy>
      <DisasterTestimonial>
        <Card style={{ padding: '35px' }}>"I want to thank you for your amazing emotional support.  What impressed me was not only your professional expertise but, more importantly, your natural care, attention and compassion".<br /> - K
        </Card>
      </DisasterTestimonial>
    </DisasterWrapper>
  </Layout>
);

export default IndexPage;