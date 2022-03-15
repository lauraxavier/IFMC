import React from 'react';
import Routes from './routes';
import theme from './theme';
import { ThemeProvider } from 'styled-components'

export default function App(){
  return (
    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>
  )
}
