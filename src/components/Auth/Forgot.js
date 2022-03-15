import React from 'react';
import { useForm } from "react-hook-form";

export default () => {
  const { register, handleSubmit } = useForm();
  const [values, setValues] = React.useState({
    email: '',
  });

  const onSubmit = (data) =>{
    console.log(data);
  }

  return(
    <div>
      forgot
    </div>
  )
}
