import React from 'react';
import Link from 'gatsby-link';
import Layout from '../components/layout';
import { UpArrow } from '../components/Helpers';
import { EntypoDotSingle } from 'react-entypo';

import Nav from '../components/Nav';
import Contact from '../components/Contact';
import {
  Card,
  LandingSummaryWrapper,
  Title,
  SVGArrowRight,
  LandingSummaryCopy,
  Copy,
  RightLandingSummaryWrapper,
  RightLandingSummaryCopy,
  SummaryTestimonial,
  WithImageSummaryTestimonial,
  RightSummaryTitle,
  TallSummaryWrapper,
  RightTallSummaryWrapper, Button
} from '../components/Helpers';

import {
  HeroContainer,
  HeroImg,
  Heading,
  LandingSubtitle
} from '../styles/landing-styles';
import {
  AboutWrapper,
  AboutSummaryTitle,
  AboutSummarySvg,
  AboutLine,
  AboutTestimonialSummary,
  AboutSummaryImg
} from '../styles/about-styles';
import {
  BookWrapper,
  BookTitleWrapper,
  BookTitle,
  BookLine,
  CopySubscribeWrapper,
  BookCopyWrapper,
  BookCopy,
  BookImageWrapper,
} from '../styles/surviving-the-unimaginable-book-styles';

import {
  PerinatalWrapper,
  PerinatalLine,
  PerinatalSvgSummary
} from '../styles/perinatal-styles';
import {
  NGOWrapperSummary,
  NGOSvgSummary,
  NGOLine
} from '../styles/ngo-styles';
import {
  GriefWrapper,
  GriefTitle,
  GriefSvg,
  GriefLine,
  GriefImgSummary
} from '../styles/grief-styles';
import {
  DisasterWrapper,
  DisasterTitle,
  DisasterSvgSummary,
  DisasterLine,
  DisasterImg
} from '../styles/disaster-styles';
import {
  PalliativeWrapperSummary,
  PalliativeSvgSummary,
  PalliativeLine
} from '../styles/palliative-styles';

const IndexPage = () => (
  <Layout>
    <div>
      <Landing />
      {/* <div>
        <a
          className="custom-link"
          href="https://kwmr.org/broadcasts/19012?fbclid=IwAR2m2tQfyICJ5VJMFExbF3ogM3ZuPfJ53Y3xUF7rx2g9MQ-I9g3h7cZEkbk"
          target="_blank"
        >
        Listen to a recent interview with Pascale
        </a>{' '}
      about her work with pregnancy and infant loss.
      </div> */}
      <AboutSummary />
      <BookSummary/>
      <PerinatalSummary />
      <GriefSummary />
      <NGOSummary />
      <DisasterSummary />
      <PalliativeSummary />
      <Contact isHome />
      <UpArrow />
      <Copy style={{ margin: '0 auto 2% auto', width: 'fit-content' }}>
        Site made by{' '}
        <a
          className="custom-link"
          href="http://nickyeversdesign.com/"
          target="_blank"
        >
          Nicky Evers Design
        </a>
      </Copy>
    </div>
  </Layout>
);

const Landing = () => (
  <HeroContainer>
    <Nav />
    <HeroImg
      src={
        'https://res.cloudinary.com/nicky-cloudinary/image/upload/s--KVcKSXUy--/f_auto,q_jpegmini/v1535768654/PASCALE-VERMONT/joshua-ness-107133-unsplash.jpg'
      }
      width="100%"
      height="auto"
    />
    <Heading>
      <Title>Pascale Vermont, PhD</Title>
      <LandingSubtitle>Grief Counselor</LandingSubtitle>
    </Heading>
  </HeroContainer>
);

