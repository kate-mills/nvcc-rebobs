import React from 'react'
import AboutView from 'views/AboutView'

import Seo from 'components/Seo'
import SeoImg from 'images/2023/Granite-Bay-Girls.webp'

const AboutPage = () => {
  return <AboutView />
}

export default AboutPage

export const Head = ({location}) => {
  console.log('location', location)
  return (
    <Seo
      location={location}
      pageContext={{
        title: 'About',
        description: `Napa Valley Composite Cycling Team is a NICA affiliated, high-school age mountain bike team. Whether you are a beginner, or have been racing before, our team would love to have you join us as we compete against highschools from around California. Students from ALL Napa High Schools are welcome to join!`,
        image: SeoImg
      }}
    />
  )
}
