import React from 'react';
import { useForm } from "react-hook-form";

export default () => {
  const { register, handleSubmit } = useForm();
  const [values, setValues] = React.useState({
    name: '',
    email: '',
    password: '',
    repeatPassword: '',
  });

  const onSubmit = (data) =>{
    console.log(data);
  }

  return(
    <div>
      Formcreate
    </div>
  )
}
