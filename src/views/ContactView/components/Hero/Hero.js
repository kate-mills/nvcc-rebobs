/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import { useTheme } from '@mui/material/styles'
import bgImg from 'images/team2023.jpg'

import ContactForm from '../Form'
import Container from 'components/Container'

const Hero = () => {
  const theme = useTheme()

  const GridItemHeadlineBlock = () => (
    <Box marginBottom={4} data-aos="fade-up">
      <Typography
        component="h1"
        variant="h3"
        gutterBottom
        sx={{ fontWeight: 700, color: 'common.white' }}
      >
        Napa Valley Composite Cycling Team
      </Typography>
      <Typography
        variant="h6"
        component="p"
        color="text.primary"
        sx={{
          fontWeight: 500,
          color: 'common.white',
        }}
      >
   The Rebobs (Napa Valley Composite Cycling Team) is a NICA-affiliated mountain bike team offering middle and high school students (6-12 grades) an exciting opportunity to participate in bike racing. Whether you are new to mountain bike riding or have prior experience in racing, our team welcomes you to join us as we compete with high schools across California.
      </Typography>
    </Box>
  )

  return (
    <Box
      minHeight={300}
      height={'auto'}
      position={'relative'}
      sx={{
        marginTop: -13,
        paddingTop: 13,
        backgroundColor: theme.palette.alternate.main,
        background: `url(${bgImg}) no-repeat center`,
        backgroundPosition: `50% 80%`,
        backgroundSize: 'cover',
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          width: 1,
          height: 1,
          backgroundColor: theme.palette.primary.main,
          backgroundImage: `linear-gradient(315deg, ${theme.palette.primary.main} 0%, #000000 74%)`,
          opacity: '0.8',
          zIndex: 1,
        }}
      />
      <Container position={'relative'} zIndex={2}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Box width={1} height="100%" display="flex" alignItems="center">
              <GridItemHeadlineBlock />
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box width={1} height="100%" display="flex" alignItems="center">
              <ContactForm />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default Hero
