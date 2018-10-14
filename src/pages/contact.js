import React from 'react';
import Link from 'gatsby-link'
import { ContactWrapper, ContactForm, SubmitButton, ContactCard, ContactTitle, ContactSvg, ContactLine, ContactTitleWrapper, LeftHalfInputs, RightHalfInputs, RightTextArea, LeftInput } from '../styles/contact-styles';
import { HomeButton } from '../components/Helpers';

const IndexPage = () => (
  <ContactWrapper>
    <ContactTitleWrapper>
      <ContactTitle>CONTACT</ContactTitle>
      <ContactSvg>
        <ContactLine x1="7" y1="5" x2="228" y2="5" stroke="rgb(166, 76, 224)" strokeWidth="6" />
      </ContactSvg>
      <Link to="/" className='home-button contact'>
        <HomeButton />
      </Link>
    </ContactTitleWrapper>
    <ContactCard>
      <ContactForm
        method="POST"
        netlify="true"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        name="contact-form">
        <LeftHalfInputs class="half left cf">
          <LeftInput name="name" type="text" placeholder="Name" />
          <LeftInput name="email" type="email" placeholder="Email address" />
          <LeftInput name="subject" type="text" placeholder="Subject" />
        </LeftHalfInputs>
        <RightHalfInputs class="half right cf">
          <RightTextArea name="message" type="text" placeholder="Message"></RightTextArea>
        </RightHalfInputs>
        <SubmitButton type="submit" value="Submit">SUBMIT</SubmitButton>
      </ContactForm>
    </ContactCard>
  </ContactWrapper>
);

export default IndexPage;