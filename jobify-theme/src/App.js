import './App.css';
import React from "react";
import { Route, Switch } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import GlobalStyles from "@mui/material/GlobalStyles";
import Container from "@mui/material/Container";
import Box from '@mui/material/Box';
import Home from "./components/Home.jsx"
import Test from "./components/Test.jsx"
import Theme from "./Theme/ThemeFile.js"
import { ThemeProvider } from "@mui/material/styles";
import { Helmet } from 'react-helmet';


function Footer() {
  return (
    <Typography
      variant="body2"
      color="#FFFFFF"
      align="center"
    >
      {"Copyright © "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

function Header() {
  return (
    <>
      <AppBar
        position="static"
        color="primary"
        elevation={0}
        sx={{
          borderBottom: (theme) => `1px solid ${theme.palette.divider}`,
        }}
      >
        <Toolbar sx={{ flexWrap: "wrap" }}>
          <Typography
            variant="h6"
            color="inherit"
            noWrap
            sx={{
              flexGrow: 1,
              display: "flex",
            }}
          >
            Logo
          </Typography>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/profile">Profile</Link>
          </nav>
          <Button
            href="#"
            variant="contained"
            sx={{ my: 1, mx: 1.5 }}
          >
            Login / Sign Up
          </Button>
        </Toolbar>
      </AppBar>
    </>
  );
}


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
            <title>Andy</title>
            <meta name="description" content="App Description" />
            <meta name="theme-color" content="#799496" />
          </Helmet>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/profile" component={Test} />
            </Switch>
          </div>
          {/* Footer */}
          <Container
            maxWidth="md"
            component="footer"
            sx={{
              borderTop: (theme) => `1px solid ${theme.palette.divider}`,
              mt: "auto",
              py: [3],
              minWidth: "100%",
              backgroundColor: "#799496"
            }}
          >
            <Footer sx={{ mt: 5 }} />
          </Container>
        </Box>
        {/* End footer */}
      </ThemeProvider>
    </>
  );
}

export default App;
