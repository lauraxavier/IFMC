import { createTheme } from '@mui/material/styles';


const theme = createTheme({
  palette: {
    primary: {
      main: '#381AAE',
    },
    secondary: {
      main: '#F71B6C',
    },
    success: {
      main: '#00D7B0',
    },
    white: {
      main: '#ffffff',
    },
  },
  typography: {
    fontFamily: [
      'Karla'
    ].join(','),
  },
});

export default theme ;
