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
        description: `Easily access your Rebob team accounts from here. Connect with teammates, stay up-to-date on team news and announcements, and register for upcoming races and events.`,
      }}
    />
  )
}
