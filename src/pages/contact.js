import React from 'react'
import IndexView from 'views/IndexView'

import Seo from 'components/Seo'
//import SeoImg from 'images/website.jpg'

const ContactPage = () => {
  return <IndexView />
}

export default ContactPage

export const Head = ({location}) => {
  return (
    <Seo
      location={location}
      pageContext={{
        title: 'Contact',
        description: `We're always looking for volunteers, sponsors, coaching help, parent support, friends to ride with, and race support!`,
      }}
    />
  )
}
