import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components';
import { Image, Transformation } from 'cloudinary-react';

import { AboutWrapper, AboutTitleWrapper, AboutTitle, AboutSvg, AboutLine, AboutCopy, SoundcloudWrapper, ImageWrapper, Spacer, AboutCTA, AboutTestimonial } from '../styles/about-styles';

const IndexPage = () => (
  <AboutWrapper>
    <AboutTitleWrapper>
      <AboutTitle>ABOUT</AboutTitle>
      <AboutSvg>
        <AboutLine x1="70" y1="5" x2="175" y2="5" stroke="rgb(166, 76, 224)" strokeWidth="6"/>
      </AboutSvg>
      <Link to="/" style={{display: 'grid', gridColumn: '3 / 4', gridRow: '2 / 3', alignSelf: 'center', justifySelf: 'center', alignContent: 'center'}}>
        <AboutCTA>HOME</AboutCTA>
    </Link>
    </AboutTitleWrapper>
    <AboutCopy>
      Pascale Vermont is a licensed clinical psychologist based in San Francisco, CA. She is passionate about providing support to people in times of intense pain and grief. Her main professional occupation centers around grief counseling and disaster mental health.
      <br/><br/>
      She provides emotional support in various settings, such as in a private grief counseling practice, in-home counseling to bereaved parents, in large scale disasters, and to expatriate staff of an international disaster organization.
    </AboutCopy>
    <Spacer/>
    <ImageWrapper>
      <Image style={{gridColumn: '1 / 2', borderRadius: '4px'}}cloudName="nicky-cloudinary" publicId="PASCALE-VERMONT/Edited_Image_2013-11-24-15_15_22.jpg" width="400">
        <Transformation quality="jpegmini"/>
      </Image>
    </ImageWrapper>
    <SoundcloudWrapper>
      <iframe style={{borderRadius: '4px'}}width="100%" height="400" scrolling="no" frameBorder="yes" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/273730486&color=%23ff5500&auto_play=false&hide_related=false&show_comments=false&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
    </SoundcloudWrapper>
    <AboutTestimonial>"The compassion, sympathy, and assurance she gave my husband and I helped us to move through the stages of our grief and realize that we were going to be ok. Her heartfelt questions and warm nature made it easy to open up and share our tragedy, our fears of trying again, our relationship struggles, our guilty thoughts, our happy moments, and so much more." - Anonymous Client
    </AboutTestimonial>
  </AboutWrapper>
)

export default IndexPage
