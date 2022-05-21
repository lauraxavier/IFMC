import React from 'react';
import { useForm } from "react-hook-form";
import Input from '../../components/Ui/Input'
import Button from '../../components/Ui/Button'
import * as Style from './Style'
import { AiOutlineMail, AiOutlineLock, AiOutlineUser } from "react-icons/ai";
import { useHistory } from 'react-router-dom';


export default (props) => {
  let history = useHistory();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) =>{
    console.log(data);
    history.push('/mensagem-enviada')
  }

  return(
    <Style.Container>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          name="email"
          label="e-mail"
          type="email"
          iconLeft
          Icon={<AiOutlineMail />}
          ml="20px"
          ref={register("email", {required: true})}
        />
        {errors.email && errors.email.type === "required" && <Style.ErrorMessage>Campo obrigatório!</Style.ErrorMessage>}
        <Button
          bg="secondary"
          shadow="secondary"
          type="submit"
          value="Submit"
        >
          entrar
        </Button>
      </form>
    </Style.Container>
  )
}
