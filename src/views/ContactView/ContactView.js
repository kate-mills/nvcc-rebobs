import React from 'react'
import Box from '@mui/material/Box'

import Main from 'layouts/Main'

import { Hero, About } from './components'

const ContactView = () => {
  return (
    <Main isDarkHero={true}>
      <Hero/>
      <Box>
        <About/>
      </Box>
    </Main>
  )
}
export default ContactView
