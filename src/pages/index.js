import React from 'react'
import Link from 'gatsby-link'
import styled from '../../node_modules/styled-components';
import { Image, Transformation } from 'cloudinary-react';

import Nav from '../components/Nav';
import { Title, SubTitle, CTAButton, SVGArrowRight, SVGArrowLeft, ImageWrapper, Spacer } from '../components/Helpers';
import { HeroContainer, HeroImg, Heading, LandingSubtitle } from '../styles/landing-styles';
import { AboutWrapper, AboutTitleWrapper, AboutTitle, AboutSvg, AboutLine, AboutCopy, SoundcloudWrapper, AboutCTA, AboutTestimonial } from '../styles/about-styles';
import { PerinatalWrapper, PerinatalTitleWrapper, PerinatalTitle, PerinatalSvg, PerinatalLine, PerinatalCopy, PerinatalCopyLanding, PerinatalTestimonial } from '../styles/perinatal-styles';

// TODO: 
// add drop shadow to nav line
// Add animations
// Animate arrows in learn more btn 
// Borrow animations and scroll library from portfolio
// Borrow responsive text and styles from portfolio


const IndexPage = () => (
  <div>
    <Landing/>
    <AboutSummary/>
    <PerinatalSummary/>
  </div>
)

const Landing = () => (
  <HeroContainer>
      <Nav /> 
      <HeroImg src={'http://res.cloudinary.com/nicky-cloudinary/image/upload/c_scale,f_auto,h_711,q_100/v1535768654/joshua-ness-107133-unsplash.jpg'} width="100%" height="auto"/>
      <Heading>
        <Title>Pascale Vermont, PhD</Title>
        <LandingSubtitle>Grief Counselor</LandingSubtitle>
      </Heading>
    </HeroContainer>
);

const AboutSummary = () => (
  <AboutWrapper>
  <AboutTitleWrapper>
    <AboutTitle>ABOUT</AboutTitle>
    <AboutSvg>
      <AboutLine x1="85" y1="3" x2="195" y2="3" stroke="rgb(166, 76, 224)" strokeWidth="6"/>
    </AboutSvg>
    <Link to="/about/" style={{display: 'grid', gridColumn: '4 / 5', gridRow: '3 / 4', alignSelf: 'center', justifySelf: 'center', alignContent: 'center'}}>
      <SVGArrowLeft/>
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

const PerinatalSummary = () => (
  <PerinatalWrapper>
    <PerinatalTitleWrapper>
      <PerinatalTitle>PERINATAL LOSS</PerinatalTitle>
      <PerinatalSvg>
        <PerinatalLine x1="5" y1="5" x2="175" y2="5" stroke="rgb(229, 69, 117)" strokeWidth="6"/>
      </PerinatalSvg>
      <Link to="/perinatal-loss/" style={{display: 'grid', gridColumn: '2 / 3', gridRow: '3 / 4', alignSelf: 'center', justifySelf: 'start', alignContent: 'center'}}>
      <SVGArrowRight/>
    </Link>
    </PerinatalTitleWrapper>
    <PerinatalCopyLanding>
      Pascale offers bereavement counseling to parents who lose a child during pregnancy, at birth or in early infancy.
      At a time of great pain and loneliness, she provides emotional support in the home, as well as education about the grief process and how to handle the many consequences of the loss. 
      She meets with parents and other family members as long as support is needed, and at other times when the grief is triggered by anniversaries or subsequent pregnancies.
    </PerinatalCopyLanding>
    <PerinatalTestimonial>"We feel incredibly grateful for Pascale's expertise, compassion, and professionalism during our time of grieving and our healing process following the death of our baby girl." - L and L
    </PerinatalTestimonial>
  </PerinatalWrapper>
);

export default IndexPage;
