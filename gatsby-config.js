module.exports = {
  siteMetadata: {
    title: 'Dharmanure',
    author: 'John Pena'
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/`
      }
    },
    'gatsby-transformer-remark'
  ]
}
