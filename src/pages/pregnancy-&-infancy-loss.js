import React from 'react';
import Link from 'gatsby-link';
import Layout from '../components/layout';

import {
  PerinatalWrapper,
  PerinatalTitleWrapper,
  PerinatalTitle,
  PerinatalSvg,
  PerinatalLine,
  PerinatalCopy,
  PerinatalTestimonial,
  PerinatalImageWrapper,
  SecondPerinatalTestimonial,
  ThirdPerinatalTestimonial,
  FourthPerinatalTestimonial,
} from '../styles/perinatal-styles';
import { Button, Card, Copy } from '../components/Helpers';

const PerinatalLoss = () => (
  <Layout>
    <PerinatalWrapper>
      <PerinatalTitleWrapper>
        <PerinatalTitle>PREGNANCY & INFANCY LOSS</PerinatalTitle>
        <PerinatalSvg>
          <PerinatalLine
            x1="90"
            y1="5"
            x2="278"
            y2="5"
            stroke="rgb(229, 69, 117)"
            strokeWidth="6"
          />
        </PerinatalSvg>
        <Link to="/" className="home-button">
          <Button />
        </Link>
        {/* <div style={{ width: '500px', height: '500px', overflow: 'hidden' }}> */}
        {/* </div> */}
      </PerinatalTitleWrapper>
      <PerinatalImageWrapper />
      {/* <Copy></Copy> */}
      <PerinatalCopy>
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
      </PerinatalCopy>
      <PerinatalTestimonial>
        <Card style={{ padding: '35px' }}>
          "The greatest lesson our son taught us was that you wake up every day
          and you live it like there is no tomorrow."
          <br /> - A
        </Card>
      </PerinatalTestimonial>
      <SecondPerinatalTestimonial>
        <Card style={{ padding: '35px' }}>
          "We are making new memories in our son's name. It's not the same as
          making memories with him but it's all we have."
          <br />- N & V
        </Card>
      </SecondPerinatalTestimonial>
      <ThirdPerinatalTestimonial>
        <Card style={{ padding: '35px' }}>
          "Pascale helped me process the loss of my son during pregnancy and
          helped me through a subsequent pregnancy filled with worry. Her
          support and guidance were key to managing my grief and healing.
          Techniques that she helped me learn have also expanded my ability to
          live in the present. Our time together continues to ripple through my
          life at home and work in such a positive way."
          <br /> - Anonymous client
        </Card>
      </ThirdPerinatalTestimonial>
      <FourthPerinatalTestimonial>
        <Card style={{ padding: '35px' }}>
          "When our baby died, Pascale helped us to know that our feelings were
          normal, and she gave us practical tips on how to navigate them. She
          even suggested ideas on how to preserve our son's memory and how to
          discuss our loss with others. Meeting with Pascale gave my husband and
          me an opportunity to come closer together instead of farther apart. We
          know we will never forget our son, and that our sadness will always be
          with us in some way. But we now know how to bear the grief with
          increasing hope."
          <br />- K and L
        </Card>
      </FourthPerinatalTestimonial>
    </PerinatalWrapper>
  </Layout>
);

export default PerinatalLoss;
