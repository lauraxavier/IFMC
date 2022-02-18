import { styled } from '@mui/material/styles';
import InputLabel from '@mui/material/InputLabel';
import Box from '@mui/material/Box';
import { makeStyles } from '@mui/styles';


export const useStyles = makeStyles(theme => ({
    root: {
      marginBottom: '20px',
      "& $notchedOutline": {
        border: '1px solid #ffffff50',
        borderRadius: '6px',
      },
      "&:hover $notchedOutline": {
        borderColor: "white  !important"
      },
      "&$focused $notchedOutline": {
        borderColor: "green"
      }
    },
    notchedOutline:{
      border: '2px solid green'
    },
    outlinedRoot:{
      "&:hover $notchedOutline": {
        background :'red',
      },
    },
    focused: {},
    input: {
    "&:-webkit-autofill": {
      WebkitBoxShadow: "0 0 0 1000px none inset !important"
    },

  }




}));



export const Label = styled(InputLabel)({
  color:'#ffffff'
});

export const Float = styled(Box)({
  width: '28px',
});
