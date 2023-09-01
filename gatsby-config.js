require('dotenv').config()
require('dotenv').config({ path: `.env.${process.env.NODE_ENV}` })

module.exports = {
  plugins: [
    'gatsby-plugin-top-layout',
    'gatsby-plugin-mui-emotion',
    'gatsby-plugin-resolve-src',
  ],
}
