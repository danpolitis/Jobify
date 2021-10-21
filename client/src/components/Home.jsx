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
import Search from './Search.jsx';
import useFetch from './dashboard/postings/hooks/useFetch.jsx';

function Home() {
  const [ searchRoute, setSearchRoute ] = useState("all");
  const jobs = useFetch(`http://localhost:3000/postings/${searchRoute}`);

  return (
    <div>
      <Container justify="center">
        <Typography
          variant="h2"
          color="text.secondary"
          align="center"
          sx={{marginTop: "100px", marginBottom: "30px", marginBottom: "75px"}}
        >
          Jobify
        </Typography>
        <Search setRoute={setSearchRoute} />
      </Container>
    </div>
  );
}

export default Home