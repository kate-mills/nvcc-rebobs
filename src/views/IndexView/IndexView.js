import React from 'react'
import Box from '@mui/material/Box'

import Container from 'components/Container'
import Main from 'layouts/Main'

import { Hero, Description } from './components'

const IndexView = () => {
  return (
    <Main>
      <Hero />
      <Box bgcolor={'#f26122'}>
        <Container>
          <Description />
        </Container>
      </Box>
    </Main>
  )
}

export default IndexView