const AboutSummary = () => (
  <AboutWrapper>
    <RightLandingSummaryWrapper>
      <RightSummaryTitle>ABOUT</RightSummaryTitle>
      <PerinatalSvgSummary>
        <PerinatalLine
          x1="5"
          y1="5"
          x2="175"
          y2="5"
          stroke="rgb(166, 76, 224)"
          strokeWidth="6"
        />
      </PerinatalSvgSummary>
      <Link to="/about/" className="right-button first-button">
        <SVGArrowRight />
      </Link>
    </RightLandingSummaryWrapper>
    <RightLandingSummaryCopy>
    Pascale Vermont is a licensed clinical psychologist based in San Francisco, CA. Pascale's main professional activity is as a grief counselor to bereaved parents after a pregnancy or infancy loss. She is also the psychologist at George Mark Children’s House, a pediatric palliative care home in San Leandro, CA.
      <br />
      <br />
      In addition, she provides crisis counseling and stress management training to staff of an international NGO based in 17 countries such as Bangladesh, South Sudan, Iran and Afghanistan, either remotely and or in person.
    </RightLandingSummaryCopy>
    <AboutSummaryImg />

    <AboutTestimonialSummary style={{ marginTop: '4%' }}>
      <Card style={{ padding: '35px' }}>
        Those first days, sorrow's pain
        <br />
        was tangible:
        <br />
        an amputation, a dismemberment,
        <br />
        the gap so great, no sobs,
        <br />
        children, friends
        <br />
        would fill its space:
        <br />a broken heart is body's pain indeed.
        <br />
        Days pass, and nights, flowing into weeks;
        <br />
        milk no longer spills
        <br />
        with my tears.
        <br />
        Hours once spent weeping
        <br />
        now weave into patterns,
        <br />
        our words of grief and love
        <br />
        now reach for friendship's clasp,
        <br />
        now look ahead...
        <br />
        -Lois Lake Church
      </Card>
    </AboutTestimonialSummary>
    <h3 style={{textAlign: 'center', gridColumn: '1 / -1', marginTop: '6%', fontStyle: 'italic', lineHeight: '1.25'}}>
      'We did not want to have his loss define<br/> us as broken people for the rest of our lives.' - S
    </h3>
  </AboutWrapper>
);

const BookSummary = () => (
  <BookWrapper isHome>
    <BookTitleWrapper isHome>
      <BookTitle>SURVIVING THE UNIMAGINABLE BOOK</BookTitle>
      <BookLine/>
      <Link to="/surviving-the-unimaginable-book" className="left-button flex-button">
        <SVGArrowRight />
      </Link>

    </BookTitleWrapper>
    <BookImageWrapper>
      <img
        style={{
          width: '50%',
          height: 'auto',
          boxShadow: '0 5px 15px rgba(50,50,93,0.1), 0 3px 8px rgba(0,0,0,0.07)',
          borderRadius: '4px'
        }}
        alt=""
        src="https://res.cloudinary.com/nicky-cloudinary/image/upload/v1595963508/PASCALE-VERMONT/PV_survivingunimaginable_ebook.jpg"
      />
    </BookImageWrapper>
    <LandingSummaryCopy fullWidth>
      <div style={{display: 'flex', margin: '0px auto', flexDirection: 'column', marginBottom: '16px'}}>
        <BookCopy style={{margin: '0 auto', width: '350px',
          textAlign: 'center',
          marginBottom: '8px'}}>Now available on Amazon and wherever books are sold</BookCopy>
        <a href="https://www.amazon.com/Surviving-Unimaginable-Stories-Pregnancy-Infancy-ebook/dp/B08GS4HDF1" target="_blank" style={{display: 'flex', margin: '0 auto'}}>
          <Button text="Buy on Amazon" />
        </a>
      </div>
        How do you survive the unimaginable loss of a baby during pregnancy or
        infancy? From the early days of shock and devastation through the
        following phases of grief over time, Pascale Vermont, PhD, offers
        insight and recommendations for bereaved parents, their family and
        friends, as well as medical providers. Vermont, a clinical psychologist
        with a specialty in grief counseling, has guided over a hundred couples
        who have lost a baby during pregnancy by termination or fetal demise, by
        stillbirth, or by death in the first few weeks or months of life.{' '}
      <Link
        to='/surviving-the-unimaginable-book'
        className="custom-link">
          Read more...
      </Link>
      <br />
      <br />
      <a
        className="custom-link center"
        href="https://www.amazon.com/gp/product/B08GS4HDF1/ref=dbs_a_def_rwt_bibl_vppi_i0"
        target="_blank"
      >
        Order a copy on Amazon
      </a>
    </LandingSummaryCopy>
  </BookWrapper>
);

