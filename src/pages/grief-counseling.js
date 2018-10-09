import React from 'react'
import Link from 'gatsby-link'
import { Image, Transformation } from 'cloudinary-react';

import { GriefWrapper, GriefTitle, GriefSvg, GriefLine, GriefTestimonial, GriefImg, GriefTitleWrapper, GriefCopy } from '../styles/grief-styles';
import { HomeButton, Spacer, ImageWrapper, Copy } from '../components/Helpers';

const IndexPage = () => (
  <GriefWrapper style={{borderBottom: 'none'}}>
    <GriefTitleWrapper>
      <GriefTitle>GRIEF COUNSELING</GriefTitle>
      <GriefSvg>
        <GriefLine x1="115" y1="5" x2="335" y2="5" stroke="rgb(255, 189, 66)" strokeWidth="6" />
      </GriefSvg>
      <Link to="/" style={{ display: 'grid', gridColumn: '4 / 5', gridRow: '3 / 4', alignSelf: 'center', justifySelf: 'end', alignContent: 'center' }}>
      <HomeButton/>
      </Link>
    </GriefTitleWrapper>
    <GriefCopy>
      What Pascale provides in her grief counseling practice:
      A safe place to express the multitude of feelings experienced by the bereaved - sadness, doubts, guilt, anger, moodiness... <br /><br />
      Over time small victories build upon each other until they tend to dominate, and the moments of respite between the waves of pain lengthen.
      Pascale meets clients in her home office in San Francisco and has worked over Skype with people as far away as India, Pakistan and South Sudan.
    </GriefCopy>
    <GriefTestimonial>"Pascale showed me how to look outside of my troubles, and see within to realize my strength and good qualities without being so hard on myself. She's very good to point out good things that counter whatever negative issue I'm talking about, and helps me to reconnect with my own potential and strength."<br/> - Following the end of an intimate relationship
    </GriefTestimonial>
    <GriefImg src={'https://res.cloudinary.com/nicky-cloudinary/image/upload/f_auto,q_auto:best/v1538607993/PASCALE-VERMONT/ravi-roshan-383162-unsplash.jpg'} width="100%" height="auto" />
  </GriefWrapper>
);

export default IndexPage;