import { responsiveFontSizes } from '@mui/material'
import { createTheme } from '@mui/material/styles'
import shadows from './shadows'
import { light, dark } from './palette'

const getTheme = (mode = 'light', themeToggler) =>
  responsiveFontSizes(
    createTheme({
      logo: {
        yellow: '#f2cc11', /*#f8ca10*/
        orange: ' #f26602',
        red: ' #e60202',
        gray: ' #696969',
        purple: '#551a8b',
        darkGray: '#292929',
      },
      palette: mode === 'light' ? light : dark,
      shadows: shadows(mode),
      typography: {
        fontFamily: '"Inter Tight Variable", sans-serif',
        button: {
          textTransform: 'none',
          fontWeight: 'medium',
        },
      },
      zIndex: {
        appBar: 1200,
        drawer: 1300,
      },
      components: {
        MuiButton: {
          styleOverrides: {
            root: {
              fontWeight: 400,
              borderRadius: 5,
              paddingTop: 10,
              paddingBottom: 10,
            },
            containedSecondary: mode === 'light' ? { color: 'white' } : {},
          },
        },
        MuiInputBase: {
          styleOverrides: {
            root: {
              borderRadius: 5,
            },
          },
        },
        MuiOutlinedInput: {
          styleOverrides: {
            root: {
              borderRadius: 5,
            },
            input: {
              borderRadius: 5,
            },
          },
        },
        MuiCard: {
          styleOverrides: {
            root: {
              borderRadius: 8,
            },
          },
        },
      },
      themeToggler,
    })
  )

export default getTheme
