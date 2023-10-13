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
        description: `Napa Valley middle and high school students - love mountain biking? Join the NV Composite Cycling Team affiliated with NICA. All skill levels are welcome to compete with high schools across CA.
          `,
      }}
    />
  )
}
