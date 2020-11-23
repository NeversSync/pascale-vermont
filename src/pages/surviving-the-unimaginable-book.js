import React from 'react';
import Layout from '../components/layout';

import {
  BookWrapper,
  BookTitleWrapper,
  BookTitle,
  BookLine,
  CopySubscribeWrapper,
  BookCopyWrapper,
  BookCopy,
  BookImageWrapper,
  BookButton, HomeButton
} from '../styles/surviving-the-unimaginable-book-styles.js'
import Newsletter from '../components/Newsletter'
import { Contact } from '../components/Contact'
import { Button, Card, Copy } from '../components/Helpers';

const Book = () => (
  <Layout>
    <BookWrapper>
      <BookTitleWrapper>
        <BookTitle>Surviving the Unimaginable</BookTitle>
        <div
          style={{
            display: 'flex',
            marginLeft: 'auto',
            width: '100%',
            flexWrap: 'wrap',
            flexDirection: 'column'
          }}
        >
          <BookLine />
          <HomeButton to="/" className="home-button">
            <Button text="HOME" />
          </HomeButton>

        </div>
      </BookTitleWrapper>
      <BookImageWrapper>
        <img style={{ width: '60%', height: 'auto',     boxShadow: '0 5px 15px rgba(50,50,93,0.1), 0 3px 8px rgba(0,0,0,0.07)', borderRadius: '4px'}} alt="" src="https://res.cloudinary.com/nicky-cloudinary/image/upload/v1595963508/PASCALE-VERMONT/PV_survivingunimaginable_ebook.jpg"/>
      </BookImageWrapper>
      <CopySubscribeWrapper>
        <BookCopyWrapper>
          <BookCopy>
        How do you survive the unimaginable loss of a baby during pregnancy or
        infancy? From the early days of shock and devastation through the
        following phases of grief over time, Pascale Vermont, PhD, offers
        insight and recommendations for bereaved parents, their family and
        friends, as well as medical providers. Vermont, a clinical psychologist
        with a specialty in grief counseling, has guided over a hundred couples
        who have lost a baby during pregnancy by termination or fetal demise, by
        stillbirth, or by death in the first few weeks or months of life.
          </BookCopy>
          <BookCopy>
        Surviving the Unimaginable is based on a collection of interviews with
        twenty couples who have made it from sadness and despair to a place of
        hope. These parents now wish to share what they found most helpful along
        the way. They are survivors who, through counseling, ultimately
        discovered how now, with the passage of time, they can give back to
        grieving parents by reflecting on their journeys and lessons learned.
          </BookCopy>
          <BookCopy>
        Vermont has listened closely to these voices of grief, presenting them
        alongside her practical expertise. In this book for bereaved parents,
        family and friends, you will learn:
          </BookCopy>
          <BookCopy>
            <ul>
              <li>How to navigate the first few weeks
        or months.</li>
              <li>How to respect different grieving styles and normalize
        grief reactions.</li>
              <li>How to guide family and friends to support the couple.</li>
              <li>
            How to honor their baby through various rituals and examples of
            legacy.
              </li>
              <li>How to manage anxiety in a subsequent pregnancy.</li>
              <li>
            How to find hope that they can, just like those interviewed,
            survive.
              </li>
            </ul>
            <div style={{display: 'flex', flexDirecton: 'column', justifyContent: 'space-evenly' }}>
              <BookButton to="pregnancy-&-infancy-loss/media" className="home-button">
                <Button text="MEDIA" />
              </BookButton>
              <BookButton to="pregnancy-&-infancy-loss/resources" className="home-button">
                <Button text="RESOURCES" />
              </BookButton>
            </div>
          </BookCopy>
        </BookCopyWrapper>
        <Newsletter/>
      </CopySubscribeWrapper>
    </BookWrapper>

  </Layout>
);

export default Book;
