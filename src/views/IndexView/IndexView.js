import React from 'react'
import Box from '@mui/material/Box'

import Container from 'components/Container'
import Main from 'layouts/Main'

import { Hero } from './components'

const IndexView = () => {
  return (
    <Main colorInvert={true}>
      <Hero />
      <Box bgcolor={'yellow.main'}>
        <Container>
      {/*<Description />*/}
        </Container>
      </Box>
    </Main>
  )
}

export default IndexView
