/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import GatsbyLink from 'components/Link'

import Container from 'components/Container'

import bgImg from 'images/team2023.webp'

const SimpleHeroWithBottomVideo = () => {
  const theme = useTheme()
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  })

  return (
    <Box>
      <Container>
        <Box>
          <Box marginBottom={2}>
            <Typography
              variant="h2"
              color="text.primary"
              sx={{
                fontWeight: 700,
              }}
            >
              Napa Valley Composite Cycling Team / Rebobs
            </Typography>
          </Box>
          <Box marginBottom={3}>
            <Typography
              variant="h5"
              component="p"
              color="text.secondary"
              sx={{ fontWeight: 400 }}
            >
              Our team is affiliated with NICA and welcomes students from any
              middle or high school in Napa Valley, grades 6-12. We participate
              in mountain bike competitions against high schools from all over
              California. Whether you are a beginner or have prior racing
              experience, you are welcome to join our team.
            </Typography>
          </Box>
          <Box
            display="flex"
            flexDirection={{ xs: 'column', sm: 'row' }}
            alignItems={{ xs: 'stretched', sm: 'center' }}
          >
            <Button
              component={GatsbyLink}
              variant="contained"
              color="primary"
              size="large"
              fullWidth={isMd ? false : true}
              to={'/contact/'}
            >
              Contact Us
            </Button>
            <Box
              marginTop={{ xs: 2, sm: 0 }}
              marginLeft={{ sm: 2 }}
              width={{ xs: '100%', md: 'auto' }}
            >
              <Button
                component={'a'}
                href={'https://www.norcalmtb.org/races/'}
                variant="outlined"
                color="primary"
                size="large"
                fullWidth={isMd ? false : true}
                sx={{ textAlign: 'center' }}
              >
                Race Flyers & Results
              </Button>
            </Box>
            <Box
              marginTop={{ xs: 2, sm: 0 }}
              marginLeft={{ sm: 2 }}
              width={{ xs: '100%', md: 'auto' }}
            >
              <Button
                component={GatsbyLink}
                to={'/faq/'}
                variant="contained"
                color="secondary"
                size="large"
                fullWidth={isMd ? false : true}
              >
                FAQs
              </Button>
            </Box>
          </Box>
        </Box>
      </Container>
      <Container maxWidth={1} paddingTop={'0 !important'}>
        <Box
          sx={{
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            '& img': {
              objectPosition: 'left',
              objectFit: 'cover',
            },
            '&::after': {
              content: '""',
              position: 'absolute',
              left: 0,
              right: 0,
              bottom: 0,
              top: 0,
              width: 1,
              height: 1,
              zIndex: 3,
              background: theme.palette.primary.main,
              opacity: 0.2,
            },
          }}
        >
          <Box
            component={'img'}
            maxHeight={500}
            width={1}
            src={bgImg}
            alt="2022 Napa Valley Composite Cycling Team/ The Rebobs sit on mountain bikes."
          ></Box>
        </Box>
      </Container>
    </Box>
  )
}

export default SimpleHeroWithBottomVideo
