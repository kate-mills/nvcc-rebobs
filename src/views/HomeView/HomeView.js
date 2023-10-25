import React from 'react'
import Box from '@mui/material/Box'

import Main from 'layouts/Main'

import { Hero, NextEvent } from './components'

const HomeView = () => {
  return (
    <Main isDarkHero={true}>
      <Hero/>
    <Box>
      <NextEvent/>
    </Box>
    </Main>
  )
}
export default HomeView
