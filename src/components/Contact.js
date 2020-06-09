import React from 'react';
import { navigate } from 'gatsby-link';
import Layout from '../components/layout';
import { ContactWrapper, ContactForm, SubmitButton, ContactCard, ContactTitle, ContactSvg, ContactLine, ContactTitleWrapper, LeftHalfInputs, RightHalfInputs, RightTextArea, LeftInput } from '../styles/contact-styles';

function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
}

export default function Contact() {
  const [state, setState] = React.useState({});

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...state,
      }),
    })
      .then(() => navigate(form.getAttribute('action')))
      .catch((error) => alert(error));
  };
  return (
    <Layout>
      <ContactWrapper>
        <ContactTitleWrapper>
          <ContactTitle>CONTACT</ContactTitle>
          <ContactSvg>
            <ContactLine x1="7" y1="5" x2="228" y2="5" stroke="rgb(166, 76, 224)" strokeWidth="6" />
          </ContactSvg>
        </ContactTitleWrapper>
        <ContactCard>
          <ContactForm
            name="contact-form-pascale"
            method="POST"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            action="/thanks"
            onSubmit={handleSubmit}
          >
            <input type='hidden' name='form-name' value='contact-form-pascale' />
            <p hidden>
              <label>Don’t fill this out if you're human: <input name="bot-field" onChange={handleChange} /></label>
            </p>
            <LeftHalfInputs>
              <LeftInput name="name" type="text" placeholder="Name" onChange={handleChange}/>
              <LeftInput name="email" type="email" placeholder="Email address" onChange={handleChange}/>
              <LeftInput name="subject" type="text" placeholder="Subject" onChange={handleChange}/>
            </LeftHalfInputs>
            <RightHalfInputs>
              <RightTextArea name="message" type="text" placeholder="Message" onChange={handleChange}/>
            </RightHalfInputs>
            <SubmitButton type="submit" value="submit">SUBMIT</SubmitButton>
          </ContactForm>
        </ContactCard>
      </ContactWrapper>
    </Layout>
  );
}
