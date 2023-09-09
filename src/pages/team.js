import React from 'react'
import TeamView from 'views/TeamView'

import Seo from 'components/Seo'

const TeamPage = () => {
  return <TeamView />
}

export default TeamPage

export const Head = ({location}) => {
  return (
    <Seo
      location={location}
      pageContext={{
      title: 'Team',
        description: `If you are a middle or high-school student in Napa Valley and love mountain biking, join the Napa Valley Composite Cycling Team affiliated with NICA. Our team welcomes everyone, whether you are a beginner or an experienced racer, to compete against high schools all over California. Students from all Napa middle and high schools can participate. Join us and explore the world of mountain biking!`,
      }}
    />
  )
}