const PerinatalSummary = () => (
  <PerinatalWrapper isHome >
    <RightLandingSummaryWrapper>
      <RightSummaryTitle>PREGNANCY & INFANCY LOSS GRIEF COUNSELING</RightSummaryTitle>
      <PerinatalSvgSummary>
        <PerinatalLine
          x1="5"
          y1="5"
          x2="175"
          y2="5"
          stroke="rgb(229, 69, 117)"
          strokeWidth="6"
        />
      </PerinatalSvgSummary>
      <Link to="/pregnancy-&-infancy-loss/grief-counseling" className="right-button">
        <SVGArrowRight />
      </Link>
    </RightLandingSummaryWrapper>
    <RightLandingSummaryCopy>
        Pascale offers bereavement counseling to parents who lose a child during
        pregnancy, at birth or in early infancy. At a time of great pain and
        loneliness, she provides emotional support in the home, as well as
        education about the grief process and how to handle the many
        consequences of the loss, such as:
      <br />
      <br />
      <ul>
        <li>How to guide family and friends to support the couple.</li>
        <li>How to cope with different grieving styles.</li>
        <li>How to manage the anxiety of a pregnancy after a loss.</li>
        <li>How to memorialize the baby.</li>
      </ul>
      <br />
      <a
        className="custom-link"
        href="https://kwmr.org/broadcasts/19012?fbclid=IwAR2m2tQfyICJ5VJMFExbF3ogM3ZuPfJ53Y3xUF7rx2g9MQ-I9g3h7cZEkbk"
        target="_blank"
      >
          Listen to a recent interview with Pascale
      </a>{' '}
        about her work with pregnancy and infancy loss.
    </RightLandingSummaryCopy>
    <SummaryTestimonial>
      <Card style={{ padding: '35px' }}>
        "Truly our conversations over time scraped me off the emotional depth of
        despair and helped me start to look up."
        <br /> - Anonymous client
      </Card>
    </SummaryTestimonial>
  </PerinatalWrapper>
);

const GriefSummary = () => (
  <GriefWrapper isHome>
    <LandingSummaryWrapper>
      <GriefTitle>ADULT GRIEF COUNSELING</GriefTitle>
      <GriefSvg>
        <GriefLine
          x1="115"
          y1="5"
          x2="335"
          y2="5"
          stroke="rgb(255, 189, 66)"
          strokeWidth="6"
        />
      </GriefSvg>
      <Link to="/adult-grief-counseling/" className="left-button">
        <SVGArrowRight />
      </Link>
    </LandingSummaryWrapper>
    <LandingSummaryCopy>
      What Pascale provides in her grief counseling practice: A safe place to
      express the multitude of feelings experienced by the bereaved - sadness,
      doubts, guilt, anger, moodiness... <br />
      <br />
      Over time small victories build upon each other until they tend to
      dominate, and the moments of respite between the waves of pain lengthen.
      Pascale meets clients in her home office in San Francisco and has worked
      over Skype with people as far away as India, Pakistan and South Sudan.
      <br />
      <br />
      <a
        className="custom-link"
        href="https://blogs.psychcentral.com/nlp/2017/05/blake-fletcher-half-hour-intern-podcast/"
        target="_blank"
      >
        Read a summary
      </a>{' '}
      of highlights from an interview with Pascale by the{' '}
      <a
        className="custom-link"
        href="http://www.halfhourintern.com/"
        target="_blank"
      >
        Half Hour Intern podcast
      </a>
      .
    </LandingSummaryCopy>
    <WithImageSummaryTestimonial>
      <Card style={{ padding: '35px' }}>
        "Pascale showed me how to look outside of my troubles, and see within to
        realize my strength and good qualities without being so hard on myself.
        She's very good to point out good things that counter whatever negative
        issue I'm talking about, and helps me to reconnect with my own potential
        and strength."
        <br /> - Following the end of an intimate relationship
      </Card>
    </WithImageSummaryTestimonial>
    <GriefImgSummary
      src={
        'https://res.cloudinary.com/nicky-cloudinary/image/upload/f_auto,q_auto:best/v1538607993/PASCALE-VERMONT/ravi-roshan-383162-unsplash.jpg'
      }
      width="100%"
      height="auto"
    />
  </GriefWrapper>
);

const NGOSummary = () => (
  <NGOWrapperSummary>
    <RightLandingSummaryWrapper>
      <RightSummaryTitle>NGO CRISIS COUNSELING</RightSummaryTitle>
      <NGOSvgSummary>
        <NGOLine
          x1="5"
          y1="5"
          x2="225"
          y2="5"
          stroke="rgb(166, 76, 224)"
          strokeWidth="6"
        />
      </NGOSvgSummary>
      <Link to="/ngo-crisis-counseling/" className="right-button">
        <SVGArrowRight />
      </Link>
    </RightLandingSummaryWrapper>
    <RightLandingSummaryCopy>
      Pascale offers crisis counseling to expatriate staff of Relief
      International based in 16 countries over Skype when they experience a
      traumatic experience while in the field or suffer a personal crisis. She
      served as a psychologist to West African refugees on Samos Island, Greece,
      who had fled their home countries because of extreme violence and threats
      of death. She also trained local staff in Bangladesh who work with
      Rohingya refugees in Stress Management, Resilience and Self-Care, and met
      with them individually for counseling. She provided similar training and
      counseling to local staff in Juba and Maban, South Sudan, and in Nairobi
      Kenya. In addition, she was deployed to Haiti after the 2010 earthquake to
      provide grief counseling to civilians and hospital staff who had lost many
      family members and friends.
      <br />
      <br />
      <a
        className="custom-link"
        href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3048646/"
        target="_blank"
      >
        Read more
      </a>{' '}
      about Pascale's grief counseling work for the 2010 Haiti earthquake.
    </RightLandingSummaryCopy>
    <SummaryTestimonial>
      <Card style={{ padding: '35px' }}>
        "Acute grief is a thunderstorm, a monsoonal downpour, a sudden flood
        that submerges almost everything in its path."
        <br /> - Steven Levine
      </Card>
    </SummaryTestimonial>
  </NGOWrapperSummary>
);

