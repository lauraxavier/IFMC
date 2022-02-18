import React from 'react';
import * as Style from './style';
import FormControl from '@mui/material/FormControl';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import OutlinedInput from '@mui/material/OutlinedInput';

export default function Forgot(){
  const classes = Style.useStyles()

  const [values, setValues] = React.useState({
    email: '',
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  return(
    <div>
      <FormControl color='white'  >
        <Style.Label htmlFor="outlined-adornment-password"><MailOutlineIcon color='white' sx={{ mr: 2,  }} />email</Style.Label>
        <OutlinedInput
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
    </div>
  )
}
