import React from "react";
import Box from '@mui/material/Box';
import Public from "../../components/layout/Public";
import Form from '../../components/Auth/Forgot'
import Logo from '../../components/Logo'
import * as Style from './style';


export default function PageForgot (){
  const classes = Style.useStyles()

  return(
    <Public>
      <div className={classes.logoContainer}>
        <Logo />
      </div>
      <Box className={classes.container}>
        <div className={classes.paper}>
          <Form />
          <Style.ButtonSecondary size="large" color="secondary" variant="contained">
            Recuperar senha
          </Style.ButtonSecondary>
        </div>
      </Box>
    </Public>
  )
}
