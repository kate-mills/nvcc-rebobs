/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import { useTheme } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

import Container from 'components/Container'

import ibew from 'images/sponsors/ibew.webp'
import redwood from 'images/sponsors/redwood.webp'
import valero from 'images/sponsors/valero.webp'
import bike from 'images/sponsors/bike-coalition.webp'
import theHub from 'images/sponsors/the-hub.webp'
import skyline from 'images/sponsors/skyline.webp'

const mock = [
  { src: ibew, title: 'IBEW, Electricians of Napa & Solono Counties', width: 90,height: 107.828, href: 'https://www.ibewlu180.org/' },
  {
    src: theHub,
    title: 'The Hub Napa',
    width: 170,
    height: 68,
    href: 'https://www.thehubnapa.com/',
  },
  {
    src: bike,
    title: 'Napa County Bicycle Coalition',
    width: 150,
    height: 43.063,
    href: 'https://napabike.org/',
  },
  {
    src: skyline,
    title: 'Skyline Park',
    width: 120,
    height: 52.859,
    href: 'https://www.skylinepark.org/',
  },
  {
    src: redwood,
    title: 'Redwood Trails Alliance',
    width: 120,
    height: 51.422,
    href: 'https://trailsalliance.org/',
  },
  {
    src: valero,
    title: 'Valero Benicia Refinery',
    width: 120,
    height: 25.469,
    href: 'https://www.valero.com/about/locations/benicia-refinery',
  },
]

const OurSponsors = () => {
  const theme = useTheme()
  return (
    <Container>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Box>
            <Typography variant={'h4'} gutterBottom sx={{ fontWeight: 700 }}>
              Proudly Sponsored By
            </Typography>
            <Typography variant={'h6'} component={'p'} color={'text.secondary'}>
              Thanks to our local sponsors for their generous support,
              <br />
              we can make this program possible.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box>
            <Box
              display="flex"
              flexWrap="wrap"
              justifyContent={'space-around'}
              alignItems={'center'}
            >
              {mock.map((item, i) => (
                <Box
                  width={item.width}
                  height={item.height}
                  maxWidth={item.width}
                  marginTop={2}
                  marginRight={4}
                  key={i}
                >
                  <Box component={'a'} href={item.href} target="_blank">
                    <Box
                      component="img"
                load={'lazy'}
                      width={1}
                      src={item.src}
                title={item.title}
                      alt={`${item.title} logo`}
                      sx={{
                        filter:
                          theme.palette.mode === 'dark'
                            ? 'brightness(0) invert(0.7)'
                            : 'none',
                      }}
                    />
                  </Box>
                </Box>
              ))}
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Container>
  )
}

export default OurSponsors 
