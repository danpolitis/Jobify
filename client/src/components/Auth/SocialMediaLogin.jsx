// Import FirebaseAuth and firebase.
import React, { useEffect, useState, useContext} from 'react';
import { Link, useHistory } from 'react-router-dom';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import {Button, Typography } from '@mui/material';
import firebase from 'firebase';
import './firebase.js';
import { useAuth } from './AuthContext.js';
// import { GlobalContext } from '../App.jsx';

// Configure FirebaseUI.
const uiConfig = {
  // Popup signin flow rather than redirect flow.
  signInFlow: 'popup',
  // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
  // signInSuccessUrl: "/",
  // We will display Google and Facebook as auth providers.
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.FacebookAuthProvider.PROVIDER_ID
  ],
  callbacks: {
    // Avoid redirects after sign-in.
    signInSuccessWithAuthResult: () => false,
  },
};

function SocialMediaLogin() {
  const [isSignedIn, setIsSignedIn] = useState(false); // Local signed-in state.
  const [error, setError] = useState("");
  const { currentUser, logout } = useAuth();
  const history = useHistory();
  // const globalData = useContext(GlobalContext);
  // Listen to the Firebase Auth state and set the local state.
  useEffect(() => {
    const unregisterAuthObserver = firebase.auth().onAuthStateChanged(user => {
      if(user) {
      // console.log('socialmedia: ', user.email);
      // globalData.dispatch({ type: 'updateUserId', data: user.uid });
      }

      setIsSignedIn(!!user);
    });
    return () => unregisterAuthObserver(); // Make sure we un-register Firebase observers when the component unmounts.
  }, []);

  const logoutHandler =(e) => {
    setError('');
    logout()
    .then(() => {
      history.push("/");
    })
    .catch((error) => {
      setError('Failed to log out');
    })
  }

  if (!isSignedIn) {
    return (
      <div>
        <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
      </div>
    );
  }
  return (
    <div>
      <Typography>Welcome {firebase.auth().currentUser.displayName}! You are now signed-in!</Typography>
      <Typography><Link to="/dashboard" >Dashboard</Link></Typography>
      <Button onClick={logoutHandler}>Sign-out</Button>
    </div>
  );
}

export default SocialMediaLogin;