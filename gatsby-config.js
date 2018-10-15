module.exports = {
  siteMetadata: {
    title: 'Pascale Vermont',
  },
  plugins: ['gatsby-plugin-react-helmet', {
    resolve: 'gatsby-plugin-google-analytics',
    options: {
      trackingId: 'UA-127500009-1',
      head: true
    }}, 
  {resolve: 'gatsby-plugin-styled-components'},
  {
    resolve: 'gatsby-plugin-favicon',
    options: {
      logo: './src/assets/favicon/heart.png',
      appName: null, // Inferred with your package.json
      appDescription: null,
      developerName: null,
      developerURL: null,
      dir: 'auto',
      lang: 'en-US',
      background: '#fff',
      theme_color: '#fff',
      display: 'standalone',
      orientation: 'any',
      start_url: '/?homescreen=1',
      version: '1.0'
    }
  },
  ],
};
