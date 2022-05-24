import React from "react";
import { useForm } from "react-hook-form";
import Input from "../../components/Ui/Input";
import Button from "../../components/Ui/Button";
import * as Style from "./Style";
import { AiOutlineMail, AiOutlineLock, AiOutlineUser } from "react-icons/ai";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

let schema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().required().min(8),
  passwordConfirmation: yup
    .string()
    .required()
    .oneOf([yup.ref("password"), null]),
});

export default (props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = (data) => console.log(data);

  return (
    <Style.Container>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          name="name"
          label="nome"
          type="text"
          iconLeft
          Icon={<AiOutlineUser />}
          ml="20px"
          ref={register("name")}
        />
        {errors.name && errors.name.type === "required" && (
          <Style.ErrorMessage>Campo obrigatório!</Style.ErrorMessage>
        )}
        <Input
          name="email"
          label="e-mail"
          type="email"
          iconLeft
          Icon={<AiOutlineMail />}
          ml="20px"
          ref={register("email")}
        />
        {errors.email && errors.email.type === "required" && (
          <Style.ErrorMessage>Campo obrigatório!</Style.ErrorMessage>
        )}
        {errors.email && errors.email.type === "email" && (
          <Style.ErrorMessage>Formato de e-mail inválido!</Style.ErrorMessage>
        )}
        <Input
          name="password"
          label="senha"
          type="password"
          iconLeft
          Icon={<AiOutlineLock />}
          ml="20px"
          ref={register("password")}
        />
        {errors.password && errors.password.type === "required" && (
          <Style.ErrorMessage>Campo obrigatório!</Style.ErrorMessage>
        )}
        {errors.password && errors.password.type === "min" && (
          <Style.ErrorMessage>
            Senha muito curta - deve ter no mínimo 8 caracteres.
          </Style.ErrorMessage>
        )}
        <Input
          name="passwordConfirmation"
          label="repetir senha"
          type="password"
          iconLeft
          Icon={<AiOutlineLock />}
          ml="20px"
          ref={register("passwordConfirmation")}
        />
        {errors.passwordConfirmation &&
          errors.passwordConfirmation.type === "required" && (
            <Style.ErrorMessage>Campo obrigatório!</Style.ErrorMessage>
          )}
        {errors.passwordConfirmation &&
          errors.passwordConfirmation.type === "oneOf" && (
            <Style.ErrorMessage>Senhas diferentes!</Style.ErrorMessage>
          )}
        <Button bg="secondary" shadow="secondary" type="submit" value="Submit">
          entrar
        </Button>
      </form>
    </Style.Container>
  );
};
