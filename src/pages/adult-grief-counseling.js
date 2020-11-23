import React from 'react';
import Link from 'gatsby-link';
import Layout from '../components/layout';
import { EntypoDotSingle } from 'react-entypo';

import {
  GriefWrapper,
  GriefTitle,
  GriefSvg,
  GriefLine,
  GriefTestimonial,
  GriefImgWrapper,
  GriefTitleWrapper,
  GriefCopy,
  SecondGriefTestimonial
} from '../styles/grief-styles';
import {
  Button,
  Spacer,
  ImageWrapper,
  Copy,
  Card
} from '../components/Helpers';

const IndexPage = () => (
  <Layout>
    <GriefWrapper style={{ borderBottom: 'none' }}>
      <GriefTitleWrapper>
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
        <Link to="/" className="home-button">
          <Button />
        </Link>
      </GriefTitleWrapper>
      <GriefImgWrapper />
      <GriefCopy>
        What Pascale provides in her grief counseling practice:
        <br />
        <br />
        <EntypoDotSingle /> A safe place to express the multitude of feelings
        experienced by the bereaved - sadness, doubts, guilt, anger,
        moodiness...
        <br />
        <EntypoDotSingle /> A patient, compassionate presence who understands
        that grief does not progress in a linear fashion but that it goes
        through many cycles. Family and friends sometimes put pressure on the
        bereaved to "return to normal". In grief counseling, there is no need to
        appear strong, rush the process, or to protect family from one's pain.
        Instead, the grief counselor is someone to talk to whose agenda is to
        support and respect the bereaved's own timetable without extra pressure.
        <br />
        <EntypoDotSingle /> A place to learn about the nature and the various
        stages of grief to facilitate the understanding of intense emotions and
        reactions.
        <br />
        <EntypoDotSingle /> A place to be reminded of the bereaved's strengths
        and to learn how to use them to cope and start to heal.
        <br />
        <EntypoDotSingle /> A place to explore how to learn practical skills if
        necessary and to receive support in doing so.
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
          Half Hour Intern
        </a>
        .<br />
        <br />
        <Copy className="contact-for-more">
          <Link to="/contact/" className="custom-link">
            Contact her
          </Link>{' '}
          for more information.
        </Copy>
      </GriefCopy>
      <GriefTestimonial>
        <Card style={{ padding: '35px' }}>
          "Pascale showed me how to look outside of my troubles, and see within
          to realize my strength and good qualities without being so hard on
          myself. She's very good to point out good things that counter whatever
          negative issue I'm talking about, and helps me to reconnect with my
          own potential and strength."
          <br /> - Following the end of an intimate relationship
        </Card>
      </GriefTestimonial>
      <SecondGriefTestimonial>
        <Card style={{ padding: '35px' }}>
          "I feel immensely grateful for Pascale's professional and gentle
          guidance. After less than a year of counseling, I stopped my
          antidepressant medication and slowly came back to life." <br />-
          Following a father's death
        </Card>
      </SecondGriefTestimonial>
    </GriefWrapper>
  </Layout>
);

export default IndexPage;
