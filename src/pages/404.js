import * as React from 'react'

import NotFoundView from 'views/NotFoundView'

export default function ErrorPage() {
  return <NotFoundView />
}



export const Head = () => {
  return (
    <>
      <title>404 | Napa, CA | Napa Valley Composite Cycling Team</title>
    </>
  )
}
