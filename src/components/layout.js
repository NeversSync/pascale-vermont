import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Helmet from 'react-helmet';
import 'reset-css';
import '../styles/boss.css';
import styled from 'styled-components';
import 'typeface-fira-sans';
import { heartFavicon } from '../../public/assets/favicon/heart.png';

const Content = styled.div`
  font-family: fira sans, sans-serif;
  font-weight: 400;
  display: grid;
  grid-template-columns: 1fr;
  justify-content: center;
`;

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query LayoutQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
      <Helmet
        titleTemplate={`%s | ${data.site.siteMetadata.title}`}
        defaultTitle={data.site.siteMetadata.title}
        meta={[
          { name: 'Pascale Vermont', content: 'Grief Counselor' },
          { name: 'keywords', content: 'sample, something' }
        ]}
        link={[
          {
            rel: 'shortcut icon',
            type: 'image/png',
            href: `${heartFavicon}`,
            sizes: '16x16'
          }
        ]}
      />     
      <Content>
        {children}
      </Content></>
    )}
  />
);

export default Layout;

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
