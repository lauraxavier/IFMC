import React from "react";
import LogoImg from '../../components/assets/img/logo.png'

import { makeStyles } from '@mui/styles';


const useStyles = makeStyles((theme) => ({

  logoContainer:{
    width:'157px',
    height: '58px',
    marginBottom: '30px'
  },
  logo:{
    width:'100%',
    height:'100%',
  }
}))


export default function Logo (){

  const classes = useStyles()


  return(
    <div className={classes.logoContainer}>
      <img src={LogoImg} alt='imagem de cofre porquinho'  className={classes.logo}/>
    </div>
  )
}
