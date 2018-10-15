module.exports = {
  siteMetadata: {
    title: 'Pascale Vermont',
  },
  plugins: ['gatsby-plugin-react-helmet', {
    resolve: 'gatsby-plugin-google-analytics',
    options: {
      trackingId: 'UA-127500009-1',
      head: true,
      sampleRate: 5,
      siteSpeedSampleRate: 10
    }}, 
  {resolve: 'gatsby-plugin-styled-components'},
  ],
};
