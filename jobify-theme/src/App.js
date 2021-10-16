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
import Home from "./Home.jsx"
import Profile from "./Profile.jsx"
import Theme from "./Theme/ThemeFile.js"
import { ThemeProvider } from "@mui/material/styles";


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
      <CssBaseline />
      <Header />
    <div className="App">
    <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/profile" component={Profile} />
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
      {/* End footer */}
      </ThemeProvider>
    </>
  );
}

export default App;
