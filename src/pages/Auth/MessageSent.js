import React from "react";
import styled from "styled-components/macro";
import Public from "../../components/layout/Public";
import Form from '../../components/Auth/MessageSent'
import Button from '../../components/Ui/Button'
import Logo from '../../components/assets/img/logo.png'
import Card, {CardStyle} from '../../components/Ui/Card'
import { useHistory } from 'react-router-dom';


export default () => {
  let history = useHistory();

  const onSubmit = (data) =>{
    history.push('/')
  }

  return(
    <Public>
      <LogoContainer>
        <img src={Logo} />
      </LogoContainer>
      <CardContainer>
        <Card bg='rgba(255,255,255,0.01)' shadow='primary' cardSize='sm'>
          <Form />
        </Card>
      </CardContainer>
      <ButtonContainer>
        <Button mt='lg' bg='secondary' shadow='secondary' onClick={onSubmit}>
          voltar para login
        </Button>
      </ButtonContainer>
    </Public>
  )
}

const LogoContainer = styled.div`
  width: 100%;
  justify-content: center;
  display: flex;
  margin-bottom: 40px;
`
const CardContainer = styled.div`
  width: 100%;
  align-self: flex-start;
  justify-content: center;
  display: flex;
`
const ButtonContainer = styled.div`
  display: flex;
  width: 295px;
`
