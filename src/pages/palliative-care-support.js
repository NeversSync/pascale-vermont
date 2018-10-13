import React from 'react'
import Link from 'gatsby-link'
import { Image, Transformation } from 'cloudinary-react';

import { PalliativeWrapper, PalliativeTitleWrapper, PalliativeTitle, PalliativeSvg, PalliativeLine, PalliativeTestimonial, PalliativeImageWrapper, PalliativeCopy } from '../styles/palliative-styles';
import { HomeButton, Spacer, ImageWrapper, Copy, Card } from '../components/Helpers';

const IndexPage = () => (
  <PalliativeWrapper style={{ borderBottom: 'none' }}>
    <PalliativeTitleWrapper>
      <PalliativeTitle>PALLIATIVE CARE SUPPORT</PalliativeTitle>
      <PalliativeSvg>
        <PalliativeLine x1="115" y1="5" x2="335" y2="5" stroke="rgb(255, 189, 66)" strokeWidth="6" />
      </PalliativeSvg>
      <Link to="/" className='home-button'>
        <HomeButton />
      </Link>
    </PalliativeTitleWrapper>
    <PalliativeImageWrapper />
    <PalliativeCopy>
      Some highlights of Pascale's work in Palliative Care:<br/><br/>
      <li>Volunteer with No One Dies Alone program at Laguna Honda Rehabilitation Center, San Francisco. Led bereavement groups and sat with actively dying patients.</li><br/>
      <li>Palliative care counselor at Kaiser Permanente Hospitals in Vallejo and San Francisco.</li><br/>
      <li>Volunteer and instructor for San Francisco Crisis Care working in partnership with law enforcement officials and providing emotional and practical assistance to families after a sudden death.</li><br/>
      <br/><Copy style={{textAlign: 'center'}}><Link to="/contact/" className='custom-link' >Contact her</Link> for more information.</Copy>
    </PalliativeCopy>
    <PalliativeTestimonial>
      <Card style={{ padding: '35px' }}>
      "The individual who came to our home was a profoundly compassionate, supportive, skillful listener, and she offered us some guidance for how we might navigate the shock and complex emotions we were experiencing. She was deeply caring, truly sensitive and generous with her time in speaking with several people impacted by this traumatic, violent act and our impending loss."<br/> - A witness to a neighbor's violent death
      </Card>
    </PalliativeTestimonial>
  </PalliativeWrapper>
);

export default IndexPage;