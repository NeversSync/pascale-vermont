import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import 'reset-css';
import "./boss.css";
import styled from 'styled-components';
import 'typeface-fira-sans';
import { EntypoHeart } from 'react-entypo';
import { heartFavicon} from '../../public/assets/img/heart.svg';


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
      link={[
        { rel: 'shortcut icon', type: 'image/png', href: `${heartFavicon}`, sizes: '16x16' }
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
