/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import useMediaQuery from '@mui/material/useMediaQuery'
import { useTheme } from '@mui/material/styles'

import Chip from '@mui/material/Chip'
import Stack from '@mui/material/Stack'

import GatsbyLink from 'components/Link'
import rebobLogo from 'images/CAW-CAW.svg'


import Container from 'components/Container'

const NextEvent = () => {
  const theme = useTheme()
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  })

  const LeftSide = () => (
    <Box data-aos={isMd ? 'fade-right' : 'fade-up'}>
      <Box marginBottom={2}>
        <Typography variant="h4" color="text.primary" sx={{ fontWeight: 700 }}>
Attention to all Rebobs
        </Typography>
      </Box>
      <Box marginBottom={4}>
        <Typography
          component={'p'}
          variant="h6"
          color={'text.secondary'}
          gutterBottom
        >We are scheduling team events now!
        </Typography>
        <Typography component="p" gutterBottom>
We have limited-availability team events that require registration on TeamSnap. Check your TeamSnap account for the complete list.
        </Typography>
        <Stack
          direction="row"
          spacing={1}
          justifyContent={'flex-start'}
          marginTop={2}
          marginBottom={4}
        >
          <Chip label="Some Events Require Registration" variant={'outlined'} />
        </Stack>
      </Box>
      <Box
        display="flex"
        flexDirection={{ xs: 'column', sm: 'row' }}
        alignItems={{ xs: 'stretched', sm: 'flex-start' }}
      ><Button
          variant="contained"
          color="primary"
          size="large"
          fullWidth={isMd ? false : true}
          href="https://go.teamsnap.com/6726246/home"
          component={'a'}
          title="Go to TeamSnap"
          sx={{ display: 'inline-block', textAlign: 'center', marginBottom: 2 }}
        >Check TeamSnap
        </Button>
        <Button
          variant="outlined"
          color="primary"
          size="large"
          fullWidth={isMd ? false : true}
          to="/contact"
          component={GatsbyLink}
          ml={{ sm: 0, md: 1 }}
        >
          Contact Us
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
            objectFit: 'contain',
          },
        }}
      >
        <Box
          component={'img'}
          alt={`Rebob Team Logo with background text that says, "CAW CAW."`}
          load={'lazy'}
          src={rebobLogo}
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

export default NextEvent
