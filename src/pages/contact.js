import React from 'react'
import ContactView from 'views/ContactView'

import Seo from 'components/Seo'

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
        description: `We're always looking for volunteers, sponsors, coaching help, parent support, friends to ride with, and race support!`,
      }}
    />
  )
}
