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
        netlify="true"
        data-netlify="true"
        method="POST"
        data-netlify-honeypot="bot-field"
        name="contact-form-1"
        action="./thanks"
        >
        <LeftHalfInputs>
          <LeftInput name="name" type="text" placeholder="Name" />
          <LeftInput name="email" type="email" placeholder="Email address" />
          <LeftInput name="subject" type="text" placeholder="Subject" />
          <input type="hidden" name="form-name" value="contact" />
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