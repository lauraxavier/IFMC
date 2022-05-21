import React from "react";
import { useForm } from "react-hook-form";
import Input from "../../components/Ui/Input";
import Form from "../../components/Ui/Form";
import Button from "../../components/Ui/Button";
import * as Style from './Style'
import { AiOutlineMail, AiOutlineLock } from "react-icons/ai";

export default (props) => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors)

  return (
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
        <Input
          name="password"
          label="senha"
          type="password"
          iconLeft
          Icon={<AiOutlineLock />}
          ml="20px"
          ref={register("password", {required: true})}
        />
        {errors.password && errors.password.type === "required" && <Style.ErrorMessage>Campo obrigatório!</Style.ErrorMessage>}
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
  );
};
