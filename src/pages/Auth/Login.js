import React from "react";
import Box from '@mui/material/Box';
import Public from "../../components/layout/Public";
import Form from '../../components/Auth/Login'
import Logo from '../../components/Logo'
import * as Style from './style';

export default function PageLogin (...props){

  const [values, setValues] = React.useState({
    email: '',
    password: '',
    showPassword: false,
  });

  const onChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const onSubmit = (data) =>{
    console.log(data);
  }

  const classes = Style.useStyles()

  return(
    <Public>
      <div className={classes.logoContainer}>
        <Logo />
      </div>
      <Box className={classes.container}>
        <div className={classes.paper}>
          <Form onSubmit={onSubmit} onChange={onChange} />
          <Style.ButtonSecondary type="submit" onClick={onSubmit} size="large" color="secondary" variant="contained">
            Entrar
          </Style.ButtonSecondary>
        </div>
      </Box>
      <div className={classes.linkContainer}>
        <Style.Link to="criar-conta">Criar Conta</Style.Link>
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
