import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Helmet from 'react-helmet';
import 'reset-css';
import '../styles/boss.css';
import styled from 'styled-components';
import 'typeface-fira-sans';
import { UpArrow } from './Helpers';

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
        />
        <Content>{children}</Content>
        <UpArrow />
      </>
    )}
  />
);

export default Layout;
