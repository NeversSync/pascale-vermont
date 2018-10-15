import React from 'react'
import Link from 'gatsby-link'
import { EntypoDotSingle } from 'react-entypo';

import Nav from '../components/Nav';
import { Card, LandingSummaryWrapper, Title, SVGArrowRight, SVGArrowLeft, LandingSummaryCopy, ImageWrapper, RightLandingSummaryWrapper, RightLandingSummaryCopy, SummaryTestimonial, WithImageSummaryTestimonial, RightSummaryTitle, TallSummaryWrapper, RightTallSummaryWrapper } from '../components/Helpers';

import { HeroContainer, HeroImg, Heading, LandingSubtitle } from '../styles/landing-styles';
import { AboutWrapper, AboutSummaryTitle, AboutSummarySvg, AboutLine, SoundcloudWrapperSummary, AboutSummaryImg } from '../styles/about-styles';
import { PerinatalWrapper, PerinatalLine, PerinatalSvgSummary } from '../styles/perinatal-styles';
import { NGOWrapperSummary, NGOSvgSummary, NGOLine } from '../styles/ngo-styles';
import { GriefWrapper, GriefTitle, GriefSvg, GriefLine, GriefImgSummary } from '../styles/grief-styles';
import { DisasterWrapper, DisasterTitle, DisasterSvgSummary, DisasterLine, DisasterImg } from '../styles/disaster-styles';
import { PalliativeWrapperSummary, PalliativeSvgSummary, PalliativeLine } from '../styles/palliative-styles';
import { ContactWrapper, ContactForm, SubmitButton, ContactCard, ContactTitle, ContactSvg, ContactLine, ContactSummaryTitleWrapper, LeftHalfInputs, RightHalfInputs, RightTextArea, LeftInput } from '../styles/contact-styles';

// TODO: 
// Add back to top arrow
// Fix favicon
// Fix arrow directions on buttons
// fix nav menu size/styling on mobile
// Fix image width in about section on summary view
// Check browsers and landscape on mobile/tablet
// add GA to site
// Find red cross articles
// Animate arrows in learn more btn 
// Add more animations/ page transitions, fade in animations, etc. 

const IndexPage = () => (
  <div>
    <Landing />
    <AboutSummary />
    <PerinatalSummary />
    <GriefSummary />
    <NGOSummary />
    <DisasterSummary />
    <PalliativeSummary />
    <Contact />
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
      <AboutSummaryTitle>ABOUT</AboutSummaryTitle>
      <AboutSummarySvg>
        <AboutLine x1="85" y1="5" x2="195" y2="5" stroke="rgb(166, 76, 224)" strokeWidth="6" />
      </AboutSummarySvg>
      <Link to="/about/" className='left-button first-button'>
        <SVGArrowLeft />
      </Link>
    </LandingSummaryWrapper>
    <LandingSummaryCopy>
      Pascale Vermont is a licensed clinical psychologist based in San Francisco, CA. She is passionate about providing support to people in times of intense pain and grief. Her main professional occupation centers around grief counseling and disaster mental health.
    <br /><br />
      She provides emotional support in various settings, such as in a private grief counseling practice, in-home counseling to bereaved parents, in large scale disasters, and to expatriate staff of an international disaster organization.
  </LandingSummaryCopy>
    <AboutSummaryImg />
    <SoundcloudWrapperSummary>
      <iframe style={{ borderRadius: '4px' }} width="100%" height="500px" scrolling="no" frameBorder="yes" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/273730486&color=%23ff5500&auto_play=false&hide_related=false&show_comments=false&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
    </SoundcloudWrapperSummary>
    <SummaryTestimonial style={{ marginTop: '4%' }}>
      <Card style={{ padding: '35px' }}>Those first days, sorrow's pain<br />
        was tangible:<br />
        an amputation, a dismemberment,<br />
        the gap so great, no sobs,<br />
        children, friends<br />
        would fill its space:<br />
        a broken heart is body's pain indeed.<br />
        Days pass, and nights, flowing into weeks;<br />
        milk no longer spills<br />
        with my tears.<br />
        Hours once spent weeping<br />
        now weave into patterns,<br />
        our words of grief and love<br />
        now reach for friendship's clasp,<br />
        now look ahead...<br />
        -Lois Lake Church
      </Card>
    </SummaryTestimonial>
  </AboutWrapper>
)

