import React from 'react'
import Link from 'gatsby-link'
import styled from '../../node_modules/styled-components';
import { Image, Transformation } from 'cloudinary-react';

import Nav from '../components/Nav';
import { Card, Copy, LandingSummaryWrapper, Title, SubTitle, CTAButton, SVGArrowRight, SVGArrowLeft, LandingSummaryCopy, ImageWrapper, Spacer, RightLandingSummaryWrapper, RightLandingSummaryCopy } from '../components/Helpers';

import { HeroContainer, HeroImg, Heading, LandingSubtitle } from '../styles/landing-styles';
import { AboutWrapper, AboutTitle, AboutSvg, AboutLine, SoundcloudWrapper, AboutTestimonial } from '../styles/about-styles';
import { PerinatalWrapper, PerinatalTitle, PerinatalSvg, PerinatalLine, PerinatalTestimonial } from '../styles/perinatal-styles';
import { NGOWrapper, NGOTitle, NGOSvg, NGOLine, NGOTestimonial } from '../styles/ngo-styles';
import { GriefWrapper, GriefTitle, GriefSvg, GriefLine, GriefTestimonial } from '../styles/grief-styles';
import { DisasterWrapper, DisasterTitle, DisasterSvg, DisasterLine, DisasterTestimonial } from '../styles/disaster-styles';
import { PalliativeWrapper, PalliativeTitle, PalliativeSvg, PalliativeLine, PalliativeTestimonial } from '../styles/palliative-styles';

// TODO: 
// fix nav line
// add drop shadow to nav line
// Animate arrows in learn more btn 
// Borrow animations and scroll library from portfolio
// Borrow responsive text and styles from portfolio


const IndexPage = () => (
  <div>
    <Landing />
    {/* <Card>
      <Copy style={{width: '50%', textAlign: 'center', margin: '0 auto', padding: '5%'}}>
      Those first days, sorrow's pain
      was tangible:
      an amputation, a dismemberment,
      the gap so great, no sobs,
      children, friends
      would fill its space:
      a broken heart is body's pain indeed.
      Days pass, and nights, flowing into weeks;
      milk no longer spills
      with my tears.
      Hours once spent weeping
      now weave into patterns,
      our words of grief and love
      now reach for friendship's clasp,
      now look ahead....
      -Lois Lake Church
      From Quarto, written for Emily
      </Copy>
    </Card> */}
    <AboutSummary />
    <PerinatalSummary />
    <GriefSummary />
    <NGOSummary />
    <DisasterSummary />
    <PalliativeSummary />
  </div>
)

const Landing = () => (
  <HeroContainer>
    <Nav />
    <HeroImg src={'https://res.cloudinary.com/nicky-cloudinary/image/upload/s--KVcKSXUy--/f_auto,q_jpegmini/v1535768654/PASCALE-VERMONT/joshua-ness-107133-unsplash.jpg'} width="100%" height="auto" />
    <Heading>
      <Title>Pascale Vermont, PhD</Title>
      <LandingSubtitle>Grief Counselor</LandingSubtitle>
    </Heading>
  </HeroContainer>
);

