import React from 'react'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Link from '@mui/material/Link'
import Typography from '@mui/material/Typography'
import GatsbyLink from 'components/Link'

import logoImg from 'images/rebob.webp'

const Footer = () => {

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Box
          display={'flex'}
          justifyContent={'space-between'}
          alignItems={'center'}
          width={1}
          flexDirection={{ xs: 'column', sm: 'row' }}
        >
          <Box
            display={'flex'}
            component={GatsbyLink}
            to="/"
            title="NAPA VALLEY COMPOSITE CYCLING"
            width={80}
          >
            <Box
              component={'img'}
              src={logoImg}
              height={1}
              width={1}
            />
          </Box>
          <Box display="flex" flexWrap={'wrap'} alignItems={'center'}>
            <Box marginTop={1} marginRight={2}>
              <Link underline="none" component={GatsbyLink} to="/" color="text.primary" variant={'subtitle2'} > Home</Link>
            </Box>
            <Box marginTop={1} marginRight={2}>
              <Link
                underline="none"
                component={GatsbyLink}
                to={'/about'}
                color="text.primary"
                variant={'subtitle2'}
              >
                About
              </Link>
            </Box>
            <Box marginTop={1}>
              <Button
                variant="outlined"
                color="primary"
                component={GatsbyLink}
                target="blank"
                to={'/contact'}
                size="small"
              >
                Contact
              </Button>
            </Box>
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
