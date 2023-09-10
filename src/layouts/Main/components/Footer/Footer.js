import React from 'react'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Fab from '@mui/material/Fab'
import InstaIcon from '@mui/icons-material/Instagram'
import Typography from '@mui/material/Typography'

const Footer = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Box
          display={'flex'}
          alignItems={'center'}
          width={1}
          flexDirection={{ xs: 'column', sm: 'row' }}
        >
          <Box marginTop={1}>
            <Fab
              color="secondary"
              sx={{ boxShadow: 'none' }}
              component={'a'}
              href="https://www.instagram.com/napavalleycomposite/"
              target="blank"
              title="Go to Instagram.com"
            >
              <InstaIcon />
            </Fab>
          </Box>
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Typography
          align={'center'}
          variant={'subtitle2'}
          color="text.secondary"
          gutterBottom
        >
          &copy; {new Date().getFullYear()} NAPA VALLEY COMPOSITE CYCLING
        </Typography>
        <Typography
          align={'center'}
          variant={'caption'}
          color="text.secondary"
          component={'p'}
        >
          MOUNTAIN BIKE RACING AND RIDING FOR ALL!!
        </Typography>
      </Grid>
    </Grid>
  )
}

export default Footer