const AboutSummary = () => (
  <AboutWrapper>
    <LandingSummaryWrapper>
      <AboutTitle>ABOUT</AboutTitle>
      <AboutSvg>
        <AboutLine x1="85" y1="5" x2="195" y2="5" stroke="rgb(166, 76, 224)" strokeWidth="6" />
      </AboutSvg>
      <Link to="/about/" style={{ display: 'grid', gridColumn: '4 / 5', gridRow: '3 / 4', alignSelf: 'center', justifySelf: 'end', alignContent: 'center' }}>
        <SVGArrowLeft />
      </Link>
    </LandingSummaryWrapper>
    <LandingSummaryCopy>
      Pascale Vermont is a licensed clinical psychologist based in San Francisco, CA. She is passionate about providing support to people in times of intense pain and grief. Her main professional occupation centers around grief counseling and disaster mental health.
    <br /><br />
      She provides emotional support in various settings, such as in a private grief counseling practice, in-home counseling to bereaved parents, in large scale disasters, and to expatriate staff of an international disaster organization.
  </LandingSummaryCopy>
    <Spacer />
    <ImageWrapper>
      <Image style={{ gridColumn: '1 / 2', borderRadius: '4px' }} cloudName="nicky-cloudinary" publicId="PASCALE-VERMONT/Edited_Image_2013-11-24-15_15_22.jpg" width="399">
        <Transformation quality="jpegmini" />
      </Image>
    </ImageWrapper>
    <SoundcloudWrapper>
      <iframe style={{ borderRadius: '4px' }} width="100%" height="400" scrolling="no" frameBorder="yes" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/273730486&color=%23ff5500&auto_play=false&hide_related=false&show_comments=false&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
    </SoundcloudWrapper>
    <AboutTestimonial>"The compassion, sympathy, and assurance she gave my husband and I helped us to move through the stages of our grief and realize that we were going to be ok. Her heartfelt questions and warm nature made it easy to open up and share our tragedy, our fears of trying again, our relationship struggles, our guilty thoughts, our happy moments, and so much more." - Anonymous Client
  </AboutTestimonial>
  </AboutWrapper>
)

const PerinatalSummary = () => (
  <PerinatalWrapper>
    <RightLandingSummaryWrapper style={{ gridColumn: '2 / 3', background: '' }}>
      <PerinatalTitle>PERINATAL LOSS</PerinatalTitle>
      <PerinatalSvg>
        <PerinatalLine x1="5" y1="5" x2="175" y2="5" stroke="rgb(229, 69, 117)" strokeWidth="6" />
      </PerinatalSvg>
      <Link to="/perinatal-loss/" style={{ display: 'grid', gridColumn: '2 / 3', gridRow: '3 / 4', alignSelf: 'center', justifySelf: 'start', alignContent: 'center' }}>
        <SVGArrowRight />
      </Link>
    </RightLandingSummaryWrapper >
    <RightLandingSummaryCopy>
      Pascale offers bereavement counseling to parents who lose a child during pregnancy, at birth or in early infancy.
      At a time of great pain and loneliness, she provides emotional support in the home, as well as education about the grief process and how to handle the many consequences of the loss.
      She meets with parents and other family members as long as support is needed, and at other times when the grief is triggered by anniversaries or subsequent pregnancies.
    </RightLandingSummaryCopy>
    <PerinatalTestimonial>"We feel incredibly grateful for Pascale's expertise, compassion, and professionalism during our time of grieving and our healing process following the death of our baby girl." - L and L
    </PerinatalTestimonial>
  </PerinatalWrapper>
);

const GriefSummary = () => (
  <GriefWrapper>
    <LandingSummaryWrapper>
      <GriefTitle>GRIEF COUNSELING</GriefTitle>
      <GriefSvg>
        <GriefLine x1="115" y1="5" x2="335" y2="5" stroke="rgb(255, 189, 66)" strokeWidth="6" />
      </GriefSvg>
      <Link to="/about/" style={{ display: 'grid', gridColumn: '4 / 5', gridRow: '3 / 4', alignSelf: 'center', justifySelf: 'end', alignContent: 'center' }}>
        <SVGArrowLeft />
      </Link>
    </LandingSummaryWrapper>
    <LandingSummaryCopy>
      What Pascale provides in her grief counseling practice:
      A safe place to express the multitude of feelings experienced by the bereaved - sadness, doubts, guilt, anger, moodiness... <br /><br />
      Over time small victories build upon each other until they tend to dominate, and the moments of respite between the waves of pain lengthen.
      Pascale meets clients in her home office in San Francisco and has worked over Skype with people as far away as India, Pakistan and South Sudan.
    </LandingSummaryCopy>
    <GriefTestimonial>"Pascale showed me how to look outside of my troubles, and see within to realize my strength and good qualities without being so hard on myself. She's very good to point out good things that counter whatever negative issue I'm talking about, and helps me to reconnect with my own potential and strength." - Following the end of an intimate relationship
    </GriefTestimonial>
  </GriefWrapper>
);

