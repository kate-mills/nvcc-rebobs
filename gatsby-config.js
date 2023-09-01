require('dotenv').config()
require('dotenv').config({ path: `.env.${process.env.NODE_ENV}` })

module.exports = {
  plugins: [
    'gatsby-plugin-top-layout',
    'gatsby-plugin-mui-emotion',
    'gatsby-plugin-resolve-src',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Napa Valley Composite Cycling`,
        short_name: `Rebobs`,
        lang: `en`,
        start_url: `/`,
        icon: `src/images/icon.png`,
        background_color: `#ffffff`,
        theme_color: `#ffffff`,
        display: `minimal-ui`,
        crossOrigin: `use-credentials`,
      },
    },
  ],
}
