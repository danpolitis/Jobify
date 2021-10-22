import React from "react";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

export default function Header() {
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
              fontWeight:"700"
            }}
          >
            Jobi<sup>fy</sup>
          </Typography>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/new-post">Add Job</Link>
            <Link to="/dashboard">Dashboard</Link>
          </nav>
          <Button
            href="/signin"
            variant="contained"
            sx={{backgroundColor: "#49475B", my: 1, mx: 1.5}}
          >
            Login / Sign Up
          </Button>
        </Toolbar>
      </AppBar>
    </>
  );
}
