/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import { useTheme } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

import Container from 'components/Container'

import ibew from 'images/sponsors/ibew.webp'
import napaBikeCoalition from 'images/sponsors/napa-bike-coalition.webp'
import napaBikeShop from 'images/sponsors/napa-bike-shop.webp'
import redwood from 'images/sponsors/redwood.webp'
import skylinePark from 'images/sponsors/skyline-park.webp'
import theHub from 'images/sponsors/the-hub.webp'
import valero from 'images/sponsors/valero.webp'
import billDodd from 'images/sponsors/billdodd.webp'


const mock = [
  {
    src: napaBikeShop,
    title: 'Napa Valley Bike Shop',
    width: 79.91,
    height: 87,
    href: 'https://www.napavalleybikeshop.com/',
  },
  {
    src: ibew,
    title: 'IBEW, Electricians of Napa & Solono Counties',
    width: 68.22,
    height: 86,
    href: 'https://www.ibewlu180.org/',
  },
  {
    src: valero,
    title: 'Valero Benicia Refinery',
    width: 150.75,
    height: 32,
    href: 'https://www.valero.com/about/locations/benicia-refinery',
  },
  {
    src: napaBikeCoalition,
    title: 'Napa County Bicycle Coalition',
    width: 146.33,
    height: 60,
    href: 'https://napabike.org/',
  },
  {
    src: skylinePark,
    title: 'Skyline Park',
    width: 96.27,
    height: 40,
    href: 'https://www.skylinepark.org/',
  },
  {
    src: theHub,
    title: 'The Hub Napa',
    width: 170,
    height: 68,
    href: 'https://www.thehubnapa.com/',
  },
  {
    src: redwood,
    title: 'Redwood Trails Alliance',
    width: 121.33,
    height: 52,
    href: 'https://trailsalliance.org/',
  },
  {
    src: billDodd,
    title: 'Bill Dodd',
    width: 128,
    height: 64,
    href: 'https://sd03.senate.ca.gov/'
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
              Our team is incredibly thankful for the support of our community sponsors.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box>
            <Box
              display="flex"
              flexWrap="wrap"
              justifyContent={{ xs: 'space-around', lg: 'space-between' }}
              alignItems={'center'}
            >
              {mock.map((item, i) => (
                <Box
                  marginTop={2}
                  marginRight={2}
                  key={i}
                >
                  <Box component={'a'} href={item.href} target="_blank">
                    <Box
                      component="img"
                      load={'lazy'}
                      width={item.width}
                      height={item.height}
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
