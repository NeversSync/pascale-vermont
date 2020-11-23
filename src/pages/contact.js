import React from 'react';
import Contact from '../components/Contact';
import Link from 'gatsby-link';
import { Button } from '../components/Helpers';

const ContactPage = ({isHome}) => (
  <React.Fragment>
    <Contact isHome={isHome}/>
    <Link to="/" className="home-button contact" id="contact-home-button">
      <Button />
    </Link>
  </React.Fragment>
);

export default ContactPage;
