import React, { useState, useEffect,  } from 'react';
import { useAuth } from './AuthContext.js';
import { Link } from "react-router-dom";
import { Typography, Button} from '@mui/material'


const SignOut = () => {
  const [error, setError] = useState("");
  const { logout } = useAuth();

  const logoutHandler = (e) => {
    // e.preventDefault();
    logout()
    .then(() => {
      history.push("/");
    })
    .catch((error) => {
      setError('Failed to log out');
    })
  }


  return (
    <div>
      <Typography>We will miss you</Typography>
      <Link to="/" onClick={logoutHandler}>Sign-out</Link>
    </div>
  )
}

export default SignOut;