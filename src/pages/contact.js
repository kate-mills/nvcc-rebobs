import React from 'react'
import ContactView from 'views/ContactView'

import Seo from 'components/Seo'
import SeoImg from 'images/2023/Team-Photo-Skyline.webp'

const ContactPage = () => {
  return <ContactView />
}

export default ContactPage

export const Head = ({location}) => {
  return (
    <Seo
      location={location}
      pageContext={{
      title: 'Contact',
        image: {SeoImg},
        description: `We're always looking for volunteers, sponsors, coaching help, parent support, friends to ride with, and race support!`,
      }}
    />
  )
}
