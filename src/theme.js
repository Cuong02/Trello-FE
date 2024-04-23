import { createTheme } from '@mui/material/styles'

let theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      //main: '#556cd6'
    },
    secondary: {
      //main: '#19857b'
    }
  }
})

theme = createTheme(theme, {
  palette: {
    info: {
      main: theme.palette.secondary.main
    }
  }
})

export default theme