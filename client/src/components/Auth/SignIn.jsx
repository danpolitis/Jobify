import React, {
  useRef, useState, useEffect,
} from 'react';
import { Grid, Paper, Avatar, TextField, Button, Typography } from '@mui/material';
import { Link, useHistory } from 'react-router-dom';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import SocialMediaLogin from './SocialMediaLogin.jsx';
import { useAuth } from './AuthContext';

export default function SignIn() {

  const paperStyle={padding:20, height:'45vh',width:380, margin:"20px auto"}
  const avatarStyle={backgroundColor:'#1bbd7e'}
  const btnstyle={margin:'8px 0'}

  const emailRef = useRef();
  const passwordRef = useRef();
  const { login } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  const signInHandler = (event) => {
    event.preventDefault();

    setErrorMessage('');
    setLoading(true);

    login(emailRef.current.value, passwordRef.current.value)
      .then(() => {
        history.push('/');
      })
      .catch((error) => {
        setErrorMessage(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };


  return (
    <>
      <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                     {/*  */}
                    <h2>Sign In</h2>
                </Grid>
                <TextField label='Email' placeholder='Enter email' fullWidth required inputRef={emailRef}/>
                <TextField label='Password' placeholder='Enter password' type='password' fullWidth required inputRef={passwordRef}/>

                <Button type='submit' color='primary' variant="contained" style={btnstyle} component={Link} to="/" fullWidth>Sign in</Button>
                <Typography >
                     {/* <Link href="#" >
                        Forgot password ?
                </Link> */}
                </Typography>
                <Typography > Do you have an account ?
                     <Link to="/signup" >
                        Sign Up
                </Link>
                </Typography>
                <SocialMediaLogin />
            </Paper>
        </Grid>
    </>
  )
}