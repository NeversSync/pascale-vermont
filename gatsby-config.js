module.exports = {
  siteMetadata: {
    title: 'Pascale Vermont',
    author: 'Nicky Evers Design',
    description: 'Pascale Vermont Grief Counselor',
  },
  plugins: ['gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-127500009-1',
        head: true
      }
    },
    { resolve: 'gatsby-plugin-styled-components' },
    {
      resolve: 'gatsby-plugin-favicon',
      options: {
        logo: './src/assets/favicon/heart.png',
        dir: 'auto',
        lang: 'en-US',
        background: '#fff',
        theme_color: '#fff',
        display: 'standalone',
        orientation: 'any',
        start_url: '/?homescreen=1',
        version: '1.0'
      },
    },
    {
      resolve: 'gatsby-plugin-mailchimp',
      options: {
        endpoint: 'https://pascalevermont.us10.list-manage.com/subscribe/post?u=b1315a604cf6371ced2e07475&amp;id=313fd4abc5'
      }
    },
  ],
};
