import React from 'react';
import * as Style from './style';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import IconButton from '@mui/material/IconButton';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import OutlinedInput from '@mui/material/OutlinedInput';
import { useForm } from "react-hook-form";

export default function Create(){

  const classes = Style.useStyles()

  const { register, handleSubmit } = useForm();

  const [values, setValues] = React.useState({
    name: '',
    email: '',
    password: '',
    repeatPassword: '',
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const onSubmit = (data) =>{
    console.log(data);
  }

  return(
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormControl color='white'  >
        <Style.Label htmlFor="outlined-adornment-password"><PermIdentityIcon color='white' sx={{ mr: 2,  }} />nome</Style.Label>
        <OutlinedInput
          name= 'name'
          sx={{ input: { color: '#ffffff'}}}
          classes={classes}
          type={'text'}
          color="white"
          value={values.name}
          onChange={handleChange('name')}
          label="name name"
          endAdornment={
            <Style.Float />
          }
          autoComplete='new-password'
        />
      </FormControl>
      <FormControl color='white'  >
        <Style.Label htmlFor="outlined-adornment-password"><MailOutlineIcon color='white' sx={{ mr: 2,  }} />email</Style.Label>
        <OutlinedInput
          name= 'email'
          sx={{ input: { color: '#ffffff'}}}
          classes={classes}
          type={'text'}
          color="white"
          value={values.email}
          onChange={handleChange('email')}
          label="email email"
          endAdornment={
            <Style.Float />
          }
        />
      </FormControl>
      <FormControl color='white'  >
        <Style.Label htmlFor="outlined-adornment-password"><LockOpenIcon color='white' sx={{ mr: 2,  }} />senha</Style.Label>
        <OutlinedInput
          name= 'password'
          sx={{ input: { color: '#ffffff'}}}
          classes={classes}
          type={values.showPassword ? 'text' : 'password'}
          color="white"
          value={values.password}
          onChange={handleChange('password')}
          label="email email"
          endAdornment={
            <InputAdornment>
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
                color= 'white'
              >
                {values.showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
        />
      </FormControl>

      <FormControl color='white'>
        <Style.Label htmlFor="outlined-adornment-password"><LockOpenIcon color='white' sx={{ mr: 2,  }} />repitir senha</Style.Label>
        <OutlinedInput
          name= 'repetir_senha'
          sx={{ input: { color: '#ffffff' } }}
          classes={classes}
          type={values.showPassword ? 'text' : 'password'}
          value={values.repeatPassword}
          onChange={handleChange('repeatPassword')}
          MuiOutlinedInput = {classes.root}
          label="repetir senha senha"
          endAdornment={
            <InputAdornment>
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
                color= 'white'
              >
                {values.showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
        />
      </FormControl>

    </form>
  )
}
