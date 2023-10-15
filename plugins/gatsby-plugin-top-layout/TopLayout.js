import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'

import Page from '../../src/components/Page'

import 'aos/dist/aos.css'
import '@fontsource/inter'

export default function TopLayout(props) {
  return (
    <React.Fragment>
      <Helmet htmlAttributes={{ lang: 'en' }}>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="robots" content="max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      </Helmet>
      <Page>{props.children}</Page>
    </React.Fragment>
  )
}

TopLayout.propTypes = {
  children: PropTypes.node,
}
