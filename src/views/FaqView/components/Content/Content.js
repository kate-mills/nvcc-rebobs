import React from 'react'
import PropTypes from 'prop-types'
import { useTheme } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import Typography from '@mui/material/Typography'
import AccordionDetails from '@mui/material/AccordionDetails'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import {commonQuestions } from 'utils/common-questions'

const FaqGroupItem = ({ title, items }) => {
  const theme = useTheme()
  return (
    <Box>
      <Box marginBottom={2}>
        <Typography fontWeight={700} variant={'h5'}>
          {title}
        </Typography>
      </Box>
      <Box marginBottom={6}>
        {items.map((item, i) => (
          <Box
            component={Accordion}
            key={i}
            padding={1}
            marginBottom={i === item.length - 1 ? 0 : 2}
            borderRadius={`${theme.spacing(1)} !important`}
            sx={{
              '&::before': {
                display: 'none',
              },
            }}
          >
            <Box
              component={AccordionSummary}
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id={`panel1a-header--${i}`}
            >
              <Typography fontWeight={600}>{item.question}</Typography>
            </Box>
            <AccordionDetails>
              <Typography color="text.secondary">{item.text}</Typography>
            </AccordionDetails>
          </Box>
        ))}
      </Box>
    </Box>
  )
}

FaqGroupItem.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.array.isRequired,
}

const Content = () => {
  return (
    <Box>
      <Box marginBottom={6}>
        {commonQuestions.map(group => {
          return (
            <FaqGroupItem
              key={group.title}
              title={group.title}
              items={group.items}
            />
          )
        })}
      </Box>
    </Box>
  )
}

export default Content
