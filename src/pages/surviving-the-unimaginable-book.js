import React from 'react';
import Layout from '../components/layout';

import {BookLinkWrapper} from '../components/helpers'
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
import { Button } from '../components/Helpers';
import Newsletter from '../components/Newsletter';

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
        <div style={{display: 'flex', margin: '0 auto', flexDirection: 'column'}}>
          <BookCopy style={{margin: '0 auto', width: '350px',
            textAlign: 'center',
            marginBottom: '8px'}}>Now available on amazon and wherever books are sold</BookCopy>
          <a href="https://www.amazon.com/Surviving-Unimaginable-Stories-Pregnancy-Infancy-ebook/dp/B08GS4HDF1" target="_blank" style={{display: 'flex', margin: '0 auto'}} rel="noreferrer">
            <Button text="Buy on Amazon" />
          </a>
        </div>
        <Newsletter/>

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
            <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly' }}>
              <BookButton to="pregnancy-&-infancy-loss/media" className="home-button" style={{margin: '1em' }}>
                <Button text="MEDIA" />
              </BookButton>
              <BookButton to="pregnancy-&-infancy-loss/resources" className="home-button">
                <Button text="RESOURCES" />
              </BookButton>
            </div>
          </BookCopy>
          <BookLinkWrapper>
            <h2 style={{fontWeight: '500'}}>
      French translation: <i style={{fontWeight: '300'}}>Survivre á l'Inimaginable: Comment Affronter le Deuil Périnatal.</i>
            </h2>
            <h2>Available on</h2>
            <a
              className="custom-link "
              href="https://www.amazon.com/Survivre-lInimaginable-Comment-affronter-p%C3%A9rinatal/dp/2957491524/ref=sr_1_2?dchild=1&qid=1634275414&refinements=p_27%3APascale+Vermont&s=books&sr=1-2"
              target="_blank" rel="noreferrer"
            >
        Amazon.fr
            </a>
            <h2>and</h2>
            <a
              className="custom-link "
              href="https://livre.fnac.com/a16270697/Pascale-Vermont-Survivre-a-l-Inimaginable"
              target="_blank" rel="noreferrer"
            >fnac.com</a>
            <img src="https://res.cloudinary.com/nicky-cloudinary/image/upload/v1634277221/PASCALE-VERMONT/Survivre-a-l-Inimaginable.jpg" alt="french book cover" />
          </BookLinkWrapper>
          <BookLinkWrapper>
            <h2 style={{fontWeight: '500'}}>
      Spanish translation: <i style={{fontWeight: '300'}}>Sobreviviendo a lo Inimaginable: Historias de Cómo Afrontar la Pérdida del Embarazo & de Infantes.</i>
            </h2>
            <a
              className="custom-link "
              href="https://drive.google.com/file/d/1Gz6mJ0lyBwbrnlG2WEkCTL2FWL7dTzmu/view"
              target="_blank" rel="noreferrer"
            >
        Available in pdf format here
            </a>
            <img src="https://res.cloudinary.com/nicky-cloudinary/image/upload/v1634277221/PASCALE-VERMONT/spanish-tranlation-cover.png" alt="Spanish book cover" />
          </BookLinkWrapper>
        </BookCopyWrapper>
      </CopySubscribeWrapper>
    </BookWrapper>

  </Layout>
);

export default Book;
