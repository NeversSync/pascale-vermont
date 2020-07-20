import React from 'react';
import Contact from '../components/Contact';
import Link from 'gatsby-link';
import { HomeButton } from '../components/Helpers';

const ContactPage = () => (
  <React.Fragment>
    <Contact />
    <Link to="/" className="home-button contact" id="contact-home-button">
      <HomeButton />
    </Link>
  </React.Fragment>
);

export default ContactPage;
