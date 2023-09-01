import React from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

import Container from 'components/Container'
import Main from 'layouts/Main'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'


/*import {Hero} from './components'*/

const IndexView = () => {
  return (
    <Main>
      <Box
        sx={{ overflow: 'hidden !important' }}
        minHeight={'calc(100vh - 247px)'}
      >
        <Container paddingTop={'0 !important'}>
          <Box sx={{ maxWidth: '80%' }}>
            <Typography gutterBottom variant="body1" color={'text.secondary'}>
              Napa Valley Composite Cycling Team is a NICA affiliated, middle
              and high-school age (6-12 grade) mountain bike team. Whether you
              are a beginner, or have been racing before, our team would love to
              have you join us as we compete against highschools from around
              California.
            </Typography>
            <Box marginTop={4}>
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
                legend has been around for MANY, MANY, MANY years–tails of
                Partrick Road and the Flying Monkeys have floated around the
                valley and WAY beyond---like to TV, the internet and more!
              </Typography>
            </Box>
            <Box marginTop={2}>
              <Typography gutterBottom variant="body1" color={'text.secondary'}>
                Give it a try, Google "Rebobs"...
              </Typography>
            </Box>
            <Box marginTop={2}>
              <Typography gutterBottom variant="body1" color={'text.secondary'}>
                Our Team pounced upon the opportunity to have this wondrous
                animal as our official Team Mascot and spirit animal. We worked
                with Kelly Doran, the cartoonist for The Napa Valley Register
                and originator of the logo and asked if he would be open to a
                team of 6-12 grade Napa Valley Students who rode and raced
                mountain bikes could update his logo a bit to better suit our
                sport— he enthusiastically agreed and we were "off to the
                races"! It's an incredible journey to see folks from far and
                wide learn about our Team and Valley and we look forward to even
                more CAWESOMENESS!
              </Typography>
            </Box>

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

          <Box marginTop={4}>
            <Typography
              component="p"
              variant="h6"
              gutterBottom
              sx={{ fontWeight: 700 }}
            >
              NICA Vision
            </Typography>

            <Typography variant="body1" color={'text.secondary'}>
              NICA sees a future where every American youth has the opportunity
              to build strong body, mind and character through interscholastic
              cycling.
            </Typography>
            <Typography variant="body1" color={'text.secondary'}>
              To this end, NICA will continue to work diligently to:
            </Typography>

            <List
              dense
              sx={{
                width: '80%',
                bgcolor: 'background.paper',
                listStyleType: 'disc',
                ml: 4,
              }}
            >
              <ListItem sx={{ display: 'list-item' }}>
                <ListItemText primary="Provide comprehensive Coaches Training and Licensing program to establish and maintain national standards and best practices;" />
              </ListItem>
              <ListItem sx={{ display: 'list-item' }}>
                <ListItemText primary="Promote the sport of mountain biking and the benefits of mountain biking as a healthy, low impact, outdoor recreational lifestyle;" />
              </ListItem>
              <ListItem sx={{ display: 'list-item' }}>
                <ListItemText primary="Provide national leadership and governance through comprehensive policies, rules and guidelines to establish fair rules of play and codes of conduct;" />
              </ListItem>
              <ListItem sx={{ display: 'list-item' }}>
                <ListItemText primary="Provide comprehensive Coaches Training and Licensing program to establish and maintain national standards and best practices;" />
              </ListItem>
              <ListItem sx={{ display: 'list-item' }}>
                <ListItemText primary="Provide comprehensive risk management guidelines for mountain bike programming to establish and maintain national standards and best practices;" />
              </ListItem>
              <ListItem sx={{ display: 'list-item' }}>
                <ListItemText primary="Provide technical assistance and support for League formation, team formation, races, camps and special events;" />
              </ListItem>
              <ListItem sx={{ display: 'list-item' }}>
                <ListItemText primary="Provide successful models of League development, sustainable fiscal growth, and corporate and individual donor development; " />
              </ListItem>
              <ListItem sx={{ display: 'list-item' }}>
                <ListItemText primary="and Advocate for the environmental conservation of natural areas and parklands, mountain bike trail access, and the development of sustainable trail systems." />
              </ListItem>
            </List>
          </Box>
        </Container>
      </Box>
    </Main>
  )
}

export default IndexView
