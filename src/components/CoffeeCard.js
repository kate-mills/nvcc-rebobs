import React from 'react'
import { useTheme } from '@mui/material/styles'
import Divider from '@mui/material/Divider'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Avatar from '@mui/material/Avatar'
import Chip from '@mui/material/Chip'

import Container from 'components/Container'

import ohmAvatar from 'images/ohm-avatar.webp'
import coffeeImg from 'images/coffee.webp'

const mock = {
  image: coffeeImg,
  description: 'Our team has collaborated with Ohm Coffee Roasters to offer you the Full Send Blend, a medium-dark roast that embodies the excitement of riding your favorite trail section. With every purchase of a 12 oz bag, our partner donates $6 to the Rebobs.',
  details: ' 12oz. or 5lb. bag of whole beans.',
  title:
    'Buy Rebobs "Full Send Blend" Coffee',
  partner: {
    name: 'OHM Coffee Roasters',
    avatar: ohmAvatar,
  },
  anchorText: 'Buy Coffee HERE',
}

const CoffeeCard = () => {
  const theme = useTheme()
  return (
    <Container>
      <Box
        component={''}
        href={'https://www.ohmcoffee.com/products/rebobs'}
        display={'block'}
        width={1}
        height={1}
        sx={{ textDecoration: 'none', transition: 'all .2s ease-in-out', '&:hover': { transform: `translateY(-${theme.spacing(1 / 2)})`, }, }}
      >
        <Box
          component={Card}
          width={1}
          height={1}
          boxShadow={4}
          display={'flex'}
          flexDirection={{ xs: 'column', md: 'row-reverse' }}
          sx={{ backgroundImage: 'none' }}
        >
          <Box
            sx={{
              width: { xs: 1, md: '50%' },
              position: 'relative',
              display: 'flex',
            }}
          >
            <Box
              component={'img'}
              height={1}
              width={1}
              src={mock.image}
              alt="Bag of Napa Rebobs Full Send Blend Coffee Beans"
              sx={{
                objectFit: 'contain',
                maxHeight: 300,
                filter:
                  theme.palette.mode === 'dark' ? 'brightness(0.7)' : 'none',
              }}
            />
            <Chip
              avatar={<Avatar src={mock.partner.avatar} sx={{ marginRight: 1 }} />}
              component={'a'}
              href={'https://www.ohmcoffee.com/products/rebobs'}
              label={mock.anchorText}
              sx={{
                position: 'absolute',
                top: 20,
                right: 20,
                bgcolor: 'background.paper',
              }}
            />
            <Box
              component={'svg'}
              viewBox="0 0 112 690"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              sx={{
                position: 'absolute',
                bottom: 0,
                top: '-50%',
                left: 0,
                right: 0,
                color: theme.palette.background.paper,
                transform: 'scale(2)',
                height: 1,
                width: 'auto',
                transformOrigin: 'top center',
                display: { xs: 'none', md: 'block' },
              }}
            >
              <path
                d="M0 0h62.759v172C38.62 384 112 517 112 517v173H0V0z"
                fill="currentColor"
              />
            </Box>
          </Box>
          <CardContent
            sx={{
              position: 'relative',
              width: { xs: 1, md: '50%' },
              padding: 4,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <Box>
              <Typography variant={'h5'} gutterBottom>
                {mock.title}
              </Typography>
              <Typography color="text.secondary">{mock.description}</Typography>
            </Box>
            <Box>
              <Divider sx={{ marginY: 2 }} />
              <Box
                display={'flex'}
                justifyContent={'space-between'}
                alignItems={'center'}
              >
                <Box display={'flex'} alignItems={'center'}>
                  <Avatar src={mock.partner.avatar} sx={{ marginRight: 1 }} />
                  <Typography color={'text.secondary'} mr={3} minWidth={'fit-content'}>
                    {mock.partner.name}
                  </Typography>
                </Box>
                <Typography type={'link'} color={'text.secondary'} ml={3} component={'a'} href={'https://www.ohmcoffee.com/products/rebobs'} textAlign={'right'}>{mock.anchorText}</Typography>
              </Box>
            </Box>
          </CardContent>
        </Box>
      </Box>
    </Container>
  )
}

export default CoffeeCard
