import React from 'react'

import { alpha, useTheme } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

import NicaLogo from 'images/NICA-Logo.webp'

import Container from 'components/Container'
import Main from 'layouts/Main'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'

import Hero from './components/Hero'

const AboutView = () => {
  const theme = useTheme()
  return (
    <Main>
      <Box
        bgcolor={'#fff'}
        sx={{
          position: 'relative',
          '&::after': {
            position: 'absolute',
            content: '""',
            width: '30%',
            zIndex: 1,
            top: 0,
            left: '5%',
            height: '100%',
            backgroundSize: '18px 18px',
            backgroundImage: `radial-gradient(${alpha(
              theme.palette.primary.dark,
              0.4
            )} 20%, transparent 20%)`,
            opacity: 0.2,
          },
        }}
      >
        <Box position={'relative'} zIndex={3}>
          <Hero />
        </Box>
      </Box>

      <Container paddingY={'0 !important'}>
        <Box mt={4}>
          <Typography gutterBottom variant="h6" color={theme.logo.orange} fontWeight={600}>
            Students from ALL Napa Middle & High Schools are welcome to join!
          </Typography>
    <Box width={1}>
          <Box
    maxWidth={1}
    width={418}
            component={'img'}
            src={NicaLogo}
            alt="NICA: National Interscolastic Cycling Association logo"
          ></Box>
    </Box>
        </Box>

        {/* BUT WHAT THE*/}
        <Box mt={4}>
          <Typography
            component="p"
            variant="h6"
            gutterBottom
            sx={{ fontWeight: 700 }}
          >But, what the heck is a "Rebob"?
          </Typography>

          <Typography gutterBottom color={'text.secondary'} variant="body1">
            The Rebob is a local "urban legend", this one pertaining to a
            certain flying monkey of the western Napa Hills, the Rebob. The
            legend has been around for MANY, MANY, MANY years–tails of Partrick
            Road and the Flying Monkeys have floated around the valley and WAY
            beyond—like to TV, the internet and more!
          </Typography>

          <Typography
            gutterBottom
            variant="body1"
            color={'text.secondary'}
            pt={1}
          >Give it a try, Google "Rebobs"...
          </Typography>

          <Typography
            gutterBottom
            variant="body1"
            color={'text.secondary'}
            pt={1}
          >
            Our Team pounced upon the opportunity to have this wondrous animal
            as our official Team Mascot and spirit animal. We worked with Kelly
            Doran, the cartoonist for The Napa Valley Register and originator of
            the logo and asked if he would be open to a team of 6-12 grade Napa
            Valley Students who rode and raced mountain bikes could update his
            logo a bit to better suit our sport— he enthusiastically agreed and
            we were "off to the races"! It's an incredible journey to see folks
            from far and wide learn about our Team and Valley and we look
            forward to even more CAWESOMENESS!
          </Typography>

          <Box
            display="flex"
            flexWrap={'wrap'}
            alignItems={'center'}
            marginTop={1}
          >
            <Box marginTop={1} marginRight={2}>
              <Button
                variant={'contained'}
                color="primary"
                target="blank"
                component={'a'}
                href="https://exemplore.com/paranormal/Rebob-The-Flying-Monkeys-of-Napa-Valley"
                size="small"
              >
                Rebob History
              </Button>
            </Box>

            <Box marginTop={1} marginRight={2}>
              <Button
                variant={'outlined'}
                color="primary"
                target="blank"
                component={'a'}
                href="https://www.facebook.com/groups/42782101225/?mibextid=6NoCDW"
                size="small"
              >
                Napa Rebob Trackers
              </Button>
            </Box>
          </Box>
        </Box>

        {/* NICA VISION*/}
        <Box mt={4}>
          <Typography
            component="p"
            variant="h6"
            gutterBottom
            sx={{ fontWeight: 700 }}
          >
            NICA Vision
          </Typography>

          <Typography variant="body1" color={'text.secondary'}>
            NICA sees a future where every American youth has the opportunity to
            build strong body, mind and character through interscholastic
            cycling.
          </Typography>
          <Typography variant="body1" color={'text.secondary'}>
            To this end, NICA will continue to work diligently to:
          </Typography>

    <Box mb={4}>
          <List
            dense
            sx={{
              color: 'text.secondary',
              bgcolor: 'background.paper',
              listStyleType: 'disc',
              ml: 4,
            }}
          >
            <ListItem disablePadding sx={{ display: 'list-item' }}>
              <ListItemText primary="Provide comprehensive Coaches Training and Licensing program to establish and maintain national standards and best practices;" />
            </ListItem>
            <ListItem disablePadding sx={{ display: 'list-item' }}>
              <ListItemText primary="Promote the sport of mountain biking and the benefits of mountain biking as a healthy, low impact, outdoor recreational lifestyle;" />
            </ListItem>

            <ListItem disablePadding sx={{ display: 'list-item' }}>
              <ListItemText primary="Provide national leadership and governance through comprehensive policies, rules and guidelines to establish fair rules of play and codes of conduct;" />
            </ListItem>

            <ListItem disablePadding sx={{ display: 'list-item' }}>
              <ListItemText primary="Provide comprehensive Coaches Training and Licensing program to establish and maintain national standards and best practices;" />
            </ListItem>

            <ListItem disablePadding sx={{ display: 'list-item' }}>
              <ListItemText primary="Provide comprehensive risk management guidelines for mountain bike programming to establish and maintain national standards and best practices;" />
            </ListItem>

            <ListItem disablePadding sx={{ display: 'list-item' }}>
              <ListItemText primary="Provide technical assistance and support for League formation, team formation, races, camps and special events;" />
            </ListItem>

            <ListItem disablePadding sx={{ display: 'list-item' }}>
              <ListItemText primary="Provide successful models of League development, sustainable fiscal growth, and corporate and individual donor development; " />
            </ListItem>

            <ListItem disablePadding sx={{ display: 'list-item' }}>
              <ListItemText primary="and Advocate for the environmental conservation of natural areas and parklands, mountain bike trail access, and the development of sustainable trail systems." />
            </ListItem>
          </List>
    </Box>
        </Box>
      </Container>
    </Main>
  )
}

export default AboutView
