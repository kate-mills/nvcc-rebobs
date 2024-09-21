import React from 'react'
import PropTypes from 'prop-types'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import { useTheme } from '@mui/material/styles'

import graniteBayGirls from 'images/team/granitebay/granite-bay-girls.jpeg'
import graniteBayTeamSpirit from 'images/team/granitebay/granite-bay-team-spirit.jpeg'
import graniteBayWinners from 'images/team/granitebay/granite-bay-winners.jpeg'

import petalumaDevoHillside from 'images/team/devo/petaluma-devo-hillside.jpeg'
import petalumaDevo from 'images/team/devo/petaluma-devo.jpeg'

import practices0 from 'images/team/practice/00.jpeg'
import practices1 from 'images/team/practice/01.jpeg'
import practices2 from 'images/team/practice/02.jpeg'
import practices3 from 'images/team/practice/03.jpeg'
import practices4 from 'images/team/practice/04.jpeg'

import img1 from 'images/team/instagram/img1.webp'
import img2 from 'images/team/instagram/img2.webp'
import img3 from 'images/team/instagram/img3.webp'
import img4 from 'images/team/instagram/img4.webp'
import img5 from 'images/team/instagram/img5.webp'
import img6 from 'images/team/instagram/img6.webp'
import img7 from 'images/team/instagram/img7.webp'
import img8 from 'images/team/instagram/img8.webp'

const mockLeftGrid = [
  {
    image: img1,
    description:
      'Congratulations to Zac on taking 3rd place in the 18 and younger Sport class at the Lake Sonoma Crusher Series.',
  },
  {
    image: img2,
    description:
      'Cam, Audrey and “what?” Coach Mike 🏃 🏃‍♀️ 🏃‍♂️ in the Napa-Vintage-Justin Friendly Cross Country Meet!!! Go Coach Mike!!! ',
  },
  {
    image: img7,
    description:
      'Rebobs attack the Stafford Shorty. Good times had by all. Great to see old and new friends!',
  },
  { image: graniteBayTeamSpirit, description: '' },
  { image: practices3, description: '' },
  { image: graniteBayWinners, description: '' },
]

const mockMiddleGrid = [
  {
    image: img3,
    description:
      'The Halls & the Gibbs Climbed to the Top this weekend to support MS and Coach Trevor. Awesome job ladies!',
  },
  {
    image: img6,
    description:
      'Rebobs you did it, we did it!!! What an awesome day yesterday. We are so proud of each of you that made it out to race. For those of you who braved the conditions and challenged yourselves in your first race, Bravo!!! A shout out to Lumen on his 4th place win!!! And to Audrey, Alanah, and Stella on their podium finishes!!!',
  },
  { image: petalumaDevo, description: '' },
  { image: graniteBayGirls, description: '' },
  { image: petalumaDevoHillside, description: '' },
  { image: practices4, description: '' },
]

const mockRightGrid = [
  {
    image: img8,
    description:
      'Col du Tourmalet- La Mongie- Luz Ardiden An epic day in the Pyrenees for Coach Dave and Audrey. They started the ride at sun rise which was such a magical time of day. Sound on for the last slide if you want to hear the Pyrenees ring. 9,357 feet of elevation.',
  },
  {
    image: img4,
    description:
      'Happy 4th of July! 🇺🇸 Some of our Rebob ladies started the morning off with a 3K or 10k at the Kenwood Footrace!',
  },
  {
    image: img5,
    description:
      'Congratulations to Zac Dropping for winning the Stafford Shorty Series Overall',
  },
  { image: practices1, description: '' },
  { image: practices0, description: '' },
  { image: practices2, description: '' },
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
              loading={i < 4 ? 'eager' : 'lazy'}
              height={1}
              width={1}
              src={item.image}
              alt=""
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
              {item.description && <Typography>{item.description}</Typography>}
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
