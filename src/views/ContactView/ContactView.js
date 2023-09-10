import React from 'react'
import Box from '@mui/material/Box'

import Main from 'layouts/Main'

import teamImg from 'images/team2023.jpg'

import { Hero, About } from './components'

const ContactView = () => {
  return (
    <Main isDarkHero={true}>
      <Hero bgImg={teamImg} />
      <Box>
        <About img={teamImg} />
      </Box>
    </Main>
  )
}
export default ContactView
