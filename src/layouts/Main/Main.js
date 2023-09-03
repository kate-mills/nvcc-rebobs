import React, {useState} from 'react'
import PropTypes from 'prop-types'
import {useTheme} from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'
import AppBar from '@mui/material/AppBar'
import useScrollTrigger from '@mui/material/useScrollTrigger'

import Container from 'components/Container'

import Fab from '@mui/material/Fab'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import Zoom from '@mui/material/Zoom'
import NoSsr from '@mui/material/NoSsr'

import {Topbar, Sidebar, Footer} from './components'



import pages from '../navigation'

const Main = ({children, colorInvert = false, bgcolor = 'transparent'}) => {
  const theme = useTheme()
  console.log(theme)
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true
  })

  const scrollTo = (id) => {
    setTimeout(() => {
      const element = document.querySelector(`#${id}`)
      if (!element) {
        return
      }
      window.scrollTo({left: 0, top: element.offsetTop, behavior: 'smooth'})
    })
  }

  const [openSidebar, setOpenSidebar] = useState(false)

  const handleSidebarOpen = () => {
    setOpenSidebar(true)
  }

  const handleSidebarClose = () => {
    setOpenSidebar(false)
  }

  const open = isMd ? false : openSidebar

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 75 
  })

  return (
    <Box id="js--main-top">
      <AppBar
        position={'sticky'}
        sx={{top: 0, backgroundColor: trigger ? theme.palette.background.paper : bgcolor}}
        elevation={trigger ? 1 : 0}
      >
        <Container paddingY={'2px !important'}>
          <Topbar onSidebarOpen={handleSidebarOpen} pages={pages} colorInvert={trigger ? false : colorInvert} />
        </Container>
      </AppBar>
      <Sidebar onClose={handleSidebarClose} open={open} variant="temporary" pages={pages} />
      <main>
        {children}
        <Divider />
      </main>
      <Container paddingY={4}>
        <Footer />
      </Container>
      <NoSsr>
        <Zoom in={trigger}>
          <Box
            onClick={() => scrollTo('js--main-top')}
            role="presentation"
            sx={{position: 'fixed', bottom: 24, right: 32, zIndex: 5501}}
          >
            <Fab color="primary" size="small" aria-label="scroll back to top">
              <KeyboardArrowUpIcon />
            </Fab>
          </Box>
        </Zoom>
      </NoSsr>
    </Box>
  )
}

Main.propTypes = {
  children: PropTypes.node,
  colorInvert: PropTypes.bool,
  bgcolor: PropTypes.string
}

export default Main
