/* eslint-disable react/no-unescaped-entities */
import React, { useState, useEffect } from 'react'
import { useFormik } from 'formik'
import * as yup from 'yup'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import MenuItem from '@mui/material/MenuItem'
import Card from '@mui/material/Card'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import Typography from '@mui/material/Typography'
import { useTheme } from '@mui/material/styles'
import bgImg from 'images/mountain-bike-team.webp'

import { handleSubmitContactForm } from 'utils/form-helper'

import Container from 'components/Container'
import 'global-styles/overrides.css'

const activityOptions = ['Join', 'Volunteer', 'Sponsor', 'Donate', 'Other']

const validationSchema = yup.object({
  fullName: yup
    .string()
    .trim()
    .min(2, 'Please enter a valid name')
    .max(50, 'Please enter a valid name')
    .required('Please specify your name'),
  email: yup
    .string()
    .trim()
    .email('Please enter a valid email address')
    .required('Email is required.'),
  interest: yup
    .string()
    .oneOf(activityOptions, 'Invalid Selection')
    .required('Please choose your interest'),
  more: yup.string().trim(),
})

const Hero = () => {
  const theme = useTheme()

  const [formState, setFormState] = useState('')
  const [userMsg, setUserMsg] = useState('')
  const [btnText, setBtnText] = useState('Send It!')
  const [startTimer, setStartTimer ] = useState(null)

  useEffect(() => {
    setUserMsg(prevMsg => {
      return formState ? formState : prevMsg
    })
  }, [formState])

  useEffect(() => {
    const timer = setTimeout(() => {
      setBtnText('Send It!')
    }, 3000)
    return () => clearTimeout(timer)
  }, [startTimer])

  const GridItemHeadlineBlock = () => (
    <Box marginBottom={4} data-aos="fade-up">
      <Typography
        variant="h3"
        gutterBottom
        sx={{
          fontWeight: 900,
          color: 'common.white',
        }}
      >
    Napa Valley Composite Cycling Team
      </Typography>
      <Typography
        variant="h6"
        component="p"
        color="text.primary"
        sx={{
          fontWeight: 500,
          color: 'common.white',
        }}
      >Whether you are a beginner, or have been racing before, our team would
        love to have you join us as we compete against highschools from around
        California.
      </Typography>
    </Box>
  )

  const GridItemFormBlock = () => {
    const initialValues = {
      fullName: '',
      email: '',
      activity: '',
      interest: '',
      more: '',
    }

    const formik = useFormik({
      initialValues,
      validationSchema: validationSchema,
      onSubmit: (values, actions) => {
        try {
          setFormState('init')
          actions.setSubmitting(true)
          handleSubmitContactForm(values, { ...actions })
        } catch (err) {
          setBtnText('Error!')
          setFormState(
            'We apologize, but there seems to be an issue. Please try again later.'
          )
          console.log(err)
        } finally {
          setBtnText('Success!')
          setStartTimer(true)
          setFormState(
            `Thank you, ${values.fullName}! One of our coaches will be in touch shortly.`
          )
        }
      },
    })

    const isDisabled =
      !formik.values.fullName || !formik.values.email || !formik.values.interest

    return (
      <Box padding={{ xs: 3, sm: 6 }} width={1} component={Card} boxShadow={1}>
        <form
          onSubmit={event => {
            event.preventDefault()
            formik.handleSubmit()
          }}
          id="contact-form"
          autoComplete="off"
          name={'contact-form'}
          data-netlify={'true'}
          method="POST"
        >
          <input type="hidden" name="form-name" value="contact-form" />
          <Box display="flex" flexDirection={'column'}>
            <Box marginBottom={4}>
              <TextField
                sx={{ height: 54 }}
                label="Full name"
                variant="outlined"
                color="primary"
                size="medium"
                id="fullName"
                name="fullName"
                fullWidth
                value={formik.values.fullName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.fullName && Boolean(formik.errors.fullName)
                }
                helperText={formik.touched.fullName && formik.errors.fullName}
              />
            </Box>
            <Box marginBottom={4}>
              <TextField
                sx={{ height: 54 }}
                id="email"
                label="Email"
                type="email"
                variant="outlined"
                color="primary"
                size="medium"
                name="email"
                fullWidth
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
              />
            </Box>

            <Box marginBottom={4}>
              <TextField
                select
                id="interest"
                sx={{ height: 54 }}
                label="I want to"
                placeholder="I want to"
                variant="outlined"
                color="primary"
                size="medium"
                name="interest"
                fullWidth
                value={formik.values.interest}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.interest && Boolean(formik.errors.interest)
                }
                helperText={formik.touched.interest && formik.errors.interest}
              >
                {activityOptions.map(option => (
                  <MenuItem key={option} value={option}>
                    {option}
                  </MenuItem>
                ))}
              </TextField>
            </Box>

            <Box marginBottom={4}>
              <TextField
                sx={{ mb: 4 }}
                color="primary"
                id="more"
                name="more"
                label="Tell Us More"
                multiline
                fullWidth
                minRows={2}
                maxRows={4}
                value={formik.values.more}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              <Box />
              <Button
                id="submit-contact-form"
                sx={{
                  height: 54,
                  cursor: isDisabled ? 'not-allowed' : 'unset',
                }}
                variant="contained"
                color="primary"
                size="medium"
                fullWidth
                type="submit"
              >
                {btnText}
              </Button>
            </Box>
            <Box marginBottom={4} marginX={{ xs: -3, sm: -6 }}>
              <Divider />
            </Box>
            <Box sx={{ minHeight: 20.016 }}>
              <Typography
                component="p"
                variant="body2"
                align="left"
                sx={{ minHeight: '20.016' }}
              >
                {userMsg}
              </Typography>
            </Box>
          </Box>
        </form>
      </Box>
    )
  }

  return (
    <Box
      minHeight={300}
      height={'auto'}
      position={'relative'}
      sx={{
        marginTop: -13,
        paddingTop: 13,
        backgroundColor: theme.palette.alternate.main,
        background: `url(${bgImg}) no-repeat center`,
        backgroundSize: 'cover',
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          width: 1,
          height: 1,
          backgroundColor: theme.palette.primary.main,
          backgroundImage: `linear-gradient(315deg, ${theme.palette.secondary.dark} 0%, #000000 74%)`,
          opacity: '0.8',
          zIndex: 1,
        }}
      />
      <Container position={'relative'} zIndex={2}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Box width={1} height="100%" display="flex" alignItems="center">
              <GridItemHeadlineBlock />
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box width={1} height="100%" display="flex" alignItems="center">
              <GridItemFormBlock />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default Hero
