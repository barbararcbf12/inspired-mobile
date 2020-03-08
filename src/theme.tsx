import { createMuiTheme } from '@material-ui/core/styles'

export const customTheme = {
  spacing: {
    unit: 4,
    gutter: 3,
    cardPadding: 2,
  },
} as const

const palette = {
  primary: {
    light: 'hsla(0, 0%, 15%)',
    main: 'hsla(0, 0%, 0%)',
    dark: 'hsla(0, 0%, 0%)',
    contrastText: '#FFFFFF',
  },
}

export const theme = createMuiTheme({
  spacing: customTheme.spacing.unit,
  palette: { ...palette },
  shape: {
    borderRadius: 4,
  },
  typography: {
    fontFamily:
      'system-ui,-apple-system,"Segoe UI",Roboto,"Noto Sans",Ubuntu,Cantarell,"Helvetica Neue"',
    fontSize: 14,
    fontWeightBold: 600,
    h1: {
        fontSize: '2rem',
    }
  },
  overrides: {
    MuiInput: {
        underline:{
            borderBottom: '2px solid transparent',
            '&:hover:not($disabled):before': {
                borderBottom: '2px solid transparent',
            },
            '&::before': {
                borderBottom: '2px solid transparent',
            },
            '&::after': {
                borderBottom: '2px solid transparent',
            }
        }
    },
    MuiIconButton:{
        colorSecondary: {
            color: 'transparent'
        }
    }
  },
})

export const Z_INDEX = {
  OVERLAY: 100,
  OVERLAY_CONTENT: 101,
} as const
