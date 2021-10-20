import './App.css';
import React, { useReducer } from "react";
import { Route, Switch } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import GlobalStyles from "@mui/material/GlobalStyles";
import Container from "@mui/material/Container";
import Box from '@mui/material/Box';
import { ThemeProvider } from "@mui/material/styles";
import { Helmet } from 'react-helmet';
import Footer from "./Footer.jsx"
import Header from "./Header.jsx"
import Home from "./Home.jsx"
import Test from "./Test.jsx"
import Notes from "./notes/Notes.jsx"
import Dashboard from "./dashboard/Dashboard.jsx"
import Theme from "../Theme/ThemeFile.js"
import AddJob from "./AddJob/AddJob.jsx";
import { AuthProvider } from './Auth/AuthContext.js';
import SignUp from "./Auth/SignUp.jsx";
import SignIn from "./Auth/SignIn.jsx";

//Import component here

const initialState = {
  userId: '',
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'updateUserId':
      return { ...state, userId: action.data };
    default:
      return state;
  }
};

export const GlobalContext = React.createContext();

function App() {

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <ThemeProvider theme={Theme}>
        <GlobalStyles
          styles={{ ul: { margin: 0, padding: 0, listStyle: "none" } }}
        />
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            minHeight: '100vh',
          }}
        >
          <CssBaseline />
          <Header />
          <div className="App">
          <Helmet>
            <title>Jobify</title>
            <meta name="description" content="App Description" />
            <meta name="theme-color" content="#799496" />
          </Helmet>
          <GlobalContext.Provider value={{ state, dispatch }}>
          <AuthProvider>
            <Switch>
              <Route path="/test" component={Test} />
              <Route path="/new-post" component={AddJob} />
              <Route exact path="/" component={Home} />
              <Route path="/signup" component={SignUp} />
              <Route path="/signin" component={SignIn} />
              <Route path="/dashboard" component={Dashboard} />
              <Route path="/notes" component={Notes} />
              {/* Add route here */}
            </Switch>
          </AuthProvider>
          </GlobalContext.Provider>
          </div>
            <Footer sx={{ mt: 5 }} />
        </Box>
      </ThemeProvider>
    </>
  );
}

export default App;