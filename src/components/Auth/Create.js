import React from 'react';
import { useForm } from "react-hook-form";
import Input from '../../components/Ui/Input'
import Button from '../../components/Ui/Button'
import styled, {useTheme} from "styled-components/macro";
import { AiOutlineMail, AiOutlineLock, AiOutlineUser } from "react-icons/ai";

export default (props) => {
  const { register, handleSubmit } = useForm();
  const [values, setValues] = React.useState({
    nome: '',
    email: '',
    password: '',
    repeatPassword: '',
  });

  const onSubmit = (data) =>{
    console.log(data);
    console.log('data');
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
        mb='sm'
        label='nome'
        value={values.nome}
        onChange={(value) => setValue('nome', value)}
        iconLeft
        Icon={<AiOutlineUser />}
        ml='20px'
        />
      <Input
        mb='sm'
        label='e-mail'
        value={values.email}
        onChange={(value) => setValue('email', value)}
        iconLeft
        Icon={<AiOutlineMail />}
        ml='20px'
      />
      <Input
        mb='sm'
        label='senha'
        type='password'
        value={values.password}
        onChange={(value) => setValue('password', value)}
        iconLeft
        Icon={<AiOutlineLock />}
        ml='20px'
      />
      <Input
        label='repetir senha'
        type='repeatPassword'
        value={values.repeatPassword}
        onChange={(value) => setValue('repeatPassword', value)}
        iconLeft
        Icon={<AiOutlineLock />}
        ml='20px'
      />
      <Button mt='lg' bg= 'secondary' shadow='secondary' onClick={onSubmit}>
        criar conta
      </Button>
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  padding: 20px 10px 20px;
`
