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
          justifyContent={'center'}
          width={1}
          marginY={1}
          flexDirection={{ xs: 'column', sm: 'row' }}
        >
          <Box>
            <Fab
              variant="extended"
              color="secondary"
              sx={{ boxShadow: 'none' }}
              component={'a'}
              //href="https://www.instagram.com/rebobs_legacy/"
              href="https://www.instagram.com/rebobsmtb/"
              target="blank"
              title="Go to Instagram.com"
              size="medium"
            >
              <Typography variant="button">RebobsMTB</Typography>
              <InstaIcon sx={{ ml: 0.5 }} />
            </Fab>
          </Box>
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Typography
          align={'center'}
          component={'p'}
          color="text.secondary"
          variant={'subtitle2'}
          gutterBottom
        >
          &copy; {new Date().getFullYear()} NAPA VALLEY COMPOSITE CYCLING
        </Typography>
        <Typography
          align={'center'}
          variant={'caption'}
          color="text.secondary"
          component={'p'}
          paddingBottom={{xs: '32px', md: '0', lg: '0'}}
        >
          MOUNTAIN BIKE RACING AND RIDING FOR ALL!!
        </Typography>
      </Grid>
    </Grid>
  )
}

export default Footer
