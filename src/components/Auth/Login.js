import React from 'react';
import * as Style from './style';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import IconButton from '@mui/material/IconButton';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import OutlinedInput from '@mui/material/OutlinedInput';
import { useForm, Controller } from "react-hook-form";


export default function Login(...props){
  const { control, handleSubmit } = useForm();

  const [show, setShow] = React.useState({
    showPassword: false,
  });

  const handleClickShowPassword = (props) => {
    setShow({
      showPassword: !show.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const classes = Style.useStyles()

  return(
    <form onSubmit={handleSubmit(props.onSubmit)}>
      <Controller
        name='email'
        control={control}
        defaultValue=''
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <FormControl color='white'>
            <Style.Label htmlFor="outlined-adornment-password">
              <MailOutlineIcon color='white' sx={{ mr: 2,  }} />e-mail
            </Style.Label>
            <OutlinedInput
              name='email'
              sx={{ input: { color: '#ffffff'}}}
              classes={classes}
              type={'text'}
              color="white"
              value={props.values.email}
              onChange={props.onChange}
              label="email email"
              endAdornment={
                <Style.Float />
              }
              error={!!error}
              helperText={error ? error.message : null}
              type='email'
              autoComplete='new-password'
            />
          </FormControl>
        )}
        rules={{ required: 'First name required' }}
      />
      <FormControl color='white'  >
        <Style.Label htmlFor="outlined-adornment-password"><LockOpenIcon color='white' sx={{ mr: 2,  }} />senha</Style.Label>
        <OutlinedInput
          name='password'
          sx={{ input: { color: '#ffffff'}}}
          classes={classes}
          type={show.showPassword ? 'text' : 'password'}
          color="white"
          value={props.values.password}
          onChange={props.onChange}
          label="senha senha"
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
                 color='white'
              >
                {show.showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
        />
      </FormControl>
    </form>
  )
}
