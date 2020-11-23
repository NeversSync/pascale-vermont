import React from 'react';
import Layout from '../components/layout';

import {
  MediaWrapper,
  MediaTitleWrapper,
  MediaTitle,
  MediaLine,
  ContentWrapper,
  MediaCopyWrapper,
  MediaCopy, MediaCopyTitle,
  MediaImageWrapper,
  MediaHomeButton,
} from '../styles/media-styles';
import { HomeButton, VideoWrapper, Video, Iframe, Card, Copy, VideoCopyWrapper } from '../components/Helpers';

const Media = () => (
  <Layout>
    <MediaWrapper>
      <MediaTitleWrapper>
        <MediaTitle>Media</MediaTitle>
        <div
          style={{
            display: 'flex',
            marginLeft: 'auto',
            width: '100%',
            flexWrap: 'wrap',
            flexDirection: 'column'
          }}
        >
          <MediaLine />
          <MediaHomeButton to="/" className="home-button">
            <HomeButton />
          </MediaHomeButton>
        </div>
      </MediaTitleWrapper>
      <ContentWrapper>
        <MediaCopyWrapper>

          <MediaCopyTitle>
        Featured videos and interviews with Pascale Vermont
          </MediaCopyTitle>
          <MediaCopy>
            <a
              className="custom-link"
              href="https://kwmr.org/broadcasts/28809"
              target="_blank"
            >
          Listen to a recent radio interview with Pascale
            </a>{' '}
            on KMWR about her work with pregnancy and infancy loss.
          </MediaCopy>
        </MediaCopyWrapper>

        <VideoWrapper>
          <VideoCopyWrapper>
            <Video>
              <Iframe
                src='https://www.youtube.com/embed/c8JAVuObca8'
                frameBorder='0'
                allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
                allowFullScreen
                title='Grandparents Grief'
              />
            </Video>
            <Copy>Grandparents Grief</Copy>
          </VideoCopyWrapper>
          <VideoCopyWrapper>
            <Video>
              <Iframe
                src='https://www.youtube.com/embed/-aP1IsS3sFU'
                frameBorder='0'
                allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
                allowFullScreen
                title='Siblings Grief'
              />
            </Video>
            <Copy>Siblings Grief</Copy>
          </VideoCopyWrapper>
          <VideoCopyWrapper>
            <Video>
              <Iframe
                src='https://www.youtube.com/embed/IAcBx-SgaZk'
                frameBorder='0'
                allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
                allowFullScreen
                title='Managing a future pregnancy'
              />
            </Video>
            <Copy>Managing a future pregnancy</Copy>
          </VideoCopyWrapper>
          <VideoCopyWrapper>
            <Video>
              <Iframe
                src='https://www.youtube.com/embed/6yRThF_bHRg'
                frameBorder='0'
                allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
                allowFullScreen
                title='Grieving differences'
              />
            </Video>
            <Copy>Grieving differences</Copy>
          </VideoCopyWrapper>
        </VideoWrapper>

      </ContentWrapper>
    </MediaWrapper>

  </Layout>
);

export default Media;
