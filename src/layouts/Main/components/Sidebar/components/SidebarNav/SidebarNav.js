import React from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import logoImg from 'images/rebob.webp'
import GatsbyLink from 'components/Link'

const SidebarNav = () => {
  return (
    <Box>
      <Box width={1} paddingX={2} paddingY={1}>
        <Box
          display={'flex'}
          component={GatsbyLink}
          to="/"
          title="NAPA VALLEY COMPOSITE CYCLING"
          width={{ xs: 100, md: 120 }}
        >
          <Box component={'img'} src={logoImg} height={1} width={1} />
        </Box>
      </Box>
      <Box paddingX={2} paddingY={2}>
        <Box></Box>
        <Box></Box>
        <Box></Box>
        <Box></Box>
        <Box></Box>
        <Box></Box>
        <Box marginTop={2}>
          <Button
    color={'primary'}
            size={'large'}
            variant="outlined"
            fullWidth
            component={GatsbyLink}
            to={'/about'}
          >
            About
          </Button>
        </Box>
        <Box marginTop={1}>
          <Button
            size={'large'}
            variant="contained"
            color="primary"
            fullWidth
            component={GatsbyLink}
            target="blank"
            to={'/contact'}
          >
            Contact
          </Button>
        </Box>
      </Box>
    </Box>
  )
}

export default SidebarNav