const DisasterSummary = () => (
  <DisasterWrapper isHome>
    <TallSummaryWrapper>
      <DisasterTitle>DISASTER MENTAL HEALTH</DisasterTitle>
      <DisasterSvgSummary>
        <DisasterLine
          x1="100"
          y1="5"
          x2="248"
          y2="5"
          stroke="rgb(229, 69, 117)"
          strokeWidth="6"
        />
      </DisasterSvgSummary>
      <Link to="/disaster-mental-health/" className="left-button">
        <SVGArrowRight />
      </Link>
    </TallSummaryWrapper>
    <LandingSummaryCopy>
      For 10 years Pascale served as a disaster mental health volunteer and lead
      of the San Francisco mental health team for the American Red Cross. She
      provided crisis and grief counseling to survivors of tornadoes, hurricanes
      and floods in Alabama, Mississippi, Oklahoma, Arkansas and Texas and to
      the victims and families of the Asiana Airlines plane crash at San
      Francisco International Airport.
      <br />
      <br />
      <Link to="/obama-letter" className="custom-link">
        Read
      </Link>{' '}
      about Pascale's experience helping a young boy during the aftermath of a
      tornado in Arkansas.
    </LandingSummaryCopy>
    <WithImageSummaryTestimonial>
      <Card style={{ padding: '35px' }}>
        "I want to thank you for your amazing emotional support. What impressed
        me was not only your professional expertise but, more importantly, your
        natural care, attention and compassion."
        <br /> - K
      </Card>
    </WithImageSummaryTestimonial>
    <DisasterImg
      src={
        'https://res.cloudinary.com/nicky-cloudinary/image/upload/c_crop,f_auto,h_260,q_auto:best,w_439,x_169/v1538607948/PASCALE-VERMONT/m34240199_pascale763.jpg'
      }
      width="100%"
      height="auto"
    />
  </DisasterWrapper>
);

const PalliativeSummary = () => (
  <PalliativeWrapperSummary isHome>
    <RightTallSummaryWrapper>
      <RightSummaryTitle>PALLIATIVE CARE SUPPORT</RightSummaryTitle>
      <PalliativeSvgSummary>
        <PalliativeLine
          x1="5"
          y1="5"
          x2="190"
          y2="5"
          stroke="rgb(255, 189, 66)"
          strokeWidth="6"
        />
      </PalliativeSvgSummary>
      <Link to="/palliative-care-support/" className="right-button">
        <SVGArrowRight />
      </Link>
    </RightTallSummaryWrapper>
    <RightLandingSummaryCopy>
      Some highlights of Pascale's work in Palliative Care:
      <br />
      <br />
      <EntypoDotSingle /> Volunteer with No One Dies Alone program at Laguna
      Honda Rehabilitation Center, San Francisco. Led bereavement groups and sat
      with actively dying patients.
      <br />
      <EntypoDotSingle /> Palliative care counselor at Kaiser Permanente
      Hospitals in Vallejo and San Francisco.
      <br />
      <EntypoDotSingle /> Volunteer and instructor for San Francisco Crisis Care
      working in partnership with law enforcement officials and providing
      emotional support and practical assistance to families after a sudden
      death.
    </RightLandingSummaryCopy>
    <SummaryTestimonial>
      <Card style={{ padding: '35px' }}>
        "Having my father die so suddenly was a big shock. The volunteer helped
        me figure out what to do with my dad's body. We had never gone through a
        death in this country and had no idea about anything. She made sure my
        kids were OK, that my mom was OK, and that I was OK too. At a time like
        this, you kind of lose your mind. You need people to support you and
        guide you. That's what the volunteer for San Francisco Crisis Care gave
        us."
        <br /> - A daughter following the death of her father"
      </Card>
    </SummaryTestimonial>
  </PalliativeWrapperSummary>
);

export default IndexPage;
