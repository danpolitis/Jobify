import React, { useState } from "react"
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";
import './Home.css';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import { IconButton , Stack} from '@mui/material';
import LoginIcon from '@mui/icons-material/Login';
import { Link } from "react-router-dom";
import Search from '../Search.jsx';
import useFetch from '../dashboard/postings/hooks/useFetch.jsx';

function Home() {
  const [ searchRoute, setSearchRoute ] = useState("all");
  const jobs = useFetch(`http://localhost:3000/postings/${searchRoute}`);

  return (
    <div>
      <Container justify="center">
        <Typography
          variant="h2"
          align="center"
          sx={{color: "#49475B", marginTop: "100px", marginBottom: "50px", fontWeight: "700"}}
        >
          Jobi<sup>fy</sup>
        </Typography>
        <Search setRoute={setSearchRoute} />
        <Stack sx={{width:"30%", margin:"50px auto"}}>
          <Button href="/signup" variant="contained" size="large" startIcon={<LoginIcon />}>
            Create An Account
          </Button>
          <Typography
            variant="text"
            color="text.primary"
            align="center"
            sx={{marginTop: "25px", marginBottom: "25px", fontWeight: "700"}}
          >
            <Link className="Homelinks" to="/new-post">Employers: Post a job</Link> – Your next hire is here
          </Typography>
        </Stack>
      </Container>
    </div>
  );
}

export default Home