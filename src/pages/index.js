import React from 'react'
import Link from 'gatsby-link'
import styled from '../../node_modules/styled-components';
import { Image, Transformation } from 'cloudinary-react';

import About from './about';
import Nav from '../components/Nav';
import Perinatal from './perinatal-loss'; 
import { Title, SubTitle, CTAButton } from '../components/Helpers';
import { HeroContainer, HeroImg, Heading, LandingSubtitle } from '../styles/landing-styles';
import { AboutWrapper, AboutTitleWrapper, AboutTitle, AboutSvg, AboutLine, AboutCopy, SoundcloudWrapper, ImageWrapper, Spacer, AboutCTA, AboutTestimonial } from '../styles/about-styles';

// TODO: 
// add drop shadow to nav line
// Add animations
// Animate arrows in learn more btn 
// Borrow animations and scroll library from portfolio
// Borrow responsive text and styles from portfolio


const IndexPage = () => (
  <div>
    <HeroContainer>
      <Nav /> 
      <HeroImg src={'http://res.cloudinary.com/nicky-cloudinary/image/upload/c_scale,f_auto,h_711,q_100/v1535768654/joshua-ness-107133-unsplash.jpg'} width="100%" height="auto"/>
      <Heading>
        <Title>Pascale Vermont, PhD</Title>
        <LandingSubtitle>Grief Counselor</LandingSubtitle>
      </Heading>
    </HeroContainer>
    <AboutSummary/>
    <Perinatal/>
  </div>
)

const AboutSummary = () => (
  <AboutWrapper>
  <AboutTitleWrapper>
    <AboutTitle>ABOUT</AboutTitle>
    <AboutSvg>
      <AboutLine x1="85" y1="3" x2="195" y2="3" stroke="rgb(166, 76, 224)" strokeWidth="6"/>
    </AboutSvg>
    <Link to="/about/" style={{display: 'grid', gridColumn: '4 / 5', gridRow: '3 / 4', alignSelf: 'center', justifySelf: 'center', alignContent: 'center'}}>
      <CTAButton className="arrow"><p style={{ gridColumn: '2 / 3', gridRow: ' 1 / 2 ', color: 'white' }}>LEARN MORE</p>
        <svg style={{ gridColumn: '1 / 2', gridRow: ' 1 / 2 ' }}xmlns="http://www.w3.org/2000/svg" viewBox="0 0 453.5 270" transform='rotate(180) scale(.5)'>
        <g id="Layer_2" data-name="Layer 2">
          <path id="arrow-head" fill="none" stroke="#fff" strokeWidth="20" d="M318.5 10l125 125-125 125" strokeLinecap="round" strokeLinejoin="round"/>
          <path id="arrow-body" fill="white" stroke="white" strokeWidth="" strokeMiterlimit="0" d="M433 144.5H10a10 10 0 0 1 0-20h423a10 10 0 0 1 0 20z"/>
        </g>
      </svg> 
    </CTAButton>
  </Link>
  </AboutTitleWrapper>
  <AboutCopy>
    Pascale Vermont is a licensed clinical psychologist based in San Francisco, CA. She is passionate about providing support to people in times of intense pain and grief. Her main professional occupation centers around grief counseling and disaster mental health.
    <br/><br/>
    She provides emotional support in various settings, such as in a private grief counseling practice, in-home counseling to bereaved parents, in large scale disasters, and to expatriate staff of an international disaster organization.
  </AboutCopy>
  <Spacer/>
  <ImageWrapper>
    <Image style={{gridColumn: '1 / 2', borderRadius: '4px'}}cloudName="nicky-cloudinary" publicId="PASCALE-VERMONT/Edited_Image_2013-11-24-15_15_22.jpg" width="399">
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
