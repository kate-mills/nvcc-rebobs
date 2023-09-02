import React from 'react'
import IndexView from 'views/IndexView'

import Seo from 'components/Seo'
//import SeoImg from 'images/website.jpg'

const IndexPage = () => {
  return <IndexView />
}

export default IndexPage

export const Head = ({location}) => {
  return (
    <Seo
      location={location}
      pageContext={{
      title: 'Home | Napa | Napa Valley Composite Cycling Team',
        description: 'Napa Valley Composite Cycling Team is a NICA affiliated, high-school age MTB team. Whether you are a beginner, or have been racing before, our team would love to have you join us as we compete against highschools from around California. Students from ALL Napa High Schools are welcome to join!',
        url: 'https://www.napavalleycompositecycling.com',
      }}
    />
  )
}
