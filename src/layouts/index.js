import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import 'reset-css';
import "./boss.css";
import styled from 'styled-components';

import Header from '../components/Header'
// import './index.css'

const Content = styled.div`
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
    <Header siteTitle={data.site.siteMetadata.title} />
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
