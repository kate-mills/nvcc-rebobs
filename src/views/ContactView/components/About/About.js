/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import useMediaQuery from '@mui/material/useMediaQuery'
import { useTheme } from '@mui/material/styles'

import GatsbyLink from 'components/Link'
//import teamImg from 'images/practice.webp'
import teamImg from 'images/2023/Team-Photo-Skyline.webp'

import Container from 'components/Container'

const About = () => {
  const theme = useTheme()
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  })

  const LeftSide = () => (
    <Box data-aos={isMd ? 'fade-right' : 'fade-up'}>
      <Box marginBottom={2}>
        <Typography variant="h4" color="text.primary" sx={{ fontWeight: 700 }}>
          Opportunities for Everyone 
        </Typography>
      </Box>
      <Box marginBottom={4}>
        <Typography variant="h6" color="text.secondary" gutterBottom>
          Join the Napa Valley Composite Cycling Team
        </Typography>
        <Typography component="p">
          The Napa Valley Composite Cycling Team is a NICA-affiliated mountain
          bike team offering middle and high school students (6-12 grades) an
          exciting opportunity to participate in bike racing. Whether you are
          new to mountain bike riding or have prior experience in racing, our
          team welcomes you to join us as we compete with high schools across
          California.
        </Typography>
      </Box>
      <Box
        display="flex"
        flexDirection={{ xs: 'column', sm: 'row' }}
        alignItems={{ xs: 'stretched', sm: 'flex-start' }}
        to={'/about/'}
        component={GatsbyLink}
      >
        {' '}
        <Button
          variant="contained"
          color="primary"
          size="large"
          fullWidth={isMd ? false : true}
        >
          About us
        </Button>
      </Box>
    </Box>
  )

  const RightSide = () => {
    return (
      <Box
        sx={{
          height: { xs: 'auto', md: 1 },
          '& img': {
            objectFit: 'cover',
          },
        }}
      >
        <Box
          component={'img'}
          loading="lazy"
          alt="2022 Napa Valley Composite Cycling Team lined up with mountain bikes in front of the Big Barn at Skyline Park."
          src={teamImg}
          height={{ xs: 'auto', md: 1 }}
          maxHeight={{ xs: 300, md: 1 }}
          width={1}
          maxWidth={1}
        />
      </Box>
    )
  }

  return (
    <Box
      sx={{
        width: 1,
        height: 1,
        overflow: 'hidden',
      }}
    >
      <Container paddingX={0} paddingY={0} maxWidth={{ sm: 1, md: 1236 }}>
        <Box
          display={'flex'}
          flexDirection={{ xs: 'column', md: 'row' }}
          position={'relative'}
        >
          <Box width={1} order={{ xs: 2, md: 1 }}>
            <Container>
              <LeftSide />
            </Container>
          </Box>
          <Box
            sx={{
              flex: { xs: '0 0 100%', md: '0 0 50%' },
              position: 'relative',
              maxWidth: { xs: '100%', md: '50%' },
              order: { xs: 1, md: 2 },
            }}
          >
            <Box
              sx={{
                width: { xs: 1, md: '50vw' },
                height: '100%',
                position: 'relative',
              }}
            >
              <Box
                sx={{
                  width: '100%',
                  height: '100%',
                  overflow: 'hidden',
                }}
              >
                <Box
                  sx={{
                    overflow: 'hidden',
                    left: '0%',
                    width: 1,
                    height: 1,
                    position: { xs: 'relative', md: 'absolute' },
                  }}
                >
                  <RightSide />
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default About
