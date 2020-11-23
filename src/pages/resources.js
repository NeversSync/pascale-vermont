import React from 'react';
import Layout from '../components/layout';

import {
  ResourcesWrapper,
  ResourcesTitleWrapper,
  ResourcesTitle,
  ResourcesLine,
  ContentWrapper,
  ResourcesCopyWrapper,
  ResourcesCopy,
  ResourcesButton,
  BlogWrapper, BlogCopy, BlogLink, BlogCard
} from '../styles/resources-styles';
import { Button } from '../components/Helpers';

const Resources = () => (
  <Layout>
    <ResourcesWrapper>
      <ResourcesTitleWrapper>
        <ResourcesTitle>Resources</ResourcesTitle>
        <div
          style={{
            display: 'flex',
            marginLeft: 'auto',
            width: '100%',
            flexWrap: 'wrap',
            flexDirection: 'column'
          }}
        >
          <ResourcesLine />
          <ResourcesButton to="/" className="home-button">
            <Button />
          </ResourcesButton>
        </div>
      </ResourcesTitleWrapper>
      <ContentWrapper>
        <ResourcesCopyWrapper>

          <ResourcesCopy>

            <h2 style={{marginBottom: '.75em'}}>Grief Support Online Resources</h2>
            <ul style={{textAlign: 'left'}}>
              <li>
              The Compassionate Friends. {' '}<a
                  className="custom-link"
                  href="https://www.compassionatefriends.org/"
                  target="_blank"
                >www.compassionatefriends.org
                </a>
              </li>
              <li>
              Ending a Wanted Pregnancy. {' '}<a
                  className="custom-link"
                  href="https://endingawantedpregnancy.com/"
                  target="_blank"
                >www.endingawantedpregnancy.com
                </a>
              </li>
              <li>
              Faces of Loss, Faces of Hope (Putting a Face on Miscarriage, Stillbirth and infant loss). {' '}<a
                  className="custom-link"
                  href="http://facesofloss.com/"
                  target="_blank"
                >www.facesofloss.com
                </a>
              </li>
              <li>
              Glow In The Woods: For Babyloss Mothers and Fathers. {' '}<a
                  className="custom-link"
                  href="http://www.glowinthewoods.com/"
                  target="_blank"
                >www.glowinthewoods.com
                </a>
              </li>
              <li>
              Helping After Neonatal Death. {' '}<a
                  className="custom-link"
                  href="http://handonline.org/"
                  target="_blank"
                >www.handonline.org
                </a>
              </li>
              <li>
              Healing Embrace: Helping Everyone after Loss. {' '}<a
                  className="custom-link"
                  href="https://www.healingembrace.org/"
                  target="_blank"
                >www.healingembrace.org
                </a>
              </li>
              <li>
              Instagram IVF: {' '}<a
                  className="custom-link"
                  href="https://www.instagram.com/healthyivf/?hl=en"
                  target="_blank"
                >@healthyivf
                </a>
              </li>
              <li>
              IVF Facebook group: {' '}<a
                  className="custom-link"
                  href="https://www.facebook.com/groups/1018459678545693/"
                  target="_blank"
                >IVF Health Journey
                </a>
              </li>
              <li>
              The Mariposa Trust (Support for Pregnancy and Infancy Loss) {' '}<a
                  className="custom-link"
                  href="https://www.mariposatrust.org/"
                  target="_blank"
                >www.mariposatrust.org
                </a>
              </li>
              <li>
              The MISS Foundation (Counseling, Advocacy, Research, Education for Families Experiencing the Death of a Child).  {' '}<a
                  className="custom-link"
                  href="https://missfoundation.org/"
                  target="_blank"
                >www.missfoundation.org
                </a>
              </li>
              <li>
              Pregnancy After Loss Support.  {' '}<a
                  className="custom-link"
                  href="https://pregnancyafterlosssupport.org/"
                  target="_blank"
                >www.pregnancyafterlosssupport.com
                </a>
              </li>
              <li>
              Resolve - Family Building Options. The National Infertility Association. {' '}<a
                  className="custom-link"
                  href="https://resolve.org/what-are-my-options/"
                  target="_blank"
                >www.resolve.org/family-building-options
                </a>
              </li>
              <li>
              Return to Zero: H.O.P.E. Pregnancy and Infant Loss Support. {' '}<a
                  className="custom-link"
                  href="https://rtzhope.org/"
                  target="_blank"
                >www.rtzhope.org
                </a>
              </li>
              <li>
              The Ruthie Lou Foundation (Resources, Support and Hope for Families whose Baby has Died Before, During or Shortly After Birth). {' '}<a
                  className="custom-link"
                  href="http://www.ruthieloufoundation.org/"
                  target="_blank"
                >www.ruthieloufoundaiton.org
                </a>
              </li>
              <li>
              Star Legacy Foundation (Stillbirth, Education, Research and Awareness).{' '}<a
                  className="custom-link"
                  href="https://starlegacyfoundation.org/"
                  target="_blank"
                >www.starlegacyfoundation.org
                </a>
              </li>
              <li>
              Still Mothers (Living Childless After Loss).{' '}<a
                  className="custom-link"
                  href="http://www.stillmothers.com/"
                  target="_blank"
                >www.stillmothers.com
                </a>
              </li>
              <li>
              Still Standing Magazine (Child loss and infertility). {' '}<a
                  className="custom-link"
                  href="https://stillstandingmag.com/"
                  target="_blank"
                >www.stillstandingmag.com
                </a>
              </li>
              <li>
              Sunshine After the Storm: A Survival Guide for the Grieving. (Encouragement and Care Packages to Grieving Mothers.{' '}<a
                  className="custom-link"
                  href="https://sunshineafterthestorm.org/"
                  target="_blank"
                >sunshineafterthestorm.org
                </a>
              </li>
              <li>
              Through The Heart (Pregnancy Loss and Infertility).{' '}<a
                  className="custom-link"
                  href="https://www.throughtheheart.org/"
                  target="_blank"
                >www.throughtheheart.org
                </a>
              </li>
              <li>
              Twinless Twins (Support for both Twinless Twins and Parents).{' '}<a
                  className="custom-link"
                  href="https://www.twinlesstwins.org/"
                  target="_blank"
                >www.twinlesstwins.org
                </a>
              </li>
              <li>
              Twinslist (Support for those who have Experienced the Loss of a Twin, Triplet, or Higher Order Multiple Child).{' '}<a
                  className="custom-link"
                  href="http://www.twinslist.org/"
                  target="_blank"
                >www.twinslist.org
                </a>
              </li>
              <li>
              Unspoken Grief (Community Building and Support to Individuals and Families who Experience Miscarriage, Stillbirth and Infancy Loss).{' '}<a
                  className="custom-link"
                  href="http://unspokengrief.com/"
                  target="_blank"
                >www.unspokengrief.com
                </a>
              </li>
            </ul>
          </ResourcesCopy>

          <BlogWrapper>
            <h2 style={{marginBottom: '.75em'}}>Blog</h2>
            <BlogCopy>
              <BlogLink to="blog/grandparents-experience-of-pregnancy-loss"><BlogCard>Grandparents' experience of pregnancy loss and subsequent pregnancy during Covid</BlogCard></BlogLink>
            </BlogCopy>
          </BlogWrapper>
        </ResourcesCopyWrapper>
      </ContentWrapper>
    </ResourcesWrapper>

  </Layout>
);

export default Resources;
