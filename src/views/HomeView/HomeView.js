import React from 'react'

import Main from 'layouts/Main'
import CoffeeCard from 'components/CoffeeCard'

import { Hero } from './components'

const HomeView = () => {
  return (
    <Main>
      <Hero/>
    <CoffeeCard/>
    </Main>
  )
}
export default HomeView
