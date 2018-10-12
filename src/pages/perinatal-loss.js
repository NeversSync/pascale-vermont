import React from 'react'
import Link from 'gatsby-link'
import { Image, Transformation } from 'cloudinary-react';

import { PerinatalWrapper, PerinatalTitleWrapper, PerinatalTitle, PerinatalSvg, PerinatalLine, PerinatalCopy, PerinatalTestimonial, PerinatalImageWrapper } from '../styles/perinatal-styles';
import { HomeButton, Card } from '../components/Helpers';


const PerinatalLoss = () => (
  <PerinatalWrapper>
    <PerinatalTitleWrapper>
      <PerinatalTitle>PERINATAL LOSS</PerinatalTitle>
      <PerinatalSvg>
        <PerinatalLine x1="5" y1="5" x2="175" y2="5" stroke="rgb(229, 69, 117)" strokeWidth="6" />
      </PerinatalSvg>
      <Link to="/" className='home-button right'>
        <HomeButton />
      </Link>
    </PerinatalTitleWrapper>
    <PerinatalImageWrapper>
      <Image cloudName="nicky-cloudinary" publicId="PASCALE-VERMONT/Parents.jpg" width="100%" style={{ borderRadius: '4px' }}>
        <Transformation quality="auto:best" fetchFormat="auto" />
      </Image>
    </PerinatalImageWrapper>
    <PerinatalCopy>
      Pascale offers bereavement counseling to parents who lose a child during pregnancy, at birth or in early infancy.
      At a time of great pain and loneliness, she provides emotional support in the home, as well as education about the grief process and how to handle the many consequences of the loss.
      She meets with parents and other family members as long as support is needed, and at other times when the grief is triggered by anniversaries or subsequent pregnancies.
    </PerinatalCopy>
    <PerinatalTestimonial>
      <Card style={{padding: '35px'}}>"The compassion, sympathy, and assurance she gave my husband and I helped us to move through the stages of our grief and realize that we were going to be ok. Her heartfelt questions and warm nature made it easy to open up and share our tragedy, our fears of trying again, our relationship struggles, our guilty thoughts, our happy moments, and so much more."<br/> - Anonymous client
      </Card>
    </PerinatalTestimonial>
  </PerinatalWrapper>
)

export default PerinatalLoss;
