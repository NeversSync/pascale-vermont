import React from 'react';
import Link from 'gatsby-link';
import Layout from '../components/layout';
import { EntypoDotSingle } from 'react-entypo';

import {
  PalliativeWrapper,
  PalliativeTitleWrapper,
  PalliativeTitle,
  PalliativeSvg,
  PalliativeLine,
  PalliativeTestimonial,
  PalliativeImageWrapper,
  PalliativeCopy
} from '../styles/palliative-styles';
import { Button, Copy, Card } from '../components/Helpers';

const IndexPage = () => (
  <Layout>
    <PalliativeWrapper style={{ borderBottom: 'none' }}>
      <PalliativeTitleWrapper>
        <PalliativeTitle>PALLIATIVE CARE SUPPORT</PalliativeTitle>
        <PalliativeSvg>
          <PalliativeLine
            x1="115"
            y1="5"
            x2="335"
            y2="5"
            stroke="rgb(255, 189, 66)"
            strokeWidth="6"
          />
        </PalliativeSvg>
        <Link to="/" className="home-button">
          <Button />
        </Link>
      </PalliativeTitleWrapper>
      <PalliativeImageWrapper />
      <PalliativeCopy>
        Some highlights of Pascale's work in Palliative Care:
        <br />
        <br />
        <EntypoDotSingle /> Volunteer with No One Dies Alone program at Laguna
        Honda Rehabilitation Center, San Francisco. Led bereavement groups and
        sat with actively dying patients.
        <br />
        <EntypoDotSingle />
        Palliative care counselor at Kaiser Permanente Hospitals in Vallejo and
        San Francisco.
        <br />
        <EntypoDotSingle />
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
      </PalliativeCopy>
      <PalliativeTestimonial>
        <Card style={{ padding: '35px' }}>
          "The individual who came to our home was a profoundly compassionate,
          supportive, skillful listener, and she offered us some guidance for
          how we might navigate the shock and complex emotions we were
          experiencing. She was deeply caring, truly sensitive and generous with
          her time in speaking with several people impacted by this traumatic,
          violent act and our impending loss."
          <br /> - A witness to a neighbor's violent death
        </Card>
      </PalliativeTestimonial>
    </PalliativeWrapper>
  </Layout>
);

export default IndexPage;
