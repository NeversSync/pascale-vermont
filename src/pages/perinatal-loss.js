import React from 'react'
import Link from 'gatsby-link'

import { PerinatalWrapper, PerinatalTitleWrapper, PerinatalTitle, PerinatalSvg, PerinatalLine, PerinatalCopy, PerinatalTestimonial, PerinatalImageWrapper, SecondPerinatalTestimonial } from '../styles/perinatal-styles';
import { HomeButton, Card } from '../components/Helpers';


const PerinatalLoss = () => (
  <PerinatalWrapper>
    <PerinatalTitleWrapper>
      <PerinatalTitle>PERINATAL LOSS</PerinatalTitle>
      <PerinatalSvg>
        <PerinatalLine x1="5" y1="5" x2="175" y2="5" stroke="rgb(229, 69, 117)" strokeWidth="6" />
      </PerinatalSvg>
      <Link to="/" className='home-button'>
        <HomeButton />
      </Link>
    </PerinatalTitleWrapper>
    <PerinatalImageWrapper/>
    <PerinatalCopy>
      Pascale offers bereavement counseling to parents who lose a child during pregnancy, at birth or in early infancy.
      At a time of great pain and loneliness, she provides emotional support in the home, as well as education about the grief process and how to handle the many consequences of the loss.
      She meets with parents and other family members as long as support is needed, and at other times when the grief is triggered by anniversaries or subsequent pregnancies.
    </PerinatalCopy>
    <PerinatalTestimonial>
      <Card style={{padding: '35px'}}>"The compassion, sympathy, and assurance she gave my husband and I helped us to move through the stages of our grief and realize that we were going to be ok. Her heartfelt questions and warm nature made it easy to open up and share our tragedy, our fears of trying again, our relationship struggles, our guilty thoughts, our happy moments, and so much more."<br/> - Anonymous client
      </Card>
    </PerinatalTestimonial>
    <SecondPerinatalTestimonial>
      <Card style={{padding: '35px'}}>
      "When our baby died, Pascale helped us to know that our feelings were normal, and she gave us practical tips on how to navigate them. She even suggested ideas on how to preserve our son's memory and how to discuss our loss with others. Meeting with Pascale gave my husband and me an opportunity to come closer together instead of farther apart. We know we will never forget our son, and that our sadness will always be with us in some way. But we now know how to bear the grief with increasing hope."<br/>
      - K and L
      </Card>
    </SecondPerinatalTestimonial>
  </PerinatalWrapper>
)

export default PerinatalLoss;
