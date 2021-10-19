import React, { useState } from "react"
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Button";
import Grid from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";
import './Home.css';





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
        {...props}
      >
        Jobify
      </Typography>
        <Grid alignItems="center" justify="center">
      <form onSubmit={() => handleSubmit}>
        <label> What </label>
        <TextField className="homepage"
          value={jobName} sx={{minWidth: "50px"}} placeholder="Job title, keywords, or company" onChange={e => setJobName(e.target.value)}></TextField>
      <label> Where </label>
        <TextField
          value={zipCode} style={{minWidth: '10px'}}  placeholder="Enter zipcode" onChange={e => setZipCode(e.target.value)}></TextField>
        <Button sx={{marginLeft: "10px", minHeight: "5vh"}} type="submit" disableElevation onClick={handleSubmit} color="primary" variant="contained">Find jobs</Button>
      </form>
      </Grid>
      </Container>
    </div>
  );
}

export default Home