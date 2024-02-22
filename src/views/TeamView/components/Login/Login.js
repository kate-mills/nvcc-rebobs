import React from 'react'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Avatar from '@mui/material/Avatar'
import Typography from '@mui/material/Typography'
import Link from '@mui/material/Link'

import Container from 'components/Container'

import pitzone from 'images/team/login/pitzone-icon.png'
import teamsnap from 'images/team/login/snap-icon.png'
import strava from 'images/team/login/strava-icon.png'
import nica from 'images/team/login/nica-icon.png'

const mock = [
  {
    title: 'RACE INFO',
    subtitle: 'Get upcoming race flyers and race results.',
    icon: nica,
    href: 'https://www.norcalmtb.org/races/',
  },
  {
    title: 'PIT ZONE',
    subtitle: 'Register for races & keep your info updated.',
    icon: pitzone,
    href: 'https://pitzone.nationalmtb.org/users/sign_in',
  },
  {
    title: 'TEAMSNAP',
    subtitle: 'Stay updated with your team via email, text & more.',
    icon: teamsnap,
    href: 'https://go.teamsnap.com/6726246/home',
  },
  {
    title: 'STRAVA',
    subtitle: 'Track ride goals & have fun with metrics.',
    href: 'https://www.strava.com/',
    icon: strava,
  },
]

const Login = () => {
  return (
    <Box bgcolor={'#f16021'}>
      <Container paddingY={'1rem !important'}>
        <Box>
          <Box marginBottom={4}>
            <Typography
              variant={'h4'}
              gutterBottom
              align={'center'}
              sx={{ fontWeight: 700, color: 'common.white' }}
            >
              Access your team accounts here
              {/*Sign in to your team accounts from here.*/}
            </Typography>
            <Typography
              variant={'h6'}
              component={'p'}
              color={'text.secondary'}
              align={'center'}
              sx={{ color: 'common.white' }}
            >
              Keep your info up-to-date, register for races, and more.
            </Typography>
          </Box>
          <Grid container spacing={2} flexWrap={{ sm: 'wrap', md: 'nowrap' }}>
            {mock.map((item, i) => (
              <Grid item xs={12} md={4} key={i}>
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                  }}
                >
                  <Box
                    component={Avatar}
                    width={{ xs: 50, md: 60 }}
                    height={{ xs: 50, md: 60 }}
                    marginY={2}
                    src={item.icon}
                    sx={{ filter: 'contrast(0) brightness(2)' }}
                    variant="square"
                  />
                  <Link href={item.href} target="_blank" underline="none">
                    <Typography
                      variant={'h6'}
                      gutterBottom
                      align={'center'}
                      sx={{
                        fontWeight: 600,
                        color: 'common.white',
                        textDecoration: 'underline',
                        textUnderlineOffset: '3px',
                      }}
                    >
                      {item.title}
                    </Typography>
                  </Link>
                  <Typography sx={{ color: 'common.white' }} align={'center'}>
                    {item.subtitle}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  )
}

export default Login
