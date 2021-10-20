import React, { useState } from "react"
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Button";
import Grid from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";
import './Home.css';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';




function Home(props) {

  const [jobName, setJobName] = useState('')
  const [zipCode, setZipCode] = useState('')

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
      <form onSubmit={() => handleSubmit}>
        <label> What </label>
        <TextField className="homepage"
          value={jobName} sx={{padding: "5px", minWidth: "10px"}} placeholder="Job title, company, keywords" onChange={e => setJobName(e.target.value)}></TextField>
      <label> Where </label>
        <TextField className="homepage"
          value={zipCode} sx={{padding: "5px", minWidth: '10px'}}  placeholder="Enter zipcode" onChange={e => setZipCode(e.target.value)}></TextField>
        <Button sx={{marginTop: "10px", marginLeft: "10px"}} type="submit" disableElevation onClick={handleSubmit} color="primary" variant="contained">Find jobs</Button>
      </form>
      </Container>
    </div>
  );
}

export default Home