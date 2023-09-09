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

const mock = [
  {
    title: 'PIT ZONE',
    subtitle:
      'Log-In to your PIT ZONE account right here. Keep your info up-to-date, register for races, and more.',
    icon: pitzone,
    href: 'https://pitzone.nationalmtb.org/users/sign_in',
  },
  {
    title: 'TEAMSNAP',
    subtitle:
      'Log-In to your TeamSnap account right here. Stay in the loop with team emails, texts and more.',
    icon: teamsnap,
    href: 'https://go.teamsnap.com/6726246/home',
  },

  {
    title: 'STRAVA',
    subtitle:
      "We've added our club page on Strava to help track ride goals and have fun with metrics.",
    href: 'https://www.strava.com/',

    icon: strava,
  },
]

const Login = () => {
  return (
    <Box bgcolor={'#f16021'}>
      <Container>
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
              Keep your info up-to-date, register for races, and more
            </Typography>
          </Box>
          <Grid container spacing={2}>
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
                    width={{ xs: 60, md: 80 }}
                    height={{ xs: 60, md: 80 }}
                    marginBottom={2}
                    src={item.icon}
                    sx={{ filter: 'contrast(0) brightness(2)' }}
                    variant="rounded"
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
                  <Typography
                    sx={{ color: 'common.white' }}
                    align={'center'}
                    
                  >
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
