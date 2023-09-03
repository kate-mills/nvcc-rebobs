import React from 'react'
import PropTypes from 'prop-types'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import { alpha, useTheme } from '@mui/material/styles'
import MenuIcon from '@mui/icons-material/Menu'

import GatsbyLink from 'components/Link'
import Logo from 'images/rebob.webp'


const Topbar = ({ onSidebarOpen, pages, colorInvert = false }) => {
  const theme = useTheme()

  return (
    <Box
      display={'flex'}
      justifyContent={'space-between'}
      alignItems={'center'}
      width={1}
      height={1}
    >
      <Box display={'flex'} component={GatsbyLink} to="/" title="Napa Valley Composite Cycling Team" width={115} height={95}>
        <Box component={'img'} src={Logo} alt="Rebobs Logo" height={1} width={1}/>
      </Box>

      {/* TOGGLE SIDEBAR BUTTONS */}
 <Box sx={{display: {xs: 'none', md: 'flex'}}} alignItems={'center'}>
        <Box marginRight={2}>
          <Button variant={'text'}
            component={GatsbyLink}
            to="/about"
          >
            About
          </Button>
        </Box>
        <Box>
          <Button
            variant="contained"
            color="primary"
            component={GatsbyLink}
            to="/contact/"
            size="large">
            Contact
          </Button>
        </Box>
      </Box>

      {/* SIDEBAR TOGGLER MENU */}
      <Box sx={{ display: { xs: 'block', md: 'none' } }} alignItems={'center'}>
        <Button
          onClick={() => onSidebarOpen()}
          aria-label="Menu"
          variant={'outlined'}
          sx={{
            borderRadius: 2,
            marginLeft: 1,
            minWidth: 'auto',
            padding: 1,
            borderColor: alpha(theme.palette.divider, 0.2),
          }}
        >
          <MenuIcon />
        </Button>
      </Box>
    </Box>
  )
}

Topbar.propTypes = {
  onSidebarOpen: PropTypes.func,
  pages: PropTypes.object,
  colorInvert: PropTypes.bool,
}

export default Topbar
