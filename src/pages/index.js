import React from 'react'
import HomeView from 'views/HomeView'

import Seo from 'components/Seo'

const IndexPage = () => {
  return <HomeView />
}

export default IndexPage

export const Head = ({ location }) => {
  return (
    <Seo
      location={location}
      pageContext={{
      title: 'Home',
        description: `Napa Valley Composite Cycling Team, The Rebobs, is a NICA-affiliated, 6-12 grade XC MTB team. Whether you are a beginner or have been racing before, our team would love to have you join us as we compete against high schools from around California. Students from ALL Napa middle and high schools are welcome to join!`,
      }}
    />
  )
}