const PerinatalSummary = () => (
  <PerinatalWrapper>
    <RightLandingSummaryWrapper>
      <RightSummaryTitle>PERINATAL LOSS</RightSummaryTitle>
      <PerinatalSvgSummary>
        <PerinatalLine x1="5" y1="5" x2="175" y2="5" stroke="rgb(229, 69, 117)" strokeWidth="6" />
      </PerinatalSvgSummary>
      <Link to="/perinatal-loss/" className='right-button'>
        <SVGArrowRight />
      </Link>
    </RightLandingSummaryWrapper >
    <RightLandingSummaryCopy>
      Pascale offers bereavement counseling to parents who lose a child during pregnancy, at birth or in early infancy.
      At a time of great pain and loneliness, she provides emotional support in the home, as well as education about the grief process and how to handle the many consequences of the loss.
      She meets with parents and other family members as long as support is needed, and at other times when the grief is triggered by anniversaries or subsequent pregnancies.
    </RightLandingSummaryCopy>
    <SummaryTestimonial>
      <Card style={{ padding: '35px' }}>"Truly our conversations over time scraped me off the emotional depth of despair and helped me start to look up."<br /> - Anonymous client
      </Card>
    </SummaryTestimonial>
  </PerinatalWrapper>
);

const GriefSummary = () => (
  <GriefWrapper>
    <LandingSummaryWrapper>
      <GriefTitle>GRIEF COUNSELING</GriefTitle>
      <GriefSvg>
        <GriefLine x1="115" y1="5" x2="335" y2="5" stroke="rgb(255, 189, 66)" strokeWidth="6" />
      </GriefSvg>
      <Link to="/grief-counseling/" className='left-button'>
        <SVGArrowLeft />
      </Link>
    </LandingSummaryWrapper>
    <LandingSummaryCopy>
      What Pascale provides in her grief counseling practice:
      A safe place to express the multitude of feelings experienced by the bereaved - sadness, doubts, guilt, anger, moodiness... <br /><br />
      Over time small victories build upon each other until they tend to dominate, and the moments of respite between the waves of pain lengthen.
      Pascale meets clients in her home office in San Francisco and has worked over Skype with people as far away as India, Pakistan and South Sudan.
      <br />
      <a className='custom-link' href="https://blogs.psychcentral.com/nlp/2017/05/blake-fletcher-half-hour-intern-podcast/" target="_blank">Read a summary</a> of highlights from an interview with Pascale by the <a className='custom-link' href="http://www.halfhourintern.com/" target="_blank">Half Hour Intern podcast</a>.
    </LandingSummaryCopy>
    <WithImageSummaryTestimonial>
      <Card style={{ padding: '35px' }}>"Pascale showed me how to look outside of my troubles, and see within to realize my strength and good qualities without being so hard on myself. She's very good to point out good things that counter whatever negative issue I'm talking about, and helps me to reconnect with my own potential and strength."<br /> - Following the end of an intimate relationship
      </Card>
    </WithImageSummaryTestimonial>
    <GriefImgSummary src={'https://res.cloudinary.com/nicky-cloudinary/image/upload/f_auto,q_auto:best/v1538607993/PASCALE-VERMONT/ravi-roshan-383162-unsplash.jpg'} width="100%" height="auto" />
  </GriefWrapper>
);

const NGOSummary = () => (
  <NGOWrapperSummary>
    <RightLandingSummaryWrapper>
      <RightSummaryTitle>NGO CRISIS COUNSELING</RightSummaryTitle>
      <NGOSvgSummary>
        <NGOLine x1="5" y1="5" x2="225" y2="5" stroke="rgb(166, 76, 224)" strokeWidth="6" />
      </NGOSvgSummary>
      <Link to="/ngo-crisis-counseling/" className='right-button'>
        <SVGArrowRight />
      </Link>
    </RightLandingSummaryWrapper>
    <RightLandingSummaryCopy>
      Pascale offers crisis counseling to expatriate staff of Relief International based in 22 countries over Skype when they experience a traumatic experience while in the field or suffer a personal crisis.  She was also deployed to Haiti after the 2010 earthquake to provide grief counseling to civilians and hospital staff who had lost many family members and friends.<br/>
      <a className='custom-link' href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3048646/" target="_blank">Read more</a> about Pascale's grief counseling work for the 2010 Haiti earthquake.
    </RightLandingSummaryCopy>
    <SummaryTestimonial>
      <Card style={{ padding: '35px' }}>"Acute grief is a thunderstorm, a monsoonal downpour, a sudden flood that submerges almost everything in its path."<br /> - Steven Levine
    </Card>
    </SummaryTestimonial>
  </NGOWrapperSummary>
);

