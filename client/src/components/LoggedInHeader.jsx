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





export default function LoggedInHeader(props) {

  const [dropDown, setDropDown] = useState('')

  const handleChange = (event) => {
    setDropDown(event.target.value);
  };



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
            Jobify
          </Typography>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/dashboard">Name of User</Link>
          </nav>
          <FormControl sx={{ my: 1, mx: 1.5 }}>
            <Select
              sx={{ maxHeight: "50px", maxWidth: "50px" }}
              value={dropDown}
              label="dropdown"
              onChange={handleChange}
              IconComponent={() => (
                <FormatListBulletedIcon sx={{marginLeft: "5px", position: "absolute"}} />)}
            >
            <Link to="/"> <MenuItem value={10}>Home</MenuItem></Link>
            <Link to="/test"> <MenuItem value={20}>Documents</MenuItem></Link>
            <Link to="/notes"> <MenuItem value={30}>Notes</MenuItem></Link>
            <Link to="/blogs"> <MenuItem value={40}>Blogs</MenuItem></Link>
            <Link to="/community"> <MenuItem value={40}>Community</MenuItem></Link>
            <Link to="/logout"> <MenuItem value={50}>Log Out</MenuItem></Link>
            </Select>
          </FormControl>
        </Toolbar>
      </AppBar>
    </>
  );
}


