import React from "react";
import { makeStyles } from '@mui/styles';


const useStyles = makeStyles((theme) => ({
  backgroundPage: {
    backgroundColor: theme.palette.primary.main,
    padding: theme.spacing(1),
    minHeight: '100vh',
    justifyContent: 'center',
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: "center"
  },
  container:{
  }
}))

export default function Public (props){

  const classes = useStyles()

  return(
    <div className={classes.backgroundPage}>
      <div className={classes.container}>
        {props.children}
      </div>
    </div>
  )
}
