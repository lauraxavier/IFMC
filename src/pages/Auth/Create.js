import React from "react";
import Box from '@mui/material/Box';
import Public from "../../components/layout/Public";
import Form from '../../components/Auth/Create'
import Logo from '../../components/Logo'
import * as Style from './style';


export default function PageLogCreate (){
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
            Criar Conta
          </Style.ButtonSecondary>
        </div>
      </Box>
      <div className={classes.linkContainer}>
        <Style.Link to="/">Entrar</Style.Link>
      </div>
      <div className={classes.linkContainer}>
        <Style.Link to="recuper-senha" className={classes.recoverLink}>
          Perdeu sua senha? <br />
          Clique aqui para recuperar
        </Style.Link>
      </div>
    </Public>
  )
}
