import React from 'react'
import PropTypes from 'prop-types'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import MenuIcon from '@mui/icons-material/Menu'

import GatsbyLink from 'components/Link'
import Logo from 'images/rebob.webp'
import useScrollTrigger from '@mui/material/useScrollTrigger'

const Topbar = ({
  onSidebarOpen,
  pages,
  colorInvert = false,
  isDarkHero = false,
}) => {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 2,
  })

  return (
    <Box
      display={'flex'}
      justifyContent={'space-between'}
      alignItems={'center'}
      width={1}
      height={1}
      backgroundColor= {trigger ? 'common.white':'transparent'}
    >
      <Box
        display={'flex'}
        component={GatsbyLink}
        to="/"
        title="Napa Valley Composite Cycling Team"
        width={103}
        height={85}
        my={'3px'}
      >
        <Box
          component={'img'}
          src={Logo}
          alt="Rebobs Logo"
          width={103}
          height={85}
          sx={{position: 'relative', top: '3px'}}
        />
      </Box>

      {/* TOGGLE SIDEBAR BUTTONS */}
      <Box sx={{ display: { xs: 'none', md: 'flex' } }} alignItems={'center'}>
        <Box component={GatsbyLink} to={'/about/'} color={'inherit'} marginRight={2}>About</Box>
        <Box component={GatsbyLink} to={'/team/'} color={'inherit'} marginRight={2}>Team</Box>
        <Box component={GatsbyLink} to={'/contact/'} color={'inherit'} marginRight={2}>Contact</Box>
        <Box component={GatsbyLink} to={'/faq/'} color={'inherit'} marginRight={2}>FAQ</Box>
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
            borderColor:
              trigger || !isDarkHero ? 'common.black' : 'common.white',
            color: trigger || !isDarkHero ? 'common.black' : 'common.white',
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
