import React from 'react'
import Box from '@mui/material/Box'

import Main from 'layouts/Main'

import { Hero, Attention } from './components'

const HomeView = () => {
  return (
    <Main isDarkHero={true}>
      <Hero/>
    <Box>
      <Attention/>
    </Box>
    </Main>
  )
}
export default HomeView
