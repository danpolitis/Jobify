import React, { useRef, useState, useEffect} from 'react';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from './AuthContext.js';
import { Grid, Paper, Avatar, Typography, TextField, Button } from '@mui/material'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Checkbox from '@mui/material/Checkbox';


const Signup = () => {
    const paperStyle = { padding: '30px 20px', width: 380, margin: "20px auto" }
    const headerStyle = { margin: 0 }
    const avatarStyle = { backgroundColor: '#1bbd7e' }
    const marginTop = { marginTop: 5 }

    const emailRef = useRef();
    const passwordRef = useRef();
    const firstNameRef = useRef();
    const lastNameRef = useRef();
    const cityRef = useRef();
    const stateRef = useRef();
    const passwordConfirmRef = useRef();
    const { signup } = useAuth();
    console.log(signup);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const history = useHistory();



    const SignUpHandler = (e) => {
      e.preventDefault();

      setError('');

      console.log(passwordRef.current);
      if (passwordRef.current.value !== passwordConfirmRef.current.value) {
        return setErrorMessage('passwords do not match!');
      }

      setLoading(true);

      signup(emailRef.current.value, passwordRef.current.value)
      .then((userObj) => {
        const data = {
          // _id: userObj.user.uid,
          // userName: usernameRef.current.value,
          firstName: firstNameRef.current.value,
          lastName: lastNameRef.current.value,
          email: emailRef.current.value,
          city: cityRef.current.value,
          state: stateRef.current.value,
        };
        return axios.post('/seekers', data);
      })
      .then(() => {
        history.push('/');
      })
      .catch((error) => {
        setErrorMessage(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
    }

    // async function handleSubmit(e) {
    //   e.preventDefault();
    //   console.log(passwordRef.current.value);
    //   if (passwordRef.current.value !== passwordConfirmRef.current.value) {
    //     return setError("Passwords do not match")
    //   }
    //   try {
    //     setError("")
    //     setLoading(true)
    //     await signup(emailRef.current.value, passwordRef.current.value)
    //     // history.push("/")
    //   } catch {
    //     setError("Failed to create an account")
    //   }

    //   setLoading(false);
    // }




    return (
        <Grid>
            <Paper elevation={20} style={paperStyle}>
                <Grid align='center'>
                    <h2 style={headerStyle}>Sign Up</h2>
                    <Typography variant='caption' gutterBottom>Please fill this form to create an account !</Typography>
                </Grid>
                <form>
                    <TextField fullWidth label='First Name' placeholder="Enter first name" inputRef={firstNameRef}/>
                    <TextField fullWidth label='Last Name' placeholder="Enter last name" inputRef={lastNameRef}/>
                    <TextField fullWidth label='Email' placeholder="Enter your email" inputRef={emailRef}/>
                    <TextField fullWidth label='City' inputRef={cityRef}/>
                    <TextField fullWidth label='State' inputRef={stateRef}/>
                    <FormControl component="fieldset" style={marginTop}>

                        <RadioGroup style={{ display: 'initial' }}>
                            <FormControlLabel value="seeker" control={<Radio />} label="JobSeeker" />
                            <FormControlLabel value="employer" control={<Radio />} label="Employer" />
                        </RadioGroup>
                    </FormControl>
                    <TextField fullWidth label='Password' placeholder="Enter your password"/>
                    <TextField fullWidth label='Confirm Password' placeholder="Confirm your password"/>
                    <FormControlLabel
                        control={<Checkbox name="checkedA" />}
                        label="I accept the terms and conditions."
                    />
                    <Button disabled={loading} type='submit' variant='contained' color='primary' onClick={SignUpHandler}>Sign up</Button>
                </form>
            </Paper>
        </Grid>
    )
}

export default Signup;