import './App.css';
import React from "react";
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
import { AuthProvider } from './Auth/AuthContext.js';
import SignUp from "./Auth/SignUp.jsx";
import SignIn from "./Auth/SignIn.jsx";

// Import component here

function App() {


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

          <AuthProvider>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/test" component={Test} />
              <Route path="/notes" component={Notes} />
              <Route path="/dashboard" component={Dashboard} />
              <Route path="/signup" component={SignUp} />
              <Route path="/signin" component={SignIn} />
              {/* Add route here */}
            </Switch>
          </AuthProvider>
          </div>
            <Footer sx={{ mt: 5 }} />
        </Box>
      </ThemeProvider>
    </>
  );
}

export default App;