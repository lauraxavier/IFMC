import React from 'react';
import check from '../../components/assets/img/check.png'
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({

container:{
    width:'100%',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems:'center'
  },
  img:{
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
  },
titleSuccess:{
    color: '#ffffff',
    marginTop: theme.spacing(3),
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
textSuccess:{
    color: '#ffffff',
    marginTop: theme.spacing(3),
    textAlign: 'center',
    fontSize: '15px',

  },

}))


export default function Logo (){

  const classes = useStyles()


  return(
    <div className={classes.container}>
      <div className={classes.img}>
        <img alt='imagem de check' src={check} />
      </div>
      <div className={classes.titleSuccess}>
        <h6>E-mail enviado</h6>
      </div>
    <div className={classes.textSuccess}>
      <p>Acesse seu e-mail e siga as orientações para recuperar a sua senha</p>
    </div>
    </div>
  )
}
