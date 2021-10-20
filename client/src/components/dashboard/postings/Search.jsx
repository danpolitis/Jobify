import React, { useState } from "react";
import { Grid, TextField, Button } from "@mui/material";
import useFetch from "./hooks/useFetch.jsx";

function Search() {
  const [ keyword, setKeyword ] = useState('');
  const [ city, setCity ] = useState('');

  return (
    <Grid item xs justifyContent="center">
      <form onSubmit={() => console.log('submitted')}>
      <label> What </label>
      <TextField
        // className="homepage"
        value={keyword}
        sx={{padding: "5px", minWidth: "10px"}}
        placeholder="Job title, description, industry"
        onChange={e => setKeyword(e.target.value)}
      />
      <label> Where </label>
      <TextField
        // className="homepage"
        value={city}
        sx={{padding: "5px", minWidth: '10px'}}
        placeholder="Enter city"
        onChange={e => setCity(e.target.value)}
      />
      <Button
        sx={{marginTop: "10px", marginLeft: "10px"}}
        type="submit"
        color="primary"
        variant="contained"
        disableElevation
      >
        Find jobs
      </Button>
      </form>
    </Grid>
  );
}

export default Search