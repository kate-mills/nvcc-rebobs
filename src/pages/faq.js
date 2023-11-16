import React from 'react'
import FaqView from 'views/FaqView'

import Seo from 'components/Seo'

import {commonQuestionsJsonLd} from 'utils/common-questions'
const FaqPage = () => {
  return <FaqView />
}

export default FaqPage

export const Head = ({location}) => {
  return (
    <Seo
      location={location}
      pageContext={{
      title: 'FAQ',
        description: `The Rebob coaches answer frequently asked questions about the team, practice, competition, community service, and relevant topics.`,
          hideDefaultTitle: true,
      }}
    >
    <script type="application/ld+json">
      {JSON.stringify(commonQuestionsJsonLd)}
    </script>
    </Seo>
  )
}
