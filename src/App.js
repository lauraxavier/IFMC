import React from 'react';
import Routes from './routes.js';
import theme from './theme/index.js';
import { ThemeProvider } from '@mui/material/styles'

export default function App(){
  return (
    <ThemeProvider  theme={theme}>
      <Routes />
    </ThemeProvider>
  )
}
