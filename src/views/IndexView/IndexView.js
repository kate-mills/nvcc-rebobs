import React from 'react'
import Box from '@mui/material/Box'

import Main from 'layouts/Main'

import { Hero, About, } from './components'

const IndexView = () => {
  return (
    <Main>
      <Hero />
      <Box>
        <About />
      </Box>

    </Main>
  )
}

export default IndexView
