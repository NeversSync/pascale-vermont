import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import 'reset-css';
import "./boss.css";
// import './index.css'
import styled from 'styled-components';
import 'typeface-fira-sans';
import SmoothScroll from 'really-smooth-scroll';

SmoothScroll.shim();

const Content = styled.div`
  font-family: fira sans, sans-serif;
  font-weight: 400;
  display: grid;
  grid-template-columns: 1fr;
  justify-content: center;
`

const Layout = ({ children, data }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'Pascale Vermont', content: 'Grief Counselor' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
      <Content>
        {children()}
      </Content>
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
