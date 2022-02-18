import React from "react";
import { Link } from "react-router-dom";

export default function Public (props){
  return(
    <div>
      <Link to='/'>Entrar</Link>
      <Link to='/create'>Criar Conta</Link>
      <Link to='/recover-password'>Recuperar senha</Link>
      {props.children}

    </div>
  )
}
