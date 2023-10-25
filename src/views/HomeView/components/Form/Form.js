/* eslint-disable react/no-unescaped-entities */
import React, { useState } from 'react'
import { useFormik } from 'formik'
import * as yup from 'yup'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import MenuItem from '@mui/material/MenuItem'
import Card from '@mui/material/Card'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import Typography from '@mui/material/Typography'
import { useTheme } from '@mui/material/styles'

import { handleSubmitContactForm } from 'utils/conditional-form-helper'

const activityOptions = ['Volunteer', 'Join', 'Sponsor', 'Donate', 'Other']

const grades = [
  { label: '6th', value: '6th', key: '6' },
  { label: '7th', value: '7th', key: '7' },
  { label: '8th', value: '8th', key: '8' },
  { label: '9th', value: '9th', key: '9' },
  { label: '10th', value: '10th', key: '10' },
  { label: '11th', value: '11th', key: '11' },
  { label: '12th', value: '12th', key: '12' },
  { label: 'Other', value: 'Other', key: 'other' },
]

const validationSchema = yup.object({
  fullName: yup
    .string()
    .trim()
    .min(2, 'Please enter a valid name')
    .max(50, 'Please enter a valid name')
    .required('Name is required'),
  email: yup
    .string()
    .trim()
    .email('Please enter a valid email address')
    .required('Email is required'),
  interest: yup
    .string()
    .oneOf(activityOptions, 'Invalid Selection')
    .required('Please select your interest'),
  grade: yup
    .string()
    .trim()
    .oneOf(
      [...grades].map(grade => grade.value),
      'Invalid Selection'
    ),
  more: yup
    .string()
    .trim()
    .max(400, 'Please limit your message to 400 characters'),
})

const ContactForm = () => {
  const theme = useTheme()
  const [formState, setFormState] = useState('')

  const GridItemFormBlock = () => {
    const initialValues = {
      fullName: '',
      email: '',
      interest: '',
      grade: '',
      more: '',
    }

    const formik = useFormik({
      initialValues,
      validationSchema: validationSchema,
      onSubmit: (values, actions) => {
        try {
          setFormState('init')
          actions.setSubmitting(true)
          handleSubmitContactForm(values, { ...actions})
        } catch (err) {
          setFormState(
            'We apologize, but there seems to be an issue. Please try again later.'
          )
          console.log(err)
        } finally {
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
          id="contact-form-conditional"
          name={'contact-form-conditional'}
          data-netlify={'true'}
          method="POST"
        >
          <input
            type="hidden"
            name="form-name"
            value="contact-form-conditional"
          />
          <Box
            display="flex"
            flexDirection={'column'}
            sx={{
              '& input': {
                WebkitBoxShadow: `0 0 0 100px ${theme.palette.background.formAutofill} inset !important`,
              },
            }}
          >
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

            <TextField
              select
              id="interest"
              sx={{ height: 54, mb: 4 }}
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
              error={formik.touched.interest && Boolean(formik.errors.interest)}
              helperText={formik.touched.interest && formik.errors.interest}
            >
              {activityOptions.map(option => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </TextField>
            {/*{formik.values.interest === 'Join' && ( */}
            <TextField
              sx={{
                height: 54,
                mb: 4,
                display:
                  formik.values.interest === 'Join'
                    ? 'block'
                    : 'none !important',
              }}
              select
              id="grade"
              name={'grade'}
              label="Grade"
              placeholder="Grade"
              variant="outlined"
              color="primary"
              size="medium"
              fullWidth
              value={formik.values.grade}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              required={formik.values.interest === 'Join'}
              error={
                formik.values.interest !== 'Join'
                  ? false
                  : Boolean(formik.errors.grade)
              }
              helperText={formik.touched.grade && Boolean(formik.errors.grade)}
              disabled={formik.values.interest !== 'Join'}
            >
              {grades.map(option => (
                <MenuItem key={option.key} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
            {/*)}*/}
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
                error={formik.touched.more && Boolean(formik.errors.more)}
                helperText={formik.touched.more && formik.errors.more}
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
                Send it!
              </Button>
            </Box>
            <Box marginBottom={0} marginX={{ xs: -3, sm: -6 }}>
              <Divider />
            </Box>
            <Box sx={{ pt: 1, minHeight: 28.016 }}>
              <Typography
                component="p"
                variant="body2"
                align="left"
                sx={{ minHeight: '20.016' }}
              >
                {formState}
              </Typography>
            </Box>
          </Box>
        </form>
      </Box>
    )
  }

  return <GridItemFormBlock />
}

export default ContactForm
