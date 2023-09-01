import React from 'react'
import AboutView from 'views/AboutView'

import Seo from 'components/Seo'
import SeoImg from 'images/about-us.webp'

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
        title: 'About Us',
        description: 'Napa Valley Composite Cycling Team is a NICA affiliated, middle and high-school age (6-12 grade) mountain bike team. Whether you are a beginner, or have been racing before, our team would love to have you join us as we compete against highschools from around California.',
        image: SeoImg
      }}
    />
  )
}