const DisasterSummary = () => (
  <DisasterWrapper>
    <TallSummaryWrapper>
      <DisasterTitle>DISASTER MENTAL HEALTH</DisasterTitle>
      <DisasterSvgSummary>
        <DisasterLine x1="100" y1="5" x2="248" y2="5" stroke="rgb(229, 69, 117)" strokeWidth="6" />
      </DisasterSvgSummary>
      <Link to="/disaster-mental-health/" className='left-button'>
        <SVGArrowLeft />
      </Link>
    </TallSummaryWrapper>
    <LandingSummaryCopy>
      For 10 years Pascale served as a disaster mental health volunteer and lead of the San Francisco mental health team for the American Red Cross.  She provided crisis and grief counseling to survivors of tornadoes, hurricanes and floods in Alabama, Mississippi, Oklahoma, Arkansas and Texas and to the victims and families of the Asiana Airlines plane crash at San Francisco International Airport.
      {/* <li><a className='custom-link' href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3048646/" target="_blank">Response to plane crash at SFO</a></li>
      <li><a className='custom-link' href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3048646/" target="_blank">Arkansas tornado response</a></li> */}
    </LandingSummaryCopy>
    <WithImageSummaryTestimonial>
      <Card style={{ padding: '35px' }}>"I want to thank you for your amazing emotional support.  What impressed me was not only your professional expertise but, more importantly, your natural care, attention and compassion."<br /> - K
      </Card>
    </WithImageSummaryTestimonial>
    <DisasterImg src={'https://res.cloudinary.com/nicky-cloudinary/image/upload/c_crop,f_auto,h_260,q_auto:best,w_439,x_169/v1538607948/PASCALE-VERMONT/m34240199_pascale763.jpg'} width="100%" height="auto" />
  </DisasterWrapper>
);

const PalliativeSummary = () => (
  <PalliativeWrapperSummary>
    <RightTallSummaryWrapper>
      <RightSummaryTitle>PALLIATIVE CARE SUPPORT</RightSummaryTitle>
      <PalliativeSvgSummary>
        <PalliativeLine x1="5" y1="5" x2="190" y2="5" stroke="rgb(255, 189, 66)" strokeWidth="6" />
      </PalliativeSvgSummary>
      <Link to="/palliative-care-support/" className='right-button'>
        <SVGArrowRight />
      </Link>
    </RightTallSummaryWrapper>
    <RightLandingSummaryCopy>
      Some highlights of Pascale's work in Palliative Care:<br /><br />
      <EntypoDotSingle/> Volunteer with No One Dies Alone program at Laguna Honda Rehabilitation Center, San Francisco. Led bereavement groups and sat with actively dying patients.<br />
      <EntypoDotSingle/> Palliative care counselor at Kaiser Permanente Hospitals in Vallejo and San Francisco.<br />
      <EntypoDotSingle/> Volunteer and instructor for San Francisco Crisis Care working in partnership with law enforcement officials and providing emotional support and practical assistance to families after a sudden death.
    </RightLandingSummaryCopy>
    <SummaryTestimonial>
      <Card style={{ padding: '35px' }}>"Having my father die so suddenly was a big shock. The volunteer helped me figure out what to do with my dad's body. We had never gone through a death in this country and had no idea about anything. She made sure my kids were OK, that my mom was OK, and that I was OK too. At a time like this, you kind of lose your mind. You need people to support you and guide you. That's what the volunteer for San Francisco Crisis Care gave us."<br /> - A daughter following the death of her father"
      </Card>
    </SummaryTestimonial>
  </PalliativeWrapperSummary>
);

const Contact = () => (
  <ContactWrapper>
    <ContactSummaryTitleWrapper>
      <ContactTitle>CONTACT</ContactTitle>
      <ContactSvg>
        <ContactLine x1="7" y1="5" x2="228" y2="5" stroke="rgb(166, 76, 224)" strokeWidth="6" />
      </ContactSvg>
    </ContactSummaryTitleWrapper>
    <ContactCard>
    <ContactForm
        netlify="true"
        data-netlify="true"
        method="POST"
        data-netlify-honeypot="bot-field"
        name="contact-homepage"
        action="./thanks"
        >
        <LeftHalfInputs>
          <LeftInput name="name" type="text" placeholder="Name" />
          <LeftInput name="email" type="email" placeholder="Email address" />
          <LeftInput name="subject" type="text" placeholder="Subject" />
          <input type="hidden" name="form-name" value="contact-homepage" />
          {/* action="https://formspree.io/prema.calou@gmail.com */}
          {/* <input type="hidden" name="_next" value="./thanks" style={{display: 'none'}}/> */}
        </LeftHalfInputs>
        <RightHalfInputs>
          <RightTextArea name="message" type="text" placeholder="Message"></RightTextArea>
        </RightHalfInputs>
        <SubmitButton type="submit" value="submit">SUBMIT</SubmitButton>
      </ContactForm>
    </ContactCard>
  </ContactWrapper>
);

export default IndexPage;
