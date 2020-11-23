import React from 'react';
import Link from 'gatsby-link';
import Layout from '../components/layout';

import {
  MediaWrapper,
  MediaTitleWrapper,
  MediaTitle,
  MediaSvg,
  MediaLine,
  MediaTestimonial,
  MediaImageWrapper,
  MediaCopy
} from '../styles/media-styles';
import { HomeButton, Copy, Card } from '../components/Helpers';

const Media = () => (
  <Layout>
    <MediaWrapper style={{ borderBottom: 'none' }}>
      <MediaTitleWrapper>
        <MediaTitle>Media</MediaTitle>
        <MediaSvg>
          <MediaLine
            x1="115"
            y1="5"
            x2="335"
            y2="5"
            stroke="rgb(255, 189, 66)"
            strokeWidth="6"
          />
        </MediaSvg>
        <Link to="/" className="home-button">
          <HomeButton />
        </Link>
      </MediaTitleWrapper>
      <MediaImageWrapper />
      <MediaCopy>
        Some highlights of Pascale's work in Media Care:
        <br />
        <br />
        {/* <EntypoDotSingle />  */}
        Volunteer with No One Dies Alone program at Laguna
        Honda Rehabilitation Center, San Francisco. Led bereavement groups and
        sat with actively dying patients.
        <br />
        {/* <EntypoDotSingle /> */}
        Media care counselor at Kaiser Permanente Hospitals in Vallejo and
        San Francisco.
        <br />
        {/* <EntypoDotSingle /> */}
        Volunteer and instructor for San Francisco Crisis Care working in
        partnership with law enforcement officials and providing emotional and
        practical assistance to families after a sudden death.
        <br />
        <br />
        <Copy className="contact-for-more">
          <Link to="/contact/" className="custom-link">
            Contact her
          </Link>{' '}
          for more information.
        </Copy>
      </MediaCopy>
      <MediaTestimonial>
        <Card style={{ padding: '35px' }}>
          "The individual who came to our home was a profoundly compassionate,
          supportive, skillful listener, and she offered us some guidance for
          how we might navigate the shock and complex emotions we were
          experiencing. She was deeply caring, truly sensitive and generous with
          her time in speaking with several people impacted by this traumatic,
          violent act and our impending loss."
          <br /> - A witness to a neighbor's violent death
        </Card>
      </MediaTestimonial>
    </MediaWrapper>
  </Layout>
);

export default Media;
