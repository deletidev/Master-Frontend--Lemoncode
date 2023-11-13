import { createTheme } from '@mui/material/styles';

export const myTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#036E6E'
    },
    secondary: {
      main: '#8A5C42'
    },
    background: {
      paper: '#FBFAF9',
      default: '#FDFDFC'
    },
    info: {
      main: '#036E6E'
    },
    warning: {
      main: '#B95701'
    }
  },
  spacing: 8,
  shape: {
    borderRadius: 4
  },
  typography: {
    fontSize: 16,
    fontWeightMedium: 600,
    fontWeightBold: 800,
    fontFamily: 'Nunito Sans'
  }
});
