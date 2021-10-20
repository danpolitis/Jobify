import React, {
  useRef, useState, useEffect,
} from 'react';
import axios from 'axios';
import { Grid, Paper, Avatar, TextField, Button, Typography, Alert } from '@mui/material';
import { Link, useHistory } from 'react-router-dom';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import SocialMediaLogin from './SocialMediaLogin.jsx';
import { useAuth } from './AuthContext';

export default function SignIn() {

  const paperStyle = { padding: 20, height: '50vh', width: 380, margin: "20px auto" }
  const avatarStyle = { backgroundColor: '#1bbd7e' }
  const btnstyle = { margin: '15px 0' }

  const emailRef = useRef();
  const passwordRef = useRef();
  const { login } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  const signInHandler = (event) => {
    event.preventDefault();

    setError('');
    setLoading(true);

    login(emailRef.current.value, passwordRef.current.value)
      .then((userObj) => {
        const data = {
          uuid: userObj.user.uid,
        }
        console.log(data);
        return axios.get('http://localhost:3000/signup_login');
      })
      .then(() => {
        console.log(emailRef.current.value);
        history.push('/');
      })
      .catch((error) => {
        setError(error.message);
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
          {error && <Alert severity="error">{error}</Alert>}
          <form>
            <TextField label='Email' placeholder='name@example.com' fullWidth required inputRef={emailRef} />
            <TextField label='Password' placeholder='Enter your password' type='password' fullWidth required inputRef={passwordRef} />

            <Button type='submit' color='primary' variant="contained" style={btnstyle} component={Link} to="/" onClick={signInHandler}>Sign in</Button>
          </form>
          {/* <Typography ><Link href="#" >Forgot password ?</Link></Typography> */}
          <Typography color="primary">-----------------------------or-----------------------------</Typography>
          <SocialMediaLogin />
          <Typography> Do you have an account ?
            <Link to="/signup" >
              Sign Up
            </Link>
          </Typography>
        </Paper>
      </Grid>
    </>
  )
}