import React from 'react'
import PropTypes from 'prop-types'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import { useTheme } from '@mui/material/styles'

import graniteBayCamping from 'images/team/granitebay/granite-bay-camping.jpeg'
import graniteBayGirls from 'images/team/granitebay/granite-bay-girls.jpeg'
import graniteBayStart from 'images/team/granitebay/granite-bay-start.jpeg'
import graniteBayTeamSpirit from 'images/team/granitebay/granite-bay-team-spirit.jpeg'
import graniteBayWinners from 'images/team/granitebay/granite-bay-winners.jpeg'

import petalumaDevoHillside from 'images/team/devo/petaluma-devo-hillside.jpeg'
import petalumaDevo from 'images/team/devo/petaluma-devo.jpeg'

import practices0 from 'images/team/practice/00.jpeg'
import practices1 from 'images/team/practice/01.jpeg'
import practices2 from 'images/team/practice/02.jpeg'
import practices3 from 'images/team/practice/03.jpeg'
import practices4 from 'images/team/practice/04.jpeg'

const mockLeftGrid = [
  {
    image: graniteBayStart,
    description: 'TEAMSNAP: Granite Bay 2023',
    title: 'Granite Bay 2023',
  },
  {
    image: graniteBayTeamSpirit,
    description: 'TEAMSNAP:Granite Bay 2023',
    title: 'Granite Bay 2023',
  },
  {
    image: graniteBayGirls,
    description: 'TEAMSNAP: Granite Bay 2023',
    title: 'Granite Bay 2023',
  },

  { image: practices3, description: 'TEAMSNAP: February 4, 2023', title: 'Practices 2023', },
]
const mockMiddleGrid = [
  {
    image: petalumaDevo,
    description: 'TEAMSNAP: Petaluma Devo 203',
    title: 'Petaluma Devo 203',
  },
  {
    image: petalumaDevoHillside,
    description: 'TEAMSNAP:Petaluma Devo 203',
    title: 'Petaluma Devo 203',
  },
  {
    image: graniteBayWinners,
    description: 'TEAMSNAP: Granite Bay 2023',
    title: 'Granite Bay 2023',
  },
  {
    image: practices4,
    description: 'TEAMSNAP: February 4, 2023',
    title: 'Practices 2023',
  },
]
const mockRightGrid = [
  {
    image: practices1,
    description: 'TEAMSNAP: February 4, 2023',
    title: 'Practices 2023',
  },
  { image: practices0, description: 'TEAMSNAP: January 14, 2023', title: 'Practices 2023', },
  {
    image: practices2,
    description: 'TEAMSNAP: February 4, 2023',
    title: 'Practices 2023',
  },

  { image: graniteBayCamping, description: 'TEAMSNAP: Granite Bay 2023', title: 'Granite Bay 2023', },
]

const Column = ({ data }) => {
  const theme = useTheme()
  return (
    <Box>
      {data.map((item, i) => (
        <Box
          key={i}
          sx={{
            marginBottom: { xs: 2, sm: 3 },
            '&:last-child': { marginBottom: 0 },
          }}
        >
          <Box
            boxShadow={1}
            sx={{
              position: 'relative',
              overflow: 'hidden',
              borderRadius: 2,
              '&:hover': {
                '& img': {
                  transform: 'scale(1.2)',
                },
                '& .portfolio-massonry__main-item': {
                  bottom: 0,
                },
              },
            }}
          >
            <Box
              component={'img'}
              loading={i > 5 ? 'lazy' : 'eager'}
              height={1}
              width={1}
              src={item.image}
              alt="..."
              maxHeight={{ xs: 400, sm: 600, md: 1 }}
              sx={{
                transition: 'transform .7s ease !important',
                transform: 'scale(1.0)',
                objectFit: 'cover',
                filter:
                  theme.palette.mode === 'dark' ? 'brightness(0.7)' : 'none',
              }}
            />
            <Box
              position={'absolute'}
              bottom={'-100%'}
              left={0}
              right={0}
              padding={4}
              bgcolor={'background.paper'}
              className={'portfolio-massonry__main-item'}
              sx={{ transition: 'bottom 0.3s ease 0s' }}
            >
              <Box
                component={'svg'}
                preserveAspectRatio="none"
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                viewBox="0 0 1920 100.1"
                sx={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  transform: 'translateY(-90%)',
                  zIndex: 2,
                  width: 1,
                }}
              >
                <path
                  fill={theme.palette.background.paper}
                  d="M0,0c0,0,934.4,93.4,1920,0v100.1H0L0,0z"
                ></path>
              </Box>
              <Typography variant={'h6'} fontWeight={700} gutterBottom>
                {item.title}
              </Typography>
              <Typography>{item.description}</Typography>
            </Box>
          </Box>
        </Box>
      ))}
    </Box>
  )
}

Column.propTypes = {
  data: PropTypes.array.isRequired,
}

const Main = () => {
  return (
    <Box>
      <Grid container spacing={4}>
        <Grid item xs={12} md={4}>
          <Column data={mockLeftGrid} />
        </Grid>
        <Grid item xs={12} md={4}>
          <Column data={mockMiddleGrid} />
        </Grid>
        <Grid item xs={12} md={4}>
          <Column data={mockRightGrid} />
        </Grid>
      </Grid>
    </Box>
  )
}

export default Main
