import React from 'react';
import { useForm } from "react-hook-form";
import Input from '../../components/Ui/Input'
import Button from '../../components/Ui/Button'
import styled, {useTheme} from "styled-components/macro";
import { AiOutlineMail, AiOutlineLock, AiOutlineUser } from "react-icons/ai";
import { useHistory } from 'react-router-dom';


export default (props) => {
  let history = useHistory();
  const { register, handleSubmit } = useForm();
  const [values, setValues] = React.useState({
    email: '',
  });

  const onSubmit = (data) =>{
    history.push('/mensagem-enviada')
  }

  const setValue = (key, value) =>{
    setValues({
      ...values,
      [key]:value
    })
  }

  return(
    <Container>
      <Input
        label='seu e-mail de cadastro'
        value={values.email}
        onChange={(value) => setValue('email', value)}
        iconLeft
        Icon={<AiOutlineMail />}
        ml='20px'
      />
      <Button mt='lg' bg= 'secondary' shadow='secondary' onClick={onSubmit}>
        Recuperar senha
      </Button>
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  padding: 20px 10px 20px;
`
