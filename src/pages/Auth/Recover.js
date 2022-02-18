import React from "react";
import { Link } from "react-router-dom";
import Box from '@mui/material/Box';
import Public from "../../components/layout/Public";
import RecoverMensage from '../../components/Auth/Recover'
import Logo from '../../components/Logo'
import * as Style from './style';


export default function Recover (){
  const classes = Style.useStyles()

  return(
    <Public>
      <div className={classes.logoContainer}>
        <Logo />
      </div>
      <Box className={classes.container}>
        <div className={classes.paper}>
          <RecoverMensage />
        </div>
      </Box>
      <Style.ButtonSecondary size="large" color="secondary" variant="contained" component={Link} to="/">
        Voltar para Login
      </Style.ButtonSecondary>
    </Public>
  )
}
