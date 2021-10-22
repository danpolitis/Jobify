import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import './Home.css';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import { useAuth } from '../Auth/AuthContext.js';



export default function EmployerDropdown() {
  const { logout } = useAuth();
  const [error, setError] = useState("");

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
      <Link style={{color: '#49475B', textDecoration: 'none'}} to="/dashboard"> <MenuItem style={{textDecoration: 'none'}} value={20}>Dashboard</MenuItem></Link>
      <Link style={{color: '#49475B', textDecoration: 'none'}} to="/new-post"> <MenuItem value={30}>Add Job</MenuItem></Link>
      <Link style={{color: '#49475B', textDecoration: 'none'}} to="/documents"> <MenuItem value={40}>Documents</MenuItem></Link>
      <Link style={{color: '#49475B', textDecoration: 'none'}} to="/notes"> <MenuItem value={40}>Notes</MenuItem></Link>
      <Link style={{color: '#49475B', textDecoration: 'none'}} to="/blogs"> <MenuItem value={50}>Blogs</MenuItem></Link>
      <Link style={{color: '#49475B', textDecoration: 'none'}} to="/community"> <MenuItem value={50}>Community</MenuItem></Link>
      <Link style={{color: '#49475B', textDecoration: 'none'}} to="/"> <MenuItem value={50} onClick={logoutHandler}>Log Out</MenuItem></Link>
    </div>
  )
}
