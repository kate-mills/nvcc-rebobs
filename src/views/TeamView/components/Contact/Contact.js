/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import GatsbyLink from 'components/Link'

const Contact = () => {
  return (
    <Box>
      <Box
        display={'flex'}
        justifyContent={'space-between'}
        alignItems={{ xs: 'flex-start', sm: 'center' }}
        flexDirection={{ xs: 'column', sm: 'row' }}
      >
        <Box>
          <Typography fontWeight={700} variant={'h5'} gutterBottom>
            Do you love mountain biking?
          </Typography>
          <Typography maxWidth={'60vw'}>
            If you're a middle or high-school student in Napa Valley and love
            mountain biking, join us!
          </Typography>
        </Box>
        <Box display="flex" marginTop={{ xs: 2, md: 0 }}>
          <Button
            variant="contained"
            color="primary"
            size="large"
            component={GatsbyLink}
            to={'/contact/'}
          >
            Contact us
          </Button>
        </Box>
      </Box>
    </Box>
  )
}

export default Contact
