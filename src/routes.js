import React from 'react';
import {Switch, Route, BrowserRouter as Router} from "react-router-dom";

import CreateAccount from './pages/Auth/Create.js';
import Login from './pages/Auth/Login.js';
import ForgotPassword from './pages/Auth/Forgot.js';
import MessageSent from './pages/Auth/MessageSent.js';



export default function mainRoutes(){
  return (
    <Router>
      <Switch>
      <Route component = { Login }  path="/" exact/>
        <Route component = { CreateAccount }  path="/criar-conta" />
        <Route component = { ForgotPassword }  path="/recuper-senha" />
        <Route component = { MessageSent }  path="/mensagem-enviada" />
      </Switch>
    </Router>

  )
}
