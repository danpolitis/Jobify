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




function Home(props) {
  const [ keyword, setKeyword ] = useState("");
  const [ city, setCity ] = useState("");

  function handleSubmit(e) {
    e.preventDefault()
    // axios.get(`/${radioValue}/${gamerTag}/sessions`).then((response) => {
    //   setProfile(response.data);
    // }).then(setProfileExists(true))
    //   .catch((err => {
    //     setProfileExists(false)
    //     setGamerTag('')
    //     alert('username is invalid')
    //   }))
  }

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
        <form onSubmit={() => console.log('submitted')}>
          <TextField
            label="Keyword"
            value={keyword}
            sx={{ padding: "5px", minWidth: "10px" }}
            placeholder="Job title, description, industry"
            onChange={e => setKeyword(e.target.value)}
            variant="outlined"
          />
          <TextField
            label="City"
            value={city}
            sx={{ padding: "5px", minWidth: "10px" }}
            placeholder="City"
            onChange={e => setCity(e.target.value)}
            variant="outlined"
          />
          <Button
            sx={{ margin: "2%" }}
            type="submit"
            color="primary"
            variant="contained"
            disableElevation
          >
            Find jobs
          </Button>
        </form>
      </Container>
    </div>
  );
}

export default Home