const NGOSummary = () => (
  <NGOWrapper>
    <RightLandingSummaryWrapper>
      <NGOTitle>NGO CRISIS COUNSELING</NGOTitle>
      <NGOSvg>
        <NGOLine x1="5" y1="5" x2="225" y2="5" stroke="rgb(166, 76, 224)" strokeWidth="6" />
      </NGOSvg>
      <Link to="/ngo-crisis-counseling/" style={{ display: 'grid', gridColumn: '2 / 3', gridRow: '3 / 4', alignSelf: 'center', justifySelf: 'start', alignContent: 'center' }}>
        <SVGArrowRight />
      </Link>
    </RightLandingSummaryWrapper>
    <RightLandingSummaryCopy>
      Pascale offers crisis counseling to expatriate staff of Relief International based in 22 countries over Skype when they experience a traumatic experience while in the field or suffer a personal crisis.  She was also deployed to Haiti after the 2010 earthquake to provide grief counseling to civilians and hospital staff who had lost many family members and friends.
        Article on Haiti earthquake…
    </RightLandingSummaryCopy>
    <NGOTestimonial>"Acute grief is a thunderstorm, a monsoonal downpour, a sudden flood that submerges almost everything in its path." - Steven Levine
    </NGOTestimonial>
  </NGOWrapper>
);

const DisasterSummary = () => (
  <DisasterWrapper>
    <LandingSummaryWrapper>
      <DisasterTitle>DISASTER MENTAL HEALTH</DisasterTitle>
      <DisasterSvg>
        <DisasterLine x1="100" y1="5" x2="248" y2="5" stroke="rgb(229, 69, 117)" strokeWidth="6" />
      </DisasterSvg>
      <Link to="/disaster-mental-health/" style={{ display: 'grid', gridColumn: '4 / 5', gridRow: '3 / 4', alignSelf: 'center', justifySelf: 'end', alignContent: 'center' }}>
        <SVGArrowLeft />
      </Link>
    </LandingSummaryWrapper>
    <LandingSummaryCopy>
      For 10 years Pascale served as a disaster mental health volunteer and lead of the San Francisco mental health team for the American Red Cross.  She provided crisis and grief counseling to survivors of tornadoes, hurricanes and floods in Alabama, Mississippi, Oklahoma, Arkansas and Texas and to the victims and families of the Asiana Airlines plane crash at San Francisco International Airport.
    </LandingSummaryCopy>
    <DisasterTestimonial>"I want to thank you for your amazing emotional support.  What impressed me was not only your professional expertise but, more importantly, your natural care, attention and compassion." -  K
    </DisasterTestimonial>
  </DisasterWrapper>
);

const PalliativeSummary = () => (
  <PalliativeWrapper>
    <RightLandingSummaryWrapper>
      <PalliativeTitle>PALLIATIVE CARE SUPPORT</PalliativeTitle>
      <PalliativeSvg>
        <PalliativeLine x1="5" y1="5" x2="190" y2="5" stroke="rgb(255, 189, 66)" strokeWidth="6" />
      </PalliativeSvg>
      <Link to="/palliative-care-support/" style={{ display: 'grid', gridColumn: '2 / 3', gridRow: '3 / 4', alignSelf: 'center', justifySelf: 'start', alignContent: 'center' }}>
        <SVGArrowRight />
      </Link>
    </RightLandingSummaryWrapper>
    <RightLandingSummaryCopy>
      Pascale offers crisis counseling to expatriate staff of Relief International based in 22 countries over Skype when they experience a traumatic experience while in the field or suffer a personal crisis.  She was also deployed to Haiti after the 2010 earthquake to provide grief counseling to civilians and hospital staff who had lost many family members and friends.
        Article on Haiti earthquake…
    </RightLandingSummaryCopy>
    <PalliativeTestimonial>"Acute grief is a thunderstorm, a monsoonal downpour, a sudden flood that submerges almost everything in its path." - Steven Levine
    </PalliativeTestimonial>
  </PalliativeWrapper>
);

export default IndexPage;
