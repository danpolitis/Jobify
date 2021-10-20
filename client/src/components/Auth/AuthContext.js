import React, { useContext, useState, useEffect } from "react";
import { auth } from "./firebase";
import { GlobalContext } from '../App.jsx';

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);
  const globalData = useContext(GlobalContext);

  function signup(email, password) {
    // console.log('auth signup email:', email);
    return auth.createUserWithEmailAndPassword(email, password);
  }

  function login(email, password) {
    // console.log('auth login email:', email);
    return auth.signInWithEmailAndPassword(email, password);
  }

  function logout() {
    return auth.signOut();
  }

  // function resetPassword(email) {
  //   return auth.sendPasswordResetEmail(email)
  // }

  // function updateEmail(email) {
  //   return currentUser.updateEmail(email)
  // }

  // function updatePassword(password) {
  //   return currentUser.updatePassword(password)
  // }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        // console.log('auth userId:', user.uid);
        setCurrentUser(user);
        globalData.dispatch({ type: 'updateUserId', data: user.uid });
        console.log(globalData);
      } else {
        globalData.dispatch({ type: 'updateUserId', data: '' });
      }

      if(loading) {
        setLoading(false);
      }

    })

    return unsubscribe
  }, [])

  const value = {
    currentUser,
    login,
    signup,
    logout,
    // resetPassword,
    // updateEmail,
    // updatePassword
  }

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  )
}
