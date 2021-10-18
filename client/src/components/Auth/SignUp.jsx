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
    const userNameRef = useRef();
    const firstNameRef = useRef();
    const lastNameRef = useRef();
    const cityRef = useRef();
    const stateRef = useRef();
    const passwordConfirmRef = useRef();
    const { signup } = useAuth();

    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const history = useHistory();



     const SignUpHandler = (e) => {

      e.preventDefault();

      setError('');

      if (passwordRef.current.value !== passwordConfirmRef.current.value) {
        return setError('passwords do not match!');
      }

      setLoading(true);


      signup(emailRef.current.value, passwordRef.current.value)

      .then((userObj) => {
        const data = {
          // id: userObj.user.uid,
          username: username.current.value,
          firstName: firstNameRef.current.value,
          lastName: lastNameRef.current.value,
          email: emailRef.current.value,
          city: cityRef.current.value,
          state: stateRef.current.value,
        };
        // console.log(data);
        return axios.post('/seekers', data);
      })
      .then(() => {
        history.push('/');
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => {
        setLoading(false);
      });


    }

    useEffect(() => {
      let isSubscribed = true;
      return () => {
        isSubscribed = false;
      };
    }, []);



    return (
        <Grid>
            <Paper elevation={20} style={paperStyle}>
                <Grid align='center'>
                    <h2 style={headerStyle}>Sign Up</h2>
                    <Typography variant='caption' gutterBottom>Please fill this form to create an account !</Typography>
                </Grid>
                <form >
                    <TextField fullWidth label='Username' placeholder="Enter usrname" type="text" inputRef={userNameRef}/>
                    <TextField fullWidth label='First Name' placeholder="Enter first name" type="text" inputRef={firstNameRef}/>
                    <TextField fullWidth label='Last Name' placeholder="Enter last name" type="text" inputRef={lastNameRef}/>
                    <TextField fullWidth label='Email' placeholder="Enter your email" inputRef={emailRef}/>
                    <TextField fullWidth label='City' inputRef={cityRef}/>
                    <TextField fullWidth label='State' inputRef={stateRef}/>
                    <FormControl component="fieldset" style={marginTop}>

                        <RadioGroup style={{ display: 'initial' }}>
                            <FormControlLabel value="seeker" control={<Radio />} label="JobSeeker" />
                            <FormControlLabel value="employer" control={<Radio />} label="Employer" />
                        </RadioGroup>
                    </FormControl>
                    <TextField fullWidth label='Password' placeholder="Enter your password" inputRef={passwordRef}/>
                    <TextField fullWidth label='Confirm Password' placeholder="Confirm your password" inputRef={passwordConfirmRef}/>
                    <FormControlLabel
                        control={<Checkbox name="checkedA" />}
                        label="I accept the terms and conditions."
                    />
                    <Button disabled={loading} type='submit' variant='contained' onClick={SignUpHandler} color='primary'>Sign up</Button>
                </form>
            </Paper>
        </Grid>
    )
}

export default Signup;