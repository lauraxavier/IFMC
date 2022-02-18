import { styled } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';
import { Link as link } from 'react-router-dom'
import Button from '@mui/material/Button';


export const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    boxShadow: '0px 2px 120px rgba(0, 0, 0, 0.25)',
    borderRadius: '6px',
    background: 'rgba(255, 255, 255, 0.02)',
    width: '300px',
    height: 'max-content',
    padding:'40px 30px',
  },
  paper: {
    width: '100%',
  },
  linkContainer: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    marginTop: '40px'
  },
  logoContainer: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'end'
  },
  recoverLink: {
    fontSize: '12px',
    fontWeight: '300 !important',
  }
}))

export const Link = styled(link)({
  textDecoration: 'none',
  color: '#ffffff',
  textAlign: 'center',
  fontWeight: '900',
})

export const ButtonSecondary = styled(Button)({
  width: '100%',
  marginTop: '20px',
  fontWeight: 'bold',
});